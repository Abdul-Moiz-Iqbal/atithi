import { NextResponse } from "next/server";
import dbConnect from "@/config/database";
import Blog from "@/models/Blog"; // Make sure the path to the Blog model is correct

// API Route to get the blog by slug
export async function GET(req: Request, { params }: { params: { slug: string } }) {
  try {
    await dbConnect();
    
    // Extract slug from the URL params
    const { slug } = params;
    
    // Find the blog with the matching slug
    const blog = await Blog.findOne({ slug }).populate("category").populate("image_url");
    
    if (!blog) {
      return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 });
    }
    
    // Return the found blog
    return NextResponse.json({ success: true, data: blog }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
