import { NextResponse } from "next/server";
import Image from "@/models/Image"; // Ensure correct path to your model

// api to upload cloudnary  image data in mongo db 
export async function POST(req: Request) {
    console.log("hello from upload")
  try {
    const { public_id, url, width, height, format } = await req.json();

    if (!public_id || !url) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save image to MongoDB
    const newImage = await Image.create({
      public_id,
      url,
      width,
      height,
      format,
    });



    return NextResponse.json(
      { message: "Image saved successfully", id: newImage._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving image:", error);
    return NextResponse.json(
      { message: "Error saving image to database" },
      { status: 500 }
    );
  }
}
