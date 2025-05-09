"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Parallax, useParallax } from "react-scroll-parallax";
import { TypeAnimation } from 'react-type-animation';

export default function Profile() {
    const parallax = useParallax<HTMLDivElement>({
        rotateY: [120, -120],
    });

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
                >Profile</h1>
                <div className="flex flex-row">
                    <div id="first" className="animate-on-scroll"/>
                    <div id="second" className="animate-on-scroll"/>
                </div>
            </div>
            <div className="w-full h-full rounded-xl md:px-4">
                <div className="flex flex-col md:flex-row justify-center w-full h-full gap-4 xl:gap-0">
                    <div ref={parallax.ref} className="spinner grid w-full md:w-[45%] place-items-center">
                        <Image
                            alt=""
                            src={"/Grad.png"}
                            width={380}
                            height={600}
                            className="w-64 md:w-96 md:max-h-[70%] xl:h-auto xl:w-auto shadow-2xl shadow-orange-200 dark:shadow-sky-200 rounded-3xl"
                        />
                    </div>
                    <div className="flex flex-col md:h-full w-full md:w-[55%] md:justify-center gap-2 md:gap-4 items-center text-black dark:text-white">
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl md:text-xl xl:text-4xl font-black font-serif  antialiased">KGOMOTSO WILBUR</h1>
                            <h1 className="text-xl md:text-xl xl:text-4xl font-black font-serif  antialiased">MANANA</h1>
                        </div>
                        <h1 className="text-base md:text-xl xl:text-2xl font-semibold font-serif  antialiased italic text-center">Full Stack Developer</h1>
                        <div className="flex flex-row w-full justify-center h-[96px] md:h-[90px]">
                            <TypeAnimation
                                sequence={[
                                    "Bachelor of Science graduate in Computer Science and Informatics.", 1000,
                                    "Full-stack developer with strong proficiency in .NET Core as well as MERT and MEAN stack technologies.", 1000,
                                ]}
                                wrapper="h2"
                                speed={50}
                                deletionSpeed={90}
                                className="text-sm md:text-base xl:text-lg font-serif font-thin text-center w-10/12 h-full antialiased"
                                repeat={Infinity}
                                cursor={true}
                            />
                        </div>
                        <div className="flex flex-row w-full justify-center gap-4">   
                            <Link href="https://blak-shoppers.vercel.app" className="flex cursor-pointer">
                                <Parallax scale={[1, 0]} className="grid place-items-center rounded-full w-10 h-10 md:w-12 md:h-12">
                                    <Image
                                        src={"/blakicon.png"}
                                        alt=""
                                        width={300}
                                        height={300}
                                        className="w-9 h-9 md:w-11 md:h-11 hover:w-12 hover:h-12 md:hover:w-14 md:hover:h-14 object-contain"
                                    />
                                </Parallax>
                            </Link>
                            <Link href="https://api.whatsapp.com/send?phone=27612967749" className="flex cursor-pointer">
                                <Parallax scale={[1, 0]} className="grid place-items-center rounded-full  w-10 h-10 md:w-12 md:h-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-whatsapp fill-green-500 w-8 h-8 md:w-10 md:h-10 hover:w-10 hover:h-10 md:hover:w-12 md:hover:h-12" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                                    </svg>
                                </Parallax>
                            </Link>
                            <Link href="https://www.linkedin.com/in/kgomotso-manana-8787b1219" className="flex cursor-pointer">
                                <Parallax scale={[1, 0]} className="grid place-items-center rounded-full  w-10 h-10 md:w-12 md:h-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-linkedin fill-blue-500 w-8 h-8 md:w-10 md:h-10 hover:w-10 hover:h-10 md:hover:w-12 md:hover:h-12" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                    </svg>
                                </Parallax>
                            </Link>
                            <Link href="mailto:kgomotsowilbur@gmail.com" className="flex cursor-pointer">
                                <Parallax scale={[1, 0]} className="grid place-items-center rounded-full  w-10 h-10 md:w-12 md:h-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-envelope-at fill-purple-50 w-8 h-8 md:w-10 md:h-10 hover:w-10 hover:h-10 md:hover:w-12 md:hover:h-12" viewBox="0 0 16 16">
                                        <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                                        <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                                    </svg>  
                                </Parallax>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}   