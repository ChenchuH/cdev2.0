import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-neutral-950/70">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <Link
              href="/"
              className="font-mono text-lg font-semibold tracking-tight text-neutral-100 transition-colors hover:text-blue-400"
            >
              Chenchu.Dev
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-400"> Feel free to reach out! </p>

          </div>

          <div className="grid grid-cols-2 gap-8 sm:justify-self-end">
            <nav aria-label="Footer navigation">
              <h2 className="text-sm font-semibold text-neutral-100">
                Explore
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                <li>
                  <Link className="transition-colors hover:text-blue-400" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="transition-colors hover:text-blue-400" href="/Blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="transition-colors hover:text-blue-400" href="/Resume">
                    Resume
                  </Link>
                </li>
              </ul>
            </nav>

            <div>
              <h2 className="text-sm font-semibold text-neutral-100">
                Connect
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                <li>
                  <a
                    className="transition-colors hover:text-blue-400"
                    href="https://github.com/ChenchuH"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-blue-400"
                    href="mailto:ynchenchuh@gmail.com"
                  >
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