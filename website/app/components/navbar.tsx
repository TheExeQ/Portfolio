import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Navbar(): JSX.Element {
    return (
        <div className="fixed w-full h-20 shadow-xl z-10">
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href="/">
                    <h1 className="text-2xl font-bold px-4">Samuel</h1>
                </Link>
                <div>
                    <ul className="hidden md:flex">
                        <Link href="/">
                            <li className="ml-10 text-sm hover:border-b">Home</li>
                        </Link>
                        <Link href="/projects">
                            <li className="ml-10 text-sm hover:border-b">Projects</li>
                        </Link>
                        <Link href="/specialization">
                            <li className="ml-10 text-sm hover:border-b">Specialization</li>
                        </Link>
                        <Link href="/contact">
                            <li className="ml-10 text-sm hover:border-b">Contact</li>
                        </Link>
                    </ul>
                    <div className="md:hidden">
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>

            <div className="md:hidden fixed left-0 top-0 w-full h-screen bg-black/70">
                <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] p-10 ease-in duration-500">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-3xl font-bold">Samuel</h1>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className="font-semibold border-b border-gray-300 my-4">
                        <p>Welcome to my Portfolio</p>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                                <li className="py-4 text-sm hover:font-semibold">Home</li>
                            </Link>
                            <Link href="/projects">
                                <li className="py-4 text-sm hover:font-semibold">Projects</li>
                            </Link>
                            <Link href="/specialization">
                                <li className="py-4 text-sm hover:font-semibold">Specialization</li>
                            </Link>
                            <Link href="/contact">
                                <li className="py-4 text-sm hover:font-semibold">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5]">Let's Connect</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[75%]">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <FaLinkedinIn />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <FaGithub />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <FaInstagram />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}