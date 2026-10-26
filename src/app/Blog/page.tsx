// src/app/Blog/page.tsx
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Blog - Chenchu.Dev",
  description: "Read my latest blog posts and articles on various topics related to my learning, research, and projects.",
};

export default function Blog() {
  return (
    <>
      <section>
        <p className = "p-4">
            Place holder for blog content. This is where I will share my thoughts, experiences, and insights on various topics related to my learning, research, and projects.
        </p>
      </section>
    </>
  );
}
