import Header from "@/components/Header";
import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";
import Image from "next/image";

export default async function BlogDetails({ params }) {
  const { id } = await params;
  await connectDB();
  const post = await Post.findById(id);

  if (!post) {
    return <div className="p-10 text-center">Post not found</div>;
  }

  return (
    <article className="relative h-screen">
      <Header />
      <div className="max-w-4xl mx-auto overflow-y-auto scrollbar-hide h-[calc(100vh-60px)]  px-6 pt-5 pb-15 text-black-primary">
        <Image
          src={post.image || "/images/study1.jpeg"}
          alt="cover"
          width={400}
          height={300}
          className="mb-6 w-full h-80 object-cover"
        />

        <span className="inline-block bg-[#2d2d2d] text-background-primary text-sm px-3 py-1 rounded-full mb-3">
          {post.category || "General"}
        </span>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <p className="text-gray-400 italic mb-6">
          {new Date(post.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="leading-relaxed text-lg">{post.content}</div>
      </div>
    </article>
  );
}
