import Link from "next/link";

export default function Header() {
    return(
        <header className="p-4">
            <nav className="flex gap-4">
                <Link href="/" className="transition-colors duration-200 hover:text-neutral-400">Home</Link>
                <Link href="/Blog" className="transition-colors duration-200 hover:text-neutral-400">Blog</Link>
                <Link href="/Resume" className="transition-colors duration-200 hover:text-neutral-400">Resume</Link>
            </nav>
        </header>
    );
}
