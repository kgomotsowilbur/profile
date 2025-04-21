"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Cards() {
    const [itemsReady, setItemsReady] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  let active = 1;

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".carousel .card");

    if (items.length > 0) {
      setItemsReady(true);
    }
  }, []);

  useEffect(() => {
    if (!itemsReady) return;
  
    let items = document.querySelectorAll<HTMLElement>(".carousel .card");
    let next = document.getElementById("next");
    let prev = document.getElementById("prev");

    loadShow(active, items);

    if(next)
    next.onclick = function(){
      active = active + 1 < items.length ? active + 1 : active;
      loadShow(active, items);
    }

    if(prev)
    prev.onclick = function(){
      active = active - 1 >= 0 ? active - 1 : active;
      loadShow(active, items)
    }
  }, [itemsReady]);

  function loadShow(active: number, items: NodeListOf<HTMLElement>) {
    const smallScreen = window.matchMedia("(max-width: 768px)");
    const mediumScreen = window.matchMedia("(max-width: 1440px)");
    const largeScreen = window.matchMedia("(max-width: 2560px)");

    let counter = 0;
    items[active].style.transform = "none";
    items[active].style.zIndex = "1";
    items[active].style.filter = "none"
    items[active].style.opacity = "1";

    for (let i = active + 1; i < items.length; i++) {
      counter++;
      if(smallScreen.matches) {
        items[i].style.transform = `translateY(${120 * counter}px) scale(${1 - 0.2 * counter}) perspective(32px) rotateX(-1deg)`;
      } else {
        items[i].style.transform = `translateX(${120 * counter}px) scale(${1 - 0.2 * counter}) perspective(32px) rotateY(-1deg)`;
      }
      items[i].style.zIndex = `${-counter}`;
      items[i].style.filter = "blur(5px)"
      items[i].style.opacity = `${counter > 2 ? 0 : 0.9}`;

    }
    counter = 0
    for (let i = active - 1; i >= 0; i--) {
      counter++;
      if(smallScreen.matches) {
        items[i].style.transform = `translateY(${-120 * counter}px) scale(${1 - 0.2 * counter}) perspective(32px) rotateX(1deg)`;
      } else  {
        items[i].style.transform = `translateX(${-120 * counter}px) scale(${1 - 0.2 * counter}) perspective(32px) rotateY(1deg)`;
      }
      items[i].style.zIndex = `${-counter}`;
      items[i].style.filter = "blur(5px)"
      items[i].style.opacity = `${counter > 2 ? 0 : 0.9}`;

    }
  }

  const handleTouchStart = (e: any) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: any) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    let items = document.querySelectorAll<HTMLElement>(".carousel .card");

    const deltaX = touchStartX.current - touchEndX.current;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        active = active + 1 < items.length ? active + 1 : active;
        loadShow(active, items);
      } else {
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow(active, items)
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

    return (
        <div className="w-full h-full md:h-[80%] rounded-xl md:px-4">
            <div className="flex flex-col w-full h-full justify-center p-2 xl:p-4">
                <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd} 
                className="carousel relative flex flex-col md:flex-row w-full h-[460px] md:h-[400px] gap-8 ">
                    <Link href="https://www.nectarsoft.co.za/" className="card flex flex-col w-[320px] h-[450px] md:w-[550px] md:h-[500px] p-4 rounded-2xl bg-slate-950/60 dark:bg-zinc-50/60 backdrop-blur-2xl hover:bg-slate-950/70 dark:hover:bg-zinc-50/70 gap-4 xl:gap-8">
                        <div className="flex flex-row w-full">
                            <Image
                                alt=""
                                src={"/nectarsoft.png"}
                                width={300}
                                height={300}
                                className="h-10 w-10 md:h-16 md:w-16"
                            />
                            <div className="flex flex-col h-full w-full justify-center">
                                <h1 className="text-base md:text-lg font-bold font-serif  text-end w-full antialiased">Nectarsoft cc</h1>
                                <h1 className="text-base md:text-lg font-thin font-serif text-end w-full antialiased">(14/07/2022 - 25/09/2022)</h1>
                                <h1 className="text-base md:text-lg font-thin font-serif  text-end w-full antialiased italic">On-site ~ Temporary Contract</h1>
                            </div>
                        </div>
                        <div className="md:p-4">
                            <p className="text-base md:text-lg font-semibold font-serif  text-center w-full antialiased mb-2">Junior Software Developer duties:</p>
                            <p className="text-sm md:text-base font-base font-serif  text-start w-full antialiased">· Azure DevOps for recieving and closing refined tasks on weekly sprints</p>    
                            <p className="text-sm md:text-base font-base font-serif  text-start w-full antialiased">· Server SQL Management Studio to access the systems database</p>
                            <p className="text-sm md:text-base font-base font-serif  text-start w-full antialiased">· Visual Studio for the .Net core backend, and AngularJS frontend (website)</p>
                            <p className="text-sm md:text-base font-base font-serif  text-start w-full antialiased">· Webstorm for Angular 12 frontend (mobile app)</p>
                            <p className="text-sm md:text-base font-base font-serif  text-start w-full antialiased">· Postman for testing and debugging</p>
                            <p className="text-sm md:text-base font-base font-serif  text-start w-full antialiased">· Collaborate with Developers in the office</p>
                            <p className="text-sm md:text-base font-base font-serif  text-start w-full antialiased">· Attend in office and online meetings</p>
                        </div>
                    </Link>
                    <Link href="https://www.shaper.co.za/" className="card relative flex flex-col w-[320px] h-[450px] md:w-[550px] md:h-[500px] p-4 rounded-2xl bg-slate-950/60 dark:bg-zinc-50/60 backdrop-blur-2xl hover:bg-slate-950/70 dark:hover:bg-zinc-50/70 gap-4 xl:gap-8">
                        <div className="flex flex-row w-full">
                            <Image
                                alt=""
                                src={"/shaper.png"}
                                width={300}
                                height={450}
                                className="h-6 w-auto md:w-auto md:h-12"
                            />
                            <div className="flex flex-col h-full w-full justify-center">
                                <h1 className="text-base md:text-lg font-bold font-serif  text-end w-full antialiased">Shaper</h1>
                                <h1 className="text-base md:text-lg font-thin font-serif  text-end w-full antialiased text-nowrap">(01/08/2024 - current)</h1>
                                <h1 className="text-base md:text-lg font-thin font-serif  text-end w-full antialiased italic">Hybrid ~ Permanent</h1>
                            </div>
                        </div>
                        <div className="md:p-4">
                            <p className="text-base md:text-lg font-semibold font-serif  text-center w-full antialiased mb-2">Junior Software Developer duties:</p>
                            <p className="text-sm md:text-base font-base font-serif  text-start w-full antialiased">· Participate in daily stand-up meetings to provide progress updates, address any blockers, and collaborate effectively with the design and API teams.</p>    
                            <p className="text-sm md:text-base font-base font-serif  text-start w-full antialiased">· Review API documentation to structure queries in alignment with expected specifications.</p>
                            <p className="text-sm md:text-base font-base font-serif  text-start w-full antialiased">· Implement UI components using Next.js, closely following the provided Figma designs, and integrate them with backend data from Strapi.</p>
                            <p className="text-sm md:text-base font-base font-serif  text-start w-full antialiased">· Conduct interviews for intern candidates to assess technical skills</p>
                        </div>
                        <div 
                          className={"absolute bottom-5 left-[45%] w-[20px] h-[20px] md:hidden bg-[url(/drag_light.svg)] dark:bg-[url(/drag.svg)] bg-cover animate-ping"}
                        />
                    </Link>
                    <Link href="https://www.reecheble.com/" className="card flex flex-col w-[320px] h-[450px] md:w-[550px] md:h-[500px] p-4 rounded-2xl bg-slate-950/60 dark:bg-zinc-50/60 backdrop-blur-2xl hover:bg-slate-950/70 dark:hover:bg-zinc-50/70 gap-4 xl:gap-8">
                        <div className="flex flex-row w-full">
                            <Image
                                alt=""
                                src={"/reech.png"}
                                width={300}
                                height={450}
                                className="h-6 w-auto md:w-auto md:h-12"
                            />
                            <div className="flex flex-col h-full w-full justify-center">
                                <h1 className="text-base md:text-lg font-bold font-serif  text-end w-full antialiased">Reecheble</h1>
                                <h1 className="text-base md:text-lg font-thin font-serif  text-end w-full antialiased text-nowrap">(01/11/2022 - 04/09/2023)</h1>
                                <h1 className="text-base md:text-lg font-thin font-serif  text-end w-full antialiased italic">Remotely ~ Internship</h1>
                            </div>
                        </div>
                        <div className="md:p-4">
                            <p className="text-base md:text-lg font-semibold font-serif  text-center w-full antialiased mb-2">Full Stack Developer (Intern) duties:</p>
                            <p className="text-sm md:text-base font-base font-serif  text-start w-full antialiased">· Azure DevOps, and Github for refining requirements, creating weekly sprints, and opening and closing backlog tasks</p>    
                            <p className="text-sm md:text-base font-base font-serif  text-start w-full antialiased">· Azure Cosmosdb, and Mongodb to create databases, store and retrieve data</p>
                            <p className="text-sm md:text-basefont-base font-serif  text-start w-full antialiased">· Visual Studio for ASP.Net backend, and Mudblazor frontend (website)</p>
                            <p className="text-sm md:text-base font-base font-serif  text-start w-full antialiased">· Visual Studio Code for MERT stack (mobile app and website)</p>
                            <p className="text-sm md:text-base font-base font-serif  text-start w-full antialiased">· Postman, Expo Go, and Android Studio Emulators for debugging</p>
                            <p className="text-sm md:text-base font-base font-serif  text-start w-full antialiased">· Expo EAS, and Vercel for hosting apps, and websites</p>
                        </div>
                    </Link>
                    <button id="next" className="bg-slate-950/60 dark:bg-zinc-50/60 backdrop-blur-2xl hover:bg-slate-950/70 dark:hover:bg-zinc-50/70">&gt;</button>
                    <button id="prev" className="bg-slate-950/60 dark:bg-zinc-50/60 backdrop-blur-2xl hover:bg-slate-950/70 dark:hover:bg-zinc-50/70">&lt;</button>
                </div>
            </div>
        </div>
    )
}