import { NextResponse,NextRequest } from "next/server";
import dbConnect from "@/config/database";

import Category from "@/models/Category"; // Ensure the correct path

export async function GET(req : NextRequest,  { params }: { params: { slug: string }}) {
    const {slug : id} = params
  try {
   
    console.log("Category ID:", id);
    await dbConnect();
    const categories = await Category.find({_id:id}).populate('image_url');
    return NextResponse.json({ success: true, data: categories[0] }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}