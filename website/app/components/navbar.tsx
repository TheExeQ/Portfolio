"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Navbar(): JSX.Element {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className="bg-[#ecf0f3] absolute left-0 top-0 w-full h-20 shadow-xl z-10">
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href="/">
                    <h2 className="px-4 text-[#F7AB0A]">Samuel</h2>
                </Link>
                <div>
                    <ul className="hidden md:flex uppercase">
                        <Link href="/">
                            <li className="ml-10 text-sm border-b-2 border-transparent hover:border-[#F7AB0A]">Home</li>
                        </Link>
                        <Link href="/projects">
                            <li className="ml-10 text-sm border-b-2 border-transparent hover:border-[#F7AB0A]">Projects</li>
                        </Link>
                        <Link href="/specialization">
                            <li className="ml-10 text-sm border-b-2 border-transparent hover:border-[#F7AB0A]">Specialization</li>
                        </Link>
                        <Link href="/contact">
                            <li className="ml-10 text-sm border-b-2 border-transparent hover:border-[#F7AB0A]">Contact</li>
                        </Link>
                    </ul>
                    <div onClick={toggleMenu} className="md:hidden cursor-pointer">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={showMenu ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
                <div className={showMenu
                    ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                    <div className="flex w-full items-center justify-between">
                    <h2 className="text-[#F7AB0A]">Samuel</h2>
                        <div onClick={toggleMenu} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className="font-semibold border-b border-[#F7AB0A] my-4">
                        <p>Welcome to my Portfolio</p>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                                <li onClick={ () => setShowMenu(false)} className="py-4 text-sm hover:font-semibold">Home</li>
                            </Link>
                            <Link href="/projects">
                                <li onClick={ () => setShowMenu(false)} className="py-4 text-sm hover:font-semibold">Projects</li>
                            </Link>
                            <Link href="/specialization">
                                <li onClick={ () => setShowMenu(false)} className="py-4 text-sm hover:font-semibold">Specialization</li>
                            </Link>
                            <Link href="/contact">
                                <li onClick={ () => setShowMenu(false)} className="py-4 text-sm hover:font-semibold">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#F7AB0A]">Let's Connect</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[75%]">
                                <a href="https://www.linkedin.com/in/samuelryberg/" target="_blank">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <FaLinkedinIn color="#F7AB0A"/>
                                    </div>
                                </a>
                                <a href="https://github.com/theexeq/" target="_blank">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <FaGithub color="#F7AB0A"/>
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/samuelryberg/" target="_blank">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <FaInstagram color="#F7AB0A"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}