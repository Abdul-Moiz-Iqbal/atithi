import { NextResponse , NextRequest} from "next/server";
import dbConnect from "@/config/database";
import Blog from "@/models/Blog";

// Handle POST requests to create a blog
export async function POST(req : NextRequest) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the JSON body from the request
    const { title, content } = await req.json();

    // Validation: Ensure title and content are provided
    if (!title || !content) {
      return NextResponse.json(
        { success: false, message: "Title and content are required" },
        { status: 400 }
      );
    }

    // Create a new blog entry
    const blog = await Blog.create({ title, content });

    // Return the created blog
    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
