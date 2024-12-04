import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    }, // Reference to Category
    image_url: { type: mongoose.Schema.Types.ObjectId, ref:"Image", required: false },
    slug: { type: String, unique: true, required: false },
  },
  { timestamps: true }
);

// Generate a unique slug from the title before saving
BlogSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("title")) {
    let baseSlug = this.title
      .toLowerCase() // Convert to lowercase
      .replace(/[^\w\s-]/g, "") // Remove non-word characters except spaces and hyphens
      .trim() // Trim spaces
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .slice(0, 50); // Limit to 50 characters

    // Use `this.constructor` to access the model
    let uniqueSlug = baseSlug;
    let counter = 1;

    while (await this.constructor.exists({ slug: uniqueSlug })) {
      uniqueSlug = `${baseSlug}-${counter}`;
      counter++;
    }

    this.slug = uniqueSlug; // Set the unique slug
  }
  next();
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
