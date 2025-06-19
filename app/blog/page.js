"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useSWR from "swr";

import Header from "@/components/Header";
import { fetcher } from "@/lib/hooks";
import { formatDate } from "@/lib/utils";

export default function BlogPage() {
  const { data: posts, error, isLoading } = useSWR("/api/posts", fetcher);
  const router = useRouter();

  const getExcerpt = (post) => {
    if (post.excerpt && typeof post.excerpt === "string") return post.excerpt;
    if (post.content && typeof post.content === "string")
      return post.content.slice(0, 80);
    return "No preview available";
  };

  if (isLoading) {
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
          <p className="text-red-500">Error loading posts: {error.message}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="h-screen">
      <Header />
      <div className="max-w-6xl mx-auto h-[calc(100dvh-60px)] overflow-y-auto common-padding scrollbar-hide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.length > 0 ? (
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
                  height={300}
                  priority
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
