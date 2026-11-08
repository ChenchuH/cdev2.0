import { notFound } from "next/navigation";
import { Suspense } from "react";
import ReactMarkdown from "react-markdown";
import { getPost } from "../../../lib/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function BlogPostPage({ params }: PageProps) {
  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
      <Suspense
        fallback={
          <p className="leading-relaxed text-neutral-100/90">Loading post...</p>
        }
      >
        <Post params={params} />
      </Suspense>
    </article>
  );
}

async function Post({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <>
      <h1 className="mb-6 font-sans text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">
        {post.title}
      </h1>
      <p className="text-sm text-neutral-100/90">{post.date}</p>

      <div className="mt-6 space-y-4 leading-relaxed text-neutral-100/90">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </>
  );
}