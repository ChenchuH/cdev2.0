import Link from "next/link";
import { Suspense } from "react";
import type { Metadata } from "next";
import { getPosts } from "../../lib/blog";

export const metadata: Metadata = {
  title: "Blog - chenchu.dev",
  description:
    "Read my latest blog posts and articles on various topics related to my learning, research, and projects.",
};

export default function BlogPage() {
  return (
    <article className="max-w-4xl p-4">
      <h1 className="mb-4 font-mono text-xl font-bold text-neutral-200">
        Blog
      </h1>

      <Suspense
        fallback={
          <p className="leading-relaxed text-neutral-400">Loading posts...</p>
        }
      >
        <PostList />
      </Suspense>
    </article>
  );
}

async function PostList() {
  const posts = await getPosts();

  return (
    <ul className="mt-4 list-disc space-y-5 pl-6 leading-relaxed text-neutral-200">
      {posts.map(({ slug, title, date, description }) => (
        <li key={slug}>
          <Link className="font-bold hover:underline" href={`/Blog/${slug}`}>
            {title}
          </Link>
          <p className="text-sm text-neutral-400">{date}</p>
          <p className="text-sm text-neutral-400">{description}</p>
        </li>
      ))}
    </ul>
  );
}