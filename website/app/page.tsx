"use client"

import { motion } from "framer-motion"
import { Cursor, useTypewriter } from "react-simple-typewriter"

export default function Home(): JSX.Element {
  const [text, count] = useTypewriter({
    words: ["Hello, my name is Samuel Ryberg.", "i'm a Game Developer from Sweden.", "Welcome to my Portfolio."],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center">
      <h1 className="text-3xl">
        <span className="font-bold tracking-wider">{text}</span>
        <Cursor cursorColor="#F7AB0A"/>
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-8">
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
          className=" md:mb-0 flex-shrink-0 object-cover object-center rounded-full w-64 h-64 md:rounded-lg md:w-72 md:h-72"
        />
        <p className="w-80 m-auto text-xl">
          I am a game developer from Sweden who loves to create games and learn new things.
          On my free time I like to learn new technologies or make music.
        </p>
      </div>
    </div>
  )
}
