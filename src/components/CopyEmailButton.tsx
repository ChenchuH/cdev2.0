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
      className={`transition-colors duration-200 ${
        copied
          ? "font-semibold text-green-400"
          : "text-blue-500 hover:text-indigo-400"
      }`}
    >
      {copied ? "Email copied!" : "Reach out via email"}
    </button>
  );
}