import { notFound } from "next/navigation";
import { Suspense } from "react";
import ReactMarkdown from "react-markdown";
import { getPost } from "../../../lib/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function BlogPostPage({ params }: PageProps) {
  return (
    <article className="max-w-4xl p-4">
      <Suspense
        fallback={
          <p className="leading-relaxed text-neutral-400">Loading post...</p>
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
      <h1 className="mb-4 font-mono text-xl font-bold text-neutral-200">
        {post.title}
      </h1>
      <p className="text-sm text-neutral-400">{post.date}</p>

      <div className="mt-6 space-y-4 leading-relaxed text-neutral-400">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </>
  );
}