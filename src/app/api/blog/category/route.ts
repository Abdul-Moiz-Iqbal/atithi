// import dbConnect from "@/config/database";
// import Category from "@/models/Category";
// import { NextRequest, NextResponse } from "next/server";  // Import NextResponse

// export async function GET() {
//   try {
//     await dbConnect();
//     const categories = await Category.find({});
//     return NextResponse.json({ success: true, data: categories }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ success: false, message: error.message }, { status: 500 });
//   }
// }

// export async function POST(request: NextRequest) {
//   try {
//     const { name } = await request.json();

//     if (!name) {
//       return NextResponse.json(
//         { success: false, message: "Category name is required" },
//         { status: 400 }
//       );
//     }

//     const existingCategory = await Category.findOne({ name });
//     if (existingCategory) {
//       return NextResponse.json(
//         { success: false, message: "Category already exists" },
//         { status: 400 }
//       );
//     }

//     const category = await Category.create({ name });
//     return NextResponse.json({ success: true, data: category }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, message: error.message },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import dbConnect from "@/config/database";
import mongoose from "mongoose";
import Category from "@/models/Category"; // Ensure the correct path
import '../../../../../models/Image'
export async function GET() {
  try {
    await dbConnect();
    const categories = await Category.find().populate('image_url');
    return NextResponse.json({ success: true, data: categories }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { title, content, image_url } = await req.json();

    if (!title) {
      return NextResponse.json(
        { message: "Title is required" },
        { status: 400 }
      );
    }

        const existingCategory = await Category.findOne({ title });
    if (existingCategory) {
      console.log("Category already exists"); 
      return NextResponse.json(
        { success: false, message: "Category already exists" },
        { status: 400 }
      );
    }


    const newCategory = await Category.create({ title, content,  image_url: new mongoose.Types.ObjectId(image_url) });

    return NextResponse.json(
      { message: "Category created successfully", category: newCategory },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { message: "Error creating category" },
      { status: 500 }
    );
  }
}


export async function PUT(req: Request) {
  try {
    // Parse the request body
    const { id, title, content, image_url } = await req.json();

    // Validate input data
    if (!id || !title || !image_url) {
      return NextResponse.json(
        { success: false, message: 'ID, title, and image URL are required.' },
        { status: 400 }
      );
    }

    // Connect to the database
    await dbConnect();

    // Find and update the category
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { title, content, image_url }, // Fields to update
      { new: true, runValidators: true } // Return updated document and run validators
    );

    // Handle case where the category is not found
    if (!updatedCategory) {
      return NextResponse.json(
        { success: false, message: 'Category not found.' },
        { status: 404 }
      );
    }

    // Return success response
    return NextResponse.json(
      { success: true, message: 'Category updated successfully.', category: updatedCategory },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating category:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error.' },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    // Parse the request body to get the categoryId
    const { id: categoryId } = await req.json();
    console.log("Category ID to delete:", categoryId);

    // Validate categoryId
    if (!categoryId) {
      return NextResponse.json(
        { success: false, message: "Category ID is required." },
        { status: 400 }
      );
    }

    // Connect to the database
    await dbConnect();

    // Find and delete the category
    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return NextResponse.json(
        { success: false, message: "Category not found." },
        { status: 404 }
      );
    }

    // Return success response
    return NextResponse.json(
      { success: true, message: "Category deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}