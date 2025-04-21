"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Skills() {
    //data modeling
    const images = ["/mongodb.png", "/sql.png", "/react.png", "/JS.png", "/Typescript.png", "/next.png", "/redux.png", "/dotnet.png", "/csharp1.png", "/blazor1.png", "/css.png",  "/azure.png", "/git.png", "/expo.png"];

    useEffect(() => {
        const elements = document.querySelectorAll('.animate-on-scroll');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                if(el.id === "first") {
                    entry.target.classList.add('first-bar');
                }
                if(el.id === "second") {
                    entry.target.classList.add("second-bar")
                }
            }
            });
        });
    
        elements.forEach(el => observer.observe(el));
    
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="flex flex-col gap-2">
                <h1 className="text-black dark:text-white text-xl xl:text-4xl font-black font-serif text-shadow antialiased"
                >Skills</h1>
                <div className="flex flex-row">
                    <div id="first" className="animate-on-scroll"/>
                    <div id="second" className="animate-on-scroll"/>
                </div>
            </div>
            <div className="w-full mt-4 h-[94%] md:h-[80%] rounded-xl md:p-4 bg-slate-950/30 backdrop-blur-2xl">
                <div className="banner">
                    <div className="slider" style={{"--quantity": `${images.length}`} as any}>   
                        {images.map((image, key) => (
                            <div className="item" key={key} style={{"--position": `${key}`} as any}>
                                <img
                                    src={image}
                                    alt={""}
                                />
                            </div>
                        ))
                        }
                    </div>
                    <Image
                        width={500}
                        height={500}
                        src={"/skills_icon.png"}
                        alt={""}
                        className="absolute w-48 h-48 md:w-[350px] md:h-[350px] -right-7 -top-16 md:-right-14 md:-top-32 z-10"
                    />
                </div>
            </div>
        </>
    );
}