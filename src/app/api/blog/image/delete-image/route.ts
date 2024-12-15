// import { NextResponse } from 'next/server';
// import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export async function POST(req: Request) {
//   try {
//     const { public_id } = await req.json();

//     if (!public_id) {
//       return NextResponse.json({ success: false, message: 'Missing public_id' }, { status: 400 });
//     }

//     const result = await cloudinary.uploader.destroy(public_id);

//     if (result.result !== 'ok') {
//       throw new Error('Failed to delete image');
//     }

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error('Error deleting image:', error);
//     return NextResponse.json({ success: false, message: 'Failed to delete image' }, { status: 500 });
//   }
// }

import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import dbConnect from '@/config/database';
import Blog from '@/models/Blog';
import Category from '@/models/Category';

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// delete image for simple blog  (for category image blog go to /api/categories folder)
export async function POST(req: Request) {
  try {
    const { public_id, blogId, modelType } = await req.json();

    if (!public_id || !blogId) {
      return NextResponse.json(
        { success: false, message: 'Missing required parameters: public_id or blogId' },
        { status: 400 }
      );
    }

    // Delete image from Cloudinary
    const cloudinaryResult = await cloudinary.uploader.destroy(public_id);

    if (cloudinaryResult.result !== 'ok') {
      throw new Error('Failed to delete image from Cloudinary');
    }

    // Connect to the database
    await dbConnect();

    // Update the blog by removing the image_url object
    if(modelType == 'blog'){

      const blog = await Blog.findByIdAndUpdate(
        blogId,
        { $unset: { image_url: '' } }, // Remove the `image_url` field
        { new: true }
      )
        if (!blog) {
        return NextResponse.json(
          { success: false, message: 'Blog not found' },
          { status: 404 }
        );
      }
         return NextResponse.json({
      success: true,
      message: 'Image deleted successfully, and image_url field removed from blog',
      blog,
    });
    }
    if(modelType == 'category'){

      const category = await Category.findByIdAndUpdate(
        blogId,
        { $unset: { image_url: '' } }, // Remove the `image_url` field
        { new: true }
      )
        if (!category) {
        return NextResponse.json(
          { success: false, message: 'Category Blog not found' },
          { status: 404 }
        );
      }
         return NextResponse.json({
      success: true,
      message: 'Image deleted successfully, and image_url field removed from Category blog',
      category,
    });
    }

  

 
  } catch (error) {
    console.error('Error deleting image:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to delete image or update blog' },
      { status: 500 }
    );
  }
}
