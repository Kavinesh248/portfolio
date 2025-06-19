"use client";

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        // Ensure data is an array
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error("API did not return an array:", data);
          setPosts([]);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError(error.message);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Helper function to safely get excerpt
  const getExcerpt = (post) => {
    if (post.excerpt && typeof post.excerpt === "string") {
      return post.excerpt;
    }

    if (post.content && typeof post.content === "string") {
      return post.content.slice(0, 80);
    }

    return "No preview available";
  };

  // Helper function to safely format date
  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return "Date unavailable";
    }
  };

  if (loading) {
    return (
      <section className="h-screen">
        <Header />
        <div className="max-w-6xl mx-auto h-[calc(100dvh-60px)] overflow-y-auto scrollbar-hide flex items-center justify-center">
          <p>Loading posts...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="h-screen">
        <Header />
        <div className="max-w-6xl mx-auto h-[calc(100dvh-60px)] overflow-y-auto scrollbar-hide flex items-center justify-center">
          <p className="text-red-500">Error loading posts: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="h-screen">
      <Header />
      <div className="max-w-6xl mx-auto h-[calc(100dvh-60px)] overflow-y-auto scrollbar-hide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 common-padding gap-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link
                key={post._id || post.id}
                href={`/blog/${post._id || post.id}`}
                className="bg-background-primary overflow-hidden text-black-primary border border-black-primary"
              >
                <Image
                  src={post.image || "/images/study1.jpeg"}
                  alt={post.title || "Blog post cover"}
                  width={400}
                  priority={true}
                  height={300}
                  className="mb-4 w-full h-48 object-cover"
                />

                <div className="p-4">
                  <div className="inline-block bg-[#2d2d2d] text-background-primary text-sm px-3 py-1 rounded-full mb-2">
                    {post.category || "General"}
                  </div>

                  <p className="text-sm mb-1">{formatDate(post.createdAt)}</p>

                  <h2 className="font-bold text-xl leading-snug mb-1">
                    {post.title || "Untitled"}
                  </h2>

                  <p className="text-black-primary/70 text-sm">
                    {getExcerpt(post)}...
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p>No blog posts found.</p>
            </div>
          )}
        </div>

        <button
          className="mt-6 bg-black-primary text-background-primary px-4 py-2 rounded"
          onClick={() => router.push("/blog/add")}
        >
          Add blog
        </button>
      </div>
    </section>
  );
}
