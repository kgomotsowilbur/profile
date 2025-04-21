"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Education() {
    useEffect(() => {
        const elements = document.querySelectorAll('.animate-on-scroll');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                if(el.id === "first") 
                entry.target.classList.add('first-bar');
                
                if(el.id === "second")
                entry.target.classList.add("second-bar")
                
                if(el.id === "secondary")
                entry.target.classList.add("secondary")
            
                if(el.id === "tertiary")
                entry.target.classList.add("tertiary")
            }
            });
        });
    
        elements.forEach(el => observer.observe(el));
    
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="flex flex-col gap-2">
                <h1 className="text-black dark:text-white text-xl xl:text-4xl font-black font-serif antialiased"
                >Education</h1>
                <div className="flex flex-row">
                  <div id="first" className="animate-on-scroll"/>
                  <div id="second" className="animate-on-scroll"/>
                </div>
            </div>
            <div className="w-full h-full rounded-xl md:px-4">
                <div className="flex flex-col w-full h-full justify-center md:p-4 gap-16 xl:gap-8 text-white dark:text-black">
                    <div
                        id="secondary"
                        className="w-full flex flex-col rounded-2xl md:rounded-full bg-slate-950/60 dark:bg-zinc-50/60 backdrop-blur-xl p-2 md:p-10 animate-on-scroll"
                    >
                        <div className="flex flex-row w-full justify-center">
                            <h1 className="md:hidden text-lg font-bold font-serif  text-center antialiased w-[80%] md:w-fit">OSIZWENI SECONDARY SCHOOL</h1>
                        </div>
                        <div className="flex flex-row w-full">
                            <div 
                                className="h-full w-[30%] xl:w-[15%] flex flex-col justify-center"
                            >
                                <Image 
                                    src={"/osizweni.jpg"} 
                                    alt={""}
                                    width={140}
                                    height={200}
                                    className="h-22 w-22 md:h-36 md:w-36 rounded-full bg-zinc-300 shadow-2xl shadow-blue-800 dark:shadow-orange-800"
                                />
                            </div>
                            <div className="h-full w-[70%] md:w-[85%] flex flex-col justify-center text-center">
                                <h1 className="hidden md:block text-lg font-bold font-serif  text-center w-full antialiased">OSIZWENI SECONDARY SCHOOL</h1>
                                <h1 className="text-base font-thin font-serif  text-center w-full antialiased">(01/2011 - 12/2015)</h1>
                                <h1 className="text-base font-thin font-serif  text-center w-full antialiased mt-4">Obtained Matric with a Bachelors pass</h1>
                            </div>
                        </div>
                    </div>
                    <div
                        id="tertiary"
                        className="w-full flex flex-col rounded-2xl md:rounded-full bg-slate-950/60 dark:bg-zinc-50/60 backdrop-blur-xl p-2 md:p-10 animate-on-scroll"
                    >
                        <h1 className="md:hidden text-lg font-bold font-serif  text-center w-full antialiased">UNIVERSITY OF JOHANNESBURG</h1>
                        <div className="flex flex-row w-full">
                            <div
                                className="h-full w-[70%] md:w-[85%] flex flex-col justify-center"
                            >
                                <h1 className="hidden md:block text-lg font-bold font-serif  text-center w-full antialiased">UNIVERSITY OF JOHANNESBURG</h1>
                                <h1 className="text-base font-thin font-serif  text-center w-full antialiased">(01/2017 - 12/2021)</h1>
                                <h1 className="text-base font-thin font-serif  text-center w-full antialiased mt-4">Obtained BSc Degree in Computer Science and Informatics</h1>
                            </div>
                            <div className="h-full w-[30%] xl:w-[15%] flex flex-col justify-center items-end">
                                <Image 
                                    src={"/uj.jpg"} 
                                    alt={""}  
                                    width={140}
                                    height={200}
                                    className="h-22 w-22 md:h-36 md:w-36 rounded-full bg-zinc-300 shadow-2xl shadow-blue-800 dark:shadow-orange-800"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}