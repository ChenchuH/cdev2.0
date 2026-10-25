import Link from "next/link";

export default function Header() {
    return(
        <header className="p-4">
            <nav className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/Blog">Blog</Link>
            
                <a href="/Chenchu_Resume_2027.pdf">
                    Resume
                </a>
            </nav>
        </header>
    );
}
