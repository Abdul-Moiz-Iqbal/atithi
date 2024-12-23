import mongoose, { Schema, model, models } from "mongoose";

interface Page {
  slug: string; // Unique identifier for the page
  bannerImage: string; // URL or base64 string of the banner image
  image_url?: mongoose.Schema.Types.ObjectId;
}

const PageSchema = new Schema<Page>(
  {
    slug: { type: String, required: true, unique: true },
    image_url: { type: mongoose.Schema.Types.ObjectId, ref: "Image" },

  },
  { timestamps: true }
);

export default models.Page || model<Page>("Page", PageSchema);
