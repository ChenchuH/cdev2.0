import Link from "next/link";

const currentYear = new Date().getFullYear();

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/Blog", label: "Blog" },
  { href: "/Resume", label: "Resume" },
];

const brandClass =
  "font-mono font-semibold text-neutral-100";

const linkClass =
  "text-sm text-neutral-400 transition-colors hover:text-blue-400";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-neutral-950/70">
      <div className="mx-auto w-full max-w-3xl px-6 py-10 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <span className= {brandClass}>
              chenchu.dev
            </span>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:justify-self-end">
            <nav aria-label="Footer navigation">
              <h2 className="text-sm font-semibold text-neutral-100">
                Explore
              </h2>
              <ul className="mt-3 space-y-2">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className={linkClass}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-sm font-semibold text-neutral-100">
                Connect
              </h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    className={linkClass}
                    href="https://github.com/ChenchuH"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="mailto:ynchenchuh@gmail.com">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Chenchu Yakasiri Saravanan</p>
          <a
            className="transition-colors hover:text-neutral-300"
            href="https://github.com/ChenchuH/cdev2.0/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT License
          </a>
        </div>
      </div>
    </footer>
  );
}