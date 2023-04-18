"use client";
import { time } from 'console';
import React, { useState, useEffect } from 'react'

import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';

export default function Contact(): JSX.Element {

    const [error, setError] = useState<string>("");

    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [subject, setSubject] = useState<string>();
    const [message, setMessage] = useState<string>();

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        setError("Form not setup, please send manually instead");
        e.preventDefault();
        return;

        const pickedDate = Date.parse("26-April-2023");
        const todaysDate = new Date();
        if (todaysDate.getTime() < pickedDate) {
            setError("Contact closed until 2023-04-26");
            e.preventDefault();
            return;
        }

        if (!name || !email || !subject || !message) {
            setError("Please fill out all fields marked with *");
            e.preventDefault();
        }
    }

    return (
        <div className="w-full lg:h-screen mt-20">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
                <p className="text-xl tracking-widest uppercase py-2 text-[#F7AB0A]">
                    Contact
                </p>
                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full ">
                            <div>
                                <h2 className="py-2 font-bold border-b-2 border-[#F7AB0A]">Samuel Ryberg</h2>
                                <p className="font-semibold">Game Developer</p>
                                <p className="py-4 italic">
                                    I am part of The Game Assembly’s internship program. 
                                    As per the agreement between the Games Industry and The Game Assembly, 
                                    neither student nor company may be in contact with one another regarding internships before April 19th.
                                    Any internship offers can be made on April 26th, at the earliest.
                                </p>
                            </div>
                            <div>
                                <p className="uppercase pt-8 font-semibold">Connect With Me</p>
                                <div className="flex items-center justify-between py-4">
                                    <a href="https://www.linkedin.com/in/samuelryberg/" target="_blank">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaLinkedinIn color="#F7AB0A" />
                                        </div>
                                    </a>
                                    <a href="https://github.com/theexeq/" target="_blank">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaGithub color="#F7AB0A" />
                                        </div>
                                    </a>
                                    <a href="https://www.instagram.com/samuelryberg/" target="_blank">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <FaInstagram color="#F7AB0A" />
                                        </div>
                                    </a>
                                    <a href="/assets/resume.pdf" target="_blank">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <div className="flex justify-between items-center">
                                                <BsFillPersonFill color="#F7AB0A" />
                                                <p className="pl-2 text-sm font-bold text-[#F7AB0A]">CV</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 relative">
                        <div className="absolute bg-black/80 top-0 left-0 h-full w-full rounded-lg">
                            <div className="flex flex-col items-center justify-center h-full">
                                <p className="text-white text-2xl text-center font-semibold">
                                    Form not setup, please send manually to <a href="mailto:samuel.ryberg@gmail.com" className="text-[#F7AB0A] underline">samuel.ryberg@gmail.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="p-4">
                            <form
                                onSubmit={handleSubmit}
                                action=""
                                method="POST"
                                encType="multipart/form-data"
                            >
                                <div className="flex flex-col py-2 w-[75%]">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2 font-semibold">Name<span className="text-red-400">*</span></label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300 hover:cursor-not-allowed"
                                            type="text"
                                            name="name"
                                            onChange={(e) => { setName(e.target.value) }}
                                            disabled={true}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2 w-[75%]">
                                    <label className="uppercase text-sm py-2 font-semibold">Email<span className="text-red-400">*</span></label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-300 hover:cursor-not-allowed"
                                        type="email"
                                        name="email"
                                        onChange={(e) => { setEmail(e.target.value)}}
                                        disabled={true}
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2 font-semibold">Subject<span className="text-red-400">*</span></label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-300 hover:cursor-not-allowed"
                                        type="text"
                                        name="subject"
                                        onChange={(e) => { setSubject(e.target.value)}}
                                        disabled={true}
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2 font-semibold">Message<span className="text-red-400">*</span></label>
                                    <textarea
                                        className="border-2 rounded-lg p-3 border-gray-300 hover:cursor-not-allowed"
                                        rows={10}
                                        name="message"
                                        onChange={(e) => { setMessage(e.target.value)}}
                                        disabled={true}
                                    ></textarea>
                                </div>
                                <div className="text-red-400">
                                    <p>
                                        {error ? error : ""}
                                    </p>
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4 hover:cursor-not-allowed" disabled={true}>
                                    Send Message
                                </button>
                            </form>
                            <p className="text-center w-full uppercase py-2 mt-4">or</p>
                            <p className="text-center w-full py-2">Manually to: <a href="mailto:samuel.ryberg@gmail.com" className="text-[#F7AB0A] underline">samuel.ryberg@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}