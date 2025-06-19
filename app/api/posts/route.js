import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Attempting to connect to database...");
    await connectDB();
    console.log("Database connected successfully");

    const posts = await Post.find().sort({ createdAt: -1 });
    console.log(`Found ${posts.length} posts`);

    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    console.error("GET error:", err);
    return NextResponse.json(
      {
        message: "Error fetching posts",
        error: err.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    console.log("Attempting to create new post...");
    await connectDB();

    const body = await req.json();
    const { title, content, image, excerpt, category } = body;

    if (!title || !content) {
      return NextResponse.json(
        { message: "Title and content are required" },
        { status: 400 }
      );
    }

    const newPost = await Post.create({
      title,
      content,
      image,
      excerpt,
      category,
    });
    console.log("Post created successfully:", newPost._id);

    return NextResponse.json(newPost, { status: 201 });
  } catch (err) {
    console.error("POST error:", err);
    return NextResponse.json(
      {
        message: "Error creating post",
        error: err.message,
      },
      { status: 500 }
    );
  }
}
