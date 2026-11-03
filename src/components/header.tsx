import Link from "next/link";

export default function Header() {
    return(
        <header className="px-6 py-4 sm:px-8">
            <nav className="mx-auto flex w-full max-w-3xl items-center justify-center gap-8">
                <Link href="/" className="transition-colors duration-200 hover:text-neutral-400">Home</Link>
                <Link href="/Blog" className="transition-colors duration-200 hover:text-neutral-400">Blog</Link>
                <Link href="/Resume" className="transition-colors duration-200 hover:text-neutral-400">Resume</Link>
            </nav>
        </header>
    );
}
