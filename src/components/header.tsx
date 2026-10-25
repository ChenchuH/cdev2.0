export default function Header() {
    return(
        <header className="p-4">
            <nav className="flex gap-4">
                <a href="#about">About</a>
                <a href="#blog">Blog</a>
                <a href="https://github.com/ChenchuH" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </nav>
        </header>
    );
}
