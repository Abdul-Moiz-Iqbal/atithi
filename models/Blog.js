import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true }, // Category for the blog
    tags: [{ type: String }], // Optional tags for more specificity
    slug: { type: String, unique: true, required: true }, // Unique identifier for the blog URL
  },
  { timestamps: true }
);

// Generate a slug from the title before saving
BlogSchema.pre("save", function (next) {
  if (this.isNew || this.isModified("title")) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""); // Convert title to slug-friendly format
  }
  next();
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
