import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    public_id: { type: String, required: true }, // Cloudinary's image ID
    url: { type: String, required: true }, // Secure URL of the image
    width: { type: Number }, // Optional: Image width
    height: { type: Number }, // Optional: Image height
    format: { type: String }, // Optional: Image format
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

export default mongoose.models.Image || mongoose.model("Image", ImageSchema);
