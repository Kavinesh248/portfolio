import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    image: String,
    category: String,
    excerpt: String,
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
