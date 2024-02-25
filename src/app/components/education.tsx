"use client";

import Image from "next/image";
import { useState } from "react";
import { Parallax, useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

export default function Education() {
    const [isOpen, setIsOpen] = useState(false)

    const variants = {
        open: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
          },
        },
        closed: {
          x: -900, // You can adjust the initial position here
          opacity: 0.5,
        },
    };
    
    const variant = {
        open: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
          },
        },
        closed: {
          x: 900, // You can adjust the initial position here
          opacity: 0,
        },
    };

    return (
        <div className="flex flex-col w-full h-full justify-center p-4 gap-16 xl:gap-8">
            <motion.div 
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                className="xl:h-[50%] w-full flex flex-col xl:flex-row rounded-2xl md:rounded-full bg-purple-50/5 backdrop-blur-xl p-2 xl:p-10 gap-4"
            >
                <h1 className="md:hidden text-lg font-bold font-serif text-purple-50 text-center w-full antialiased">OSIZWENI SECONDARY SCHOOL</h1>
                <div className="flex flex-row w-full">
                    <Parallax 
                        onEnter={() => setIsOpen(true)}   
                        className="h-full w-[30%] xl:w-[15%] flex flex-col justify-center"
                    >
                        <Image 
                            src={"/osizweni.jpg"} 
                            alt={""}
                            width={140}
                            height={200}
                            className="h-22 w-22 md:h-36 md:w-36 rounded-full bg-zinc-300 shadow-2xl shadow-purple-800"
                        />
                    </Parallax>
                    <div className="h-full w-[70%] md:w-[85%] flex flex-col justify-center">
                        <h1 className="hidden md:block text-lg font-bold font-serif text-purple-50 text-center w-full antialiased">OSIZWENI SECONDARY SCHOOL</h1>
                        <h1 className="text-base font-thin font-serif text-purple-50 text-center w-full antialiased">(01/2011 - 12/2015)</h1>
                        <h1 className="text-base font-thin font-serif text-purple-50 text-center w-full antialiased mt-4">Obtained Matric with a Bachelors pass</h1>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                animate={isOpen ? "open" : "closed"}
                variants={variant}
                className="xl:h-[50%] w-full flex flex-col xl:flex-row rounded-2xl md:rounded-full bg-purple-50/5 backdrop-blur-xl p-2 xl:p-10 gap-4"
            >
                <h1 className="md:hidden text-lg font-bold font-serif text-purple-50 text-center w-full antialiased">UNIVERSITY OF JOHANNESBURG</h1>
                <div className="flex flex-row w-full">
                    <Parallax 
                        onExit={() => setIsOpen(false)} 
                        className="h-full w-[70%] xl:w-[85%] flex flex-col justify-center"
                    >
                        <h1 className="hidden md:block text-lg font-bold font-serif text-purple-50 text-center w-full antialiased">UNIVERSITY OF JOHANNESBURG</h1>
                        <h1 className="text-base font-thin font-serif text-purple-50 text-center w-full antialiased">(01/2017 - 12/2021)</h1>
                        <h1 className="text-base font-thin font-serif text-purple-50 text-center w-full antialiased mt-4">Obtained BSc Degree in Computer Science and Informatics</h1>
                    </Parallax>
                    <div className="h-full w-[30%] xl:w-[15%] flex flex-col justify-center">
                        <Image 
                            src={"/uj.jpg"} 
                            alt={""}  
                            width={140}
                            height={200}
                            className="h-22 w-22 md:h-36 md:w-36 rounded-full bg-zinc-300 shadow-2xl shadow-purple-800"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}