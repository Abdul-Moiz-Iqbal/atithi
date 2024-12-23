import { NextResponse } from "next/server";
import dbConnect from "@/config/database"; // Utility to connect to MongoDB
import Page from "@/models/Page";
import mongoose from "mongoose";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { slug, bannerImage } = await req.json();
    console.log(slug, bannerImage);
    if (!slug || !bannerImage) {
      return NextResponse.json({ success: false, message: "Invalid data." }, { status: 400 });
    }

    // Find or create a page entry
    // const page = await Page.findOneAndUpdate(
    //   { slug },
    //   { bannerImage },
    //   { new: true, upsert: true }
    // );
    
    const page = await Page.findOneAndUpdate(
      { slug },
      {image_url: new mongoose.Types.ObjectId(bannerImage)},
      { new: true, upsert: true }
    );

// const newCategory = await Category.create({ title, content,  image_url: new mongoose.Types.ObjectId(image_url) });
    return NextResponse.json({ success: true, data: page }, { status: 200 });
  } catch (error: unknown) {
    console.log(error)
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
