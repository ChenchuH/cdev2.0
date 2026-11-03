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
    <article className="mx-auto w-full max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
      <h1 className="mb-6 font-sans text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">
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
    <ul className="mt-8 list-disc space-y-1 pl-5 text-neutral-200 marker:text-neutral-200">
      {posts.map(({ slug, title, date, description }) => (
        <li className="border-b border-white/10 py-5 last:border-0" key={slug}>
          <Link className="font-bold hover:underline" href={`/Blog/${slug}`}>
            {title}
          </Link>
          <p className="mt-2 text-xs tracking-wide text-neutral-500">{date}</p>
        </li>
      ))}
    </ul>
  );
}