// src/app/Blog/page.tsx
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Blog - chenchu.dev",
  description: "Read my latest blog posts and articles on various topics related to my learning, research, and projects.",
};

export default function Blog() {
  return (
    <>
      <section className="flex justify-center">
        <p className = "p-4 ">
          <li>
            #1 Blog post title goes here.
          </li>
          <li>
            #2 Blog post title goes here.
          </li>
          <li>
            #3 Blog post title goes here.
          </li>
        </p>
      </section>
    </>
  );
}
