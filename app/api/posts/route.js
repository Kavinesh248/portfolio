import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const posts = await Post.find().sort({ createdAt: -1 });

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
