"use client";

import { useState } from "react";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("ynchenchuh@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      aria-live="polite"
      className={`font-medium underline decoration-white/40 underline-offset-4 transition-colors duration-200 ${
        copied
          ? "text-emerald-300"
          : "text-sky-200 hover:text-white hover:decoration-white"
      }`}
    >
      {copied ? "Email copied!" : "Reach out via email"}
    </button>
  );
}