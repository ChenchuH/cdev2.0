import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import ReactMarkdown, { type Components } from "react-markdown";

export const metadata: Metadata = {
  title: "Resume - Chenchu Yakasiri Saravanan",
  description: "Resume of Chenchu Yakasiri Saravanan.",
};

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="mb-2 font-mono text-2xl font-bold text-neutral-200">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-3 mt-8 border-b border-neutral-800 pb-2 font-mono text-xl font-bold text-neutral-200">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-1 mt-5 font-semibold text-neutral-200">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="leading-relaxed text-neutral-400">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="my-2 list-disc space-y-1 pl-6 leading-relaxed text-neutral-400">
      {children}
    </ul>
  ),
  a: ({ children, href }) => (
    <a href={href} className="text-blue-500 hover:underline">
      {children}
    </a>
  ),
};

async function getResumeMarkdown() {
  "use cache";

  const filePath = path.join(process.cwd(), "src/content/resume.md");
  return readFile(filePath, "utf8");
}

export default async function ResumePage() {
  const resumeMarkdown = await getResumeMarkdown();

  return (
    <article className="mx-auto max-w-4xl p-4">
      <ReactMarkdown components={markdownComponents}>
        {resumeMarkdown}
      </ReactMarkdown>

      <div className="mt-10 border-t border-neutral-800 pt-6">
        <a
          href="/Chenchu_Resume_2027.pdf"
          download
          className="inline-flex rounded border border-neutral-700 px-4 py-2 text-sm text-neutral-200 hover:border-neutral-500 hover:text-white"
        >
          Download the PDF resume
        </a>
      </div>
    </article>
  );
}