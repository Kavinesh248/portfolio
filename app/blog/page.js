"use client";

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="h-screen">
      <Header />
      <div className="max-w-6xl mx-auto h-[calc(100dvh-60px)] overflow-y-auto scrollbar-hide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 common-padding gap-6">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post._id}`}
              className="bg-background-primary overflow-hidden text-black-primary border border-black-primary"
            >
              <Image
                src={post.image || "/images/study1.jpeg"}
                alt="cover"
                width={400}
                height={300}
                className="mb-4 w-full h-48 object-cover"
              />

              <div className="p-4">
                <div className="inline-block bg-[#2d2d2d] text-background-primary text-sm px-3 py-1 rounded-full mb-2">
                  {post.category || "General"}
                </div>

                <p className="text-sm mb-1">
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>

                <h2 className="font-bold text-xl leading-snug mb-1">
                  {post.title}
                </h2>

                <p className="text-black-primary/70 text-sm">
                  {post.excerpt || post.content.slice(0, 80)}...
                </p>
              </div>
            </Link>
          ))}
        </div>

        <button
          className="mt-6 bg-black-primary text-background-primary"
          onClick={() => router.push("/blog/add")}
        >
          Add blog
        </button>
      </div>
    </section>
  );
}
