import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 left-0 w-full z-50">
            <nav className="container mx-auto flex items-center justify-between p-4">   
                <Link
                    href="/"
                    className="font-bold text-2xl tracking-tight">Rhn.</Link>
            </nav>
        </header>
    );
}
