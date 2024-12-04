// import mongoose from "mongoose";

// const CategorySchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true, unique: true },
//   },
//   { timestamps: true }
// );

// export default mongoose.models.Category || mongoose.model("Category", CategorySchema);

import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true }, // Category title
    content: { type: String }, // Optional: Category content/description
    image_url: { type: mongoose.Schema.Types.ObjectId, ref: "Image" },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

export default mongoose.models.Category ||
  mongoose.model("Category", CategorySchema);
