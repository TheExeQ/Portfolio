"use client";

import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

import ProjectView from "./components/projectsview";

export default function Home(): JSX.Element {
  const [text, count] = useTypewriter({
    words: [
      "Samuel Ryberg.",
      "a Gameplay Engineer.",
      "a Tools Engineer.",
      "a Backend Engineer.",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full h-screen text-center md:text-left">
      <div className="max-w-[1240px] w-full h-full mx-auto mt-32 md:mt-0 p-2 flex justify-center items-center">
        <div className="md:grid grid-cols-3 gap-8">
          <div className="flex justify-center py-2">
            <motion.img
              initial={{
                x: -200,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.0,
              }}
              src="https://avatars.githubusercontent.com/u/26822321?v=4"
              className=" md:mb-0 flex-shrink-0 object-cover object-center rounded-full w-48 h-48 md:rounded-lg md:w-80 md:h-80 lg:w-96 lg:h-96"
            />
          </div>
          <div className="col-span-2">
            <div className="m-2">
              <p className="font-semibold uppercase text-sm tracking-widest text-gray-600">
                Welcome to my Portfolio
              </p>
              <div className="h-36 flex flex-col justify-center">
                <h1 className="h-auto py-4 text-gray-700">
                  Hi, I'm <span className="text-[#F7AB0A]">{text}</span>
                  <Cursor cursorColor="#F7AB0A" />
                </h1>
              </div>
              <p className="py-4 text-gray-700 max-w-[70%] m-auto md:m-0">
                I'm a Gameplay, Tools and Backend Engineer from Sweden who
                enjoys creating games. In my free time, I like to cook and
                make/learn music.
                <br />
                <br />
                I'm always looking to learn new things and expand my knowledge
                in game development. I'm fascinated by the constantly evolving
                technology in this field and I'm always eager to stay on top of
                the latest trends and techniques.
              </p>
              <div className="flex items-center justify-between my-4 max-w-[330px] py-4 mx-auto md:mx-0">
                <a
                  href="https://www.linkedin.com/in/samuelryberg/"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn color="#F7AB0A" />
                  </div>
                </a>
                <a href="https://github.com/theexeq/" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub color="#F7AB0A" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/samuelryberg/"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaInstagram color="#F7AB0A" />
                  </div>
                </a>
                <a href="/assets/resume.pdf" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <div className="flex justify-between items-center">
                      <BsFillPersonFill color="#F7AB0A" />
                      <p className="pl-2 text-sm font-bold text-[#F7AB0A]">
                        CV
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <ProjectView />
      </div>
    </div>
  );
}
