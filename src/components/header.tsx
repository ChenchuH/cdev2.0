import Link from "next/link";

export default function Header() {
    return(
        <header className="p-4">
            <nav className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/Blog">Blog</Link>
                <Link href="/Resume">Resume</Link>
            </nav>
        </header>
    );
}
