import Link from "next/link";

export default function Navbar(): JSX.Element {
    return (
        <nav className="flex p-5 items-start justify-between max-w-7xl mx-auto w-full">
            
            <div>
            <Link href="/">
                <h1 className="uppercase font-semibold">SAMUEL RYBERG</h1>
            </Link>
            </div>

            <div className="hidden items-center md:inline-flex">
                <Link href="/">
                    <button className="navButton">Home</button>
                </Link>
                <Link href="/projects">
                    <button className="navButton">Projects</button>
                </Link>
                <Link href="/specialization">
                    <button className="navButton">Specialization</button>
                </Link>
            </div>

            {/* Mobile Dropdown Menu */}

        </nav>
    )
}