"use client";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddBlogPage() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: e.target.title.value,
        content: e.target.content.value,
        image: e.target.image.value,
        category: e.target.category.value,
        excerpt: e.target.excerpt.value,
      }),
    });

    const newPost = await res.json();
    setPosts([newPost, ...posts]);
    e.target.reset();

    if (res.ok) {
      router.push("/blog");
    }
  }

  return (
    <section className="h-screen">
      <Header />
      <div className="p-6 max-w-2xl h-[calc(100dvh-60px)] overflow-y-auto scrollbar-hide mx-auto text-black-primary">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-[#1c1c1c] p-6 rounded-xl shadow-lg"
        >
          <input
            name="title"
            placeholder="Post Title"
            className="w-full bg-[#2c2c2c] text-white border border-[#444] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <input
            name="image"
            placeholder="Image URL"
            className="w-full bg-[#2c2c2c] text-white border border-[#444] px-4 py-2 rounded-lg"
          />

          <input
            name="category"
            placeholder="Category (e.g. Science, Tech)"
            className="w-full bg-[#2c2c2c] text-white border border-[#444] px-4 py-2 rounded-lg"
          />

          <input
            name="excerpt"
            placeholder="Short Excerpt"
            className="w-full bg-[#2c2c2c] text-white border border-[#444] px-4 py-2 rounded-lg"
          />

          <textarea
            name="content"
            placeholder="Full Blog Content"
            className="w-full bg-[#2c2c2c] text-white border border-[#444] px-4 py-2 rounded-lg h-48 resize-none"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold text-white"
          >
            🚀 Publish
          </button>
        </form>
      </div>
    </section>
  );
}
