"use client";

import { useEffect } from "react";
import Cards from "./work/cards";

export default function WorkExperience() {
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
                <h1 className="text-black dark:text-white text-xl xl:text-4xl font-black font-serif  antialiased"
                >Work Experience</h1>
                <div className="flex flex-row">
                    <div id="first" className="animate-on-scroll"/>
                    <div id="second" className="animate-on-scroll"/>
                </div>
            </div>
            <Cards/>
        </>
    );
}