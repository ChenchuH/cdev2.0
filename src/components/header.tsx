import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/Blog", label: "Blog" },
  { href: "/Resume", label: "Resume" },
];

const brandClass =
  "font-mono font-semibold text-neutral-100";

const linkClass =
  "text-sm text-neutral-400 transition-colors hover:text-blue-400";

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4 sm:px-8">
        <span className={brandClass}>
          chenchu.dev
        </span>

        <nav aria-label="Main navigation" className="flex gap-5">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}