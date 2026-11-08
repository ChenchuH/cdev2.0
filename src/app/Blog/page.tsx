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
    <article className="mx-auto w-full max-w-3xl px-6 pb-12 pt-8 sm:px-8 sm:pt-10 sm:pb-16">
      <Suspense
        fallback={
          <p className="leading-relaxed text-neutral-100/90">Loading posts...</p>
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
    <ul className="divide-y divide-white/10 border-y border-white/10">
      {posts.map(({ slug, title, date }) => (
        <li key={slug}>
          <Link
            className="group flex flex-col gap-2 py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 sm:flex-row sm:items-baseline sm:justify-between"
            href={`/Blog/${slug}`}
          >
            <span className="font-semibold text-neutral-100 transition-colors group-hover:text-blue-400">
              {title}
            </span>
            <time dateTime={date} className="text-xs tracking-wide text-neutral-100/90">
              {date}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  );
}