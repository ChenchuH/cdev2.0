// src/app/page.tsx

import { Metadata } from "next";
import Image from "next/image";
import CopyEmailButton from "../components/CopyEmailButton";

export const metadata: Metadata = {
  title: "Home - chenchu.dev",
  description:
    "Chenchu Yakasiri's personal website and portfolio. Learn about my projects, blog posts, and more.",
};

export default function Home() {
  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
      <section className="grid gap-8 md:grid-cols-[minmax(0,1fr)_18rem] md:items-center">
        <div>
          <h1 className="mb-6 font-sans text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">
            Chenchu Yakasiri
          </h1>

          <p className="leading-relaxed text-neutral-100/90">
            I’m a physics student and undergraduate researcher at California State
            University, Long Beach, where I’m part of the CSULB Nanoelectronics Group.
            My research takes place in a TMD materials fabrication-focused lab.
            Outside of research, I build software and hardware projects to develop my
            technical skills. I also enjoy rock climbing and working on cars.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-3 mt-10 border-b border-white/10 pb-2 font-sans text-xl font-semibold tracking-tight text-neutral-100">
          Contact
        </h2>

        <div className="flex gap-6">
          <CopyEmailButton />
        </div>
      </section>
    </article>
  );
}