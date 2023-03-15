"use client";
import { time } from 'console';
import React, { useState } from 'react'

import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

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
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form
                                onSubmit={handleSubmit}
                                action="https://getform.io/f/944db409-1cec-49e7-9506-667a1f93e2ce"
                                method="POST"
                                encType="multipart/form-data"
                            >
                                <div className="flex flex-col py-2 w-[75%]">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2 font-semibold">Name<span className="text-red-400">*</span></label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            type="text"
                                            name="name"
                                            onChange={(e) => { setName(e.target.value) }}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2 w-[75%]">
                                    <label className="uppercase text-sm py-2 font-semibold">Email<span className="text-red-400">*</span></label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-300"
                                        type="email"
                                        name="email"
                                        onChange={(e) => { setEmail(e.target.value)}}
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2 font-semibold">Subject<span className="text-red-400">*</span></label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-300"
                                        type="text"
                                        name="subject"
                                        onChange={(e) => { setSubject(e.target.value)}}
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2 font-semibold">Message<span className="text-red-400">*</span></label>
                                    <textarea
                                        className="border-2 rounded-lg p-3 border-gray-300"
                                        rows={10}
                                        name="message"
                                        onChange={(e) => { setMessage(e.target.value)}}
                                    ></textarea>
                                </div>
                                <div className="text-red-400">
                                    <p>
                                        {error ? error : ""}
                                    </p>
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4">
                                    Send Message
                                </button>
                            </form>
                            <p className="text-center w-full uppercase py-2 mt-4">or</p>
                            <p className="text-center w-full py-2">Manually to: <a href="mailto:contact@samuelryberg.com" className="text-[#F7AB0A] underline">contact@samuelryberg.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}