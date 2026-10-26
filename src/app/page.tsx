// src/app/page.tsx Home page for Chenchu.Dev

import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Home - Chenchu.Dev",
  description: "Chenchu Yakasiri's personal website and portfolio. Learn about my projects, blog posts, and more.",
};

export default function Home() {
  return (
    <article className="max-w-4xl p-4">
      <section>
        <h1 className="mb-4 font-mono text-xl font-bold text-neutral-200">
          Chenchu Yakasiri Saravanan
        </h1>

        <p className="leading-relaxed text-neutral-400">
          I’m a physics student and undergraduate researcher at California State
          University, Long Beach, where I’m part of the CSULB Nanoelectronics Group.
          My research takes place in a TMD materials fabrication-focused lab.
          Outside of research, I build software and hardware projects to develop my
          technical skills. I also enjoy rock climbing and working on cars.
        </p>
      </section>

      <section>
        <h2 className="mb-3 mt-7 font-mono text-xl font-bold text-neutral-200">
          This site
        </h2>

        <p className="leading-relaxed text-neutral-400">
          This is my personal website and blog. I'll use it to collect
          thoughts and share projects. It also keeps my résumé and CV together
          with updates on my activities and physics research.
        </p>

        <p className="mt-3 leading-relaxed text-neutral-400">
          It's built with{" "}
          <a className="text-blue-500 hover:underline" href="https://nextjs.org/">
            Next.js
          </a>
          , React, TypeScript, and Tailwind CSS, and uses the Geist font. You
          can view the source on{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://github.com/ChenchuH/cdev2.0"
          >
            GitHub
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="mb-3 mt-7 font-mono text-xl font-bold text-neutral-200">
          Contact
        </h2>

        <div className="flex gap-6">
          <a
            className="text-blue-500 hover:underline"
            href="https://github.com/ChenchuH"
          >
            GitHub
          </a>
          <a
            className="text-blue-500 hover:underline"
            href="mailto:ynchenchuh@gmail.com"
          >
            Email
          </a>
        </div>
      </section>
    </article>
  );
}