// src/app/page.tsx Home page for Chenchu.Dev

import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Home - chenchu.dev",
  description: "Chenchu Yakasiri's personal website and portfolio. Learn about my projects, blog posts, and more.",
};

export default function Home() {
  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
      <section>
        <h1 className="mb-6 font-sans text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">
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
        <h2 className="mb-3 mt-10 border-b border-white/10 pb-2 font-sans text-xl font-semibold tracking-tight text-neutral-100">
          Contact
        </h2>

        <div className="flex gap-6">
          <a
            className="text-blue-500 transition-colors duration-200 hover:text-indigo-400"
            href="https://github.com/ChenchuH"
          >
            GitHub
          </a>
          <a
            className="text-blue-500 transition-colors duration-200 hover:text-indigo-400"
            href="mailto:ynchenchuh@gmail.com"
          >
            Email
          </a>
        </div>
      </section>
    </article>
  );
}