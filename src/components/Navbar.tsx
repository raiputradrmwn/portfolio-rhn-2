import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full py-6 px-8 flex items-center">
            <Link
                href="/"
                className="font-bold text-2xl tracking-tight">Rhn.</Link>
        </nav>
    );
}
