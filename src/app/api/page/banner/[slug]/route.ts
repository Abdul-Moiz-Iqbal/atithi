import { NextResponse } from "next/server";
import dbConnect from "@/config/database";
import Page from "@/models/Page";

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  await dbConnect();
  try {
    const { slug } = params;

    const page = await Page.findOne({ slug }).populate("image_url");
    if (!page) {
      return NextResponse.json({ success: false, message: "Page not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: page }, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
