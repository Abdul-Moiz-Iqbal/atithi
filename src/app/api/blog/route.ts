

import { NextRequest, NextResponse } from "next/server";
import Blog from "@/models/Blog";
import Category from "@/models/Category";
import dbConnect from "@/config/database"; // Helper to connect to MongoDB

// POST: Create a new blog
// export async function POST(req) {
//   try {
//     // Parse the request body using the req instance

//     const { title, content, category: categoryName, image_url } = await req.json();
//     console.log("Title:", title, "Content:", content, "Category:", categoryName, "Image:", image_url);
//     // Validate required fields
//     if (!title || !content || !categoryName || !image_url) {
//         console.log("Title, content, image and category are required.");
//       return NextResponse.json(
//         { success: false, message: "Title, content, and category are required." },
//         { status: 400 }
//       );
//     }

//     // Connect to the database
//     await dbConnect();

//     // Find or create the category
//     const category = await Category.findOne({ title: categoryName });

//     // Create the blog with the category ID
//     const blog = await Blog.create({
//       title,
//       content,
//       category: category._id,
//       image_url

//     });

//     return NextResponse.json({ success: true, blog }, { status: 201 });
//   } catch (error) {
//     console.error("Error creating blog:", error);
//     return NextResponse.json(
//       { success: false, message: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }
export async function PUT(req: Request) {


  try {
    // Parse the incoming JSON payload
    const { title, content, image_url ,id} = await req.json();
    console.log(id)
    // Validate required fields
    if (!title || !content || !image_url) {
      return NextResponse.json(
        { success: false, message: 'Title, content, and image are required.' },
        { status: 400 }
      );
    }

    // Connect to the database
    await dbConnect();

    // Update the blog
    const blog = await Blog.findByIdAndUpdate(
      id,
      { title, content, image_url }, // Update these fields
      { new: true, runValidators: true } // Return the updated document
    );

    if (!blog) {
      return NextResponse.json(
        { success: false, message: 'Blog not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Blog updated successfully.', blog },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error.' },
      { status: 500 }
    );
  }
}
export async function POST(req) {
  try {
    // Parse the request body using the req instance
    const {
      title,
      content,
      category: categoryName,
      image_url,
      blogId,
    } = await req.json();
    console.log(
      "Title:",
      title,
      "Content:",
      content,
      "Category:",
      categoryName,
      "Image:",
      image_url
    );

    // Validate required fields
    if (!title || !content || !categoryName || !image_url) {
      console.log("Title, content, image, and category are required.");
      return NextResponse.json(
        {
          success: false,
          message: "Title, content, and category are required.",
        },
        { status: 400 }
      );
    }

    // Connect to the database
    await dbConnect();

    // Find or create the category
    const category = await Category.findOne({ title: categoryName });

    if (!category) {
      return NextResponse.json(
        { success: false, message: "Category not found." },
        { status: 400 }
      );
    }

    let blog;

    if (blogId) {
      // If blogId is provided, update the existing blog
      blog = await Blog.findByIdAndUpdate(
        blogId,
        { title, content, category: category._id, image_url },
        { new: true } // This ensures the updated blog is returned
      );

      if (!blog) {
        return NextResponse.json(
          { success: false, message: "Blog not found." },
          { status: 404 }
        );
      }
    } else {
      // Otherwise, create a new blog
      blog = await Blog.create({
        title,
        content,
        category: category._id,
        image_url,
      });
    }

    return NextResponse.json(
      { success: true, blog },
      { status: blogId ? 200 : 201 }
    );
  } catch (error) {
    console.error("Error creating or updating blog:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}


// for categories of blog
export async function GET(req: NextRequest) {
  try {
    // Extract category ID from the request
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId");
    await dbConnect();
    if (!categoryId) {
      const blogs = await Blog.find().populate("category");
      return NextResponse.json({ success: true, data: blogs }, { status: 200 });
      // return NextResponse.json(
      //   { success: false, message: "Category ID is required" },
      //   { status: 400 }
      // );
    }

    // Connect to the database
 

    // Fetch blogs with the specified categoryId
    const blogs = await Blog.find({ category: categoryId }).populate(
      "image_url"
    );

    // Return the blogs in the response
    return NextResponse.json({ success: true, data: blogs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}


export async function DELETE(req) {
  try {
    // Parse the request body to get the blogId
    const { id:blogId } = await req.json();
    console.log("Blog ID to delete:", blogId);

    // Validate blogId
    if (!blogId) {
      return NextResponse.json(
        { success: false, message: "Blog ID is required." },
        { status: 400 }
      );
    }

    // Connect to the database
    await dbConnect();

    // Find and delete the blog
    const deletedBlog = await Blog.findByIdAndDelete(blogId);

    if (!deletedBlog) {
      return NextResponse.json(
        { success: false, message: "Blog not found." },
        { status: 404 }
      );
    }

    // Return success response
    return NextResponse.json(
      { success: true, message: "Blog deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}