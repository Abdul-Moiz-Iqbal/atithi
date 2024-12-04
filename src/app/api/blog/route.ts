// import { NextResponse , NextRequest} from "next/server";
// import dbConnect from "@/config/database";
// import Blog from "@/models/Blog";

// // Handle POST requests to create a blog
// export async function POST(req : NextRequest) {
//   try {
//     // Connect to the database
//     await dbConnect();

//     // Parse the JSON body from the request
//     const { title, content } = await req.json();

//     // Validation: Ensure title and content are provided
//     if (!title || !content) {
//       return NextResponse.json(
//         { success: false, message: "Title and content are required" },
//         { status: 400 }
//       );
//     }

//     // Create a new blog entry
//     const blog = await Blog.create({ title, content });

//     // Return the created blog
//     return NextResponse.json({ success: true, data: blog }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, message: error.message },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import Blog from "@/models/Blog";
import Category from "@/models/Category";
import dbConnect from "@/config/database"; // Helper to connect to MongoDB

// POST: Create a new blog
export async function POST(req) {
  try {
    // Parse the request body using the req instance
    
    const { title, content, category: categoryName, image_url } = await req.json();
    console.log("Title:", title, "Content:", content, "Category:", categoryName, "Image:", image_url);
    // Validate required fields
    if (!title || !content || !categoryName || !image_url) {
        console.log("Title, content, image and category are required.");
      return NextResponse.json(
        { success: false, message: "Title, content, and category are required." },
        { status: 400 }
      );
    }

    // Connect to the database
    await dbConnect();

    // Find or create the category
    const category = await Category.findOne({ title: categoryName });
    // if (!category) {
    //   category = await Category.create({ name: categoryName });
    // }

    // Create the blog with the category ID
    const blog = await Blog.create({
      title,
      content,
      category: category._id,
      image_url
 
    });

    // const blog = new Blog({
    //     title: "Test Blog Title",
    //     content: "This is a test content.",
    //     category: "Some Category ID", // Replace with a valid category ID
    //   });

    return NextResponse.json({ success: true, blog }, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// export async function GET(req: NextRequest) {
//   try {
//     await dbConnect();
//     const blogs = await Blog.find().populate("category");
//     return NextResponse.json({ success: true, data: blogs }, { status: 200 });
//   } catch (error) { 
//     console.error("Error fetching blogs:", error);
//     return NextResponse.json(
//       { success: false, message: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }



export async function GET(req:NextRequest) {
  try {
    // Extract category ID from the request
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get('categoryId');
    
    if (!categoryId) {
      return NextResponse.json(
        { success: false, message: "Category ID is required" },
        { status: 400 }
      );
    }

    // Connect to the database
    await dbConnect();

    // Fetch blogs with the specified categoryId
    const blogs = await Blog.find({ category: categoryId }).populate('image_url');

    // Return the blogs in the response
    return NextResponse.json(
      { success: true, data: blogs },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}


