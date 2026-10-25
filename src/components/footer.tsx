"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  // 1. Initialize with a safe static fallback year for server prerendering
  const [currentYear, setCurrentYear] = useState(2026);

  // 2. Update to the true system year once loaded in the browser
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <p>© {currentYear} Chenchu</p>
    </footer>
  );
}
