"use client";

import Image from "next/image";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";

export default function Skills() {
    //data modeling
    const imagesB = ["/mongoose.png", "/mongodb.png", "/sql.png", "/sqlserver.png", "/cosmosdb.png", "/lucid.png"]
    // framwork & languages 
    const images2 = ["/react.png", "/JS.png", "/Typescript.png", "/next.png", "/redux.png", "/dotnet.png", "/csharp.png", "/blazor.png"]
    const images1 = ["/tailwind.png", "/Bootstrap.png", "/mudblazor.png","/ionic.png", "/java.png", "/angular.png"]
    const images3 = [ "/Assembly.png", "/C.png", "/Cplus.png", "/css.png", "/Html.png", "/XML.png"]

    //data modeling
    const imagesb = ["/azure.png", "/git.png", "/vs.png", "/vscode.png", "/android.png", "/Vercel.png", "/expo.png"]

    const [frameImages, setFrameImages] = useState(images2)
    const [dataImages] = useState(imagesB)
    const [platImages] = useState(imagesb)
    const [activated, setActivated] = useState(1)

    return (
        <div className="flex flex-col w-full h-full justify-center xl:p-4 gap-4 xl:gap-8">
            <div className="w-full flex flex-col rounded-2xl bg-purple-50/5 backdrop-blur-xl xl:bg-inherit pb-2">
                <h1 className="hidden md:block text-base md:text-lg font-bold font-serif text-purple-50 text-center w-full antialiased">Data Modeling</h1>
                <div className="flex flex-wrap md:flex-row gap-8 justify-center mt-2 md:mt-4">
                    {
                        dataImages.map((image, index) => (
                            <Parallax scale={[0, 1.4]} key={index} className="grid place-items-center rounded-full bg-purple-50/5 backdrop-blur-xl w-12 h-12 md:w-20 md:h-20">
                                <Image
                                    src={image}
                                    alt=""
                                    width={300}
                                    height={300}
                                    className="w-12 h-12 md:w-20 md:h-20 object-contain"
                                />
                            </Parallax>
                        ))
                    }
                </div>
            </div>
            <div className="w-full flex flex-col rounded-2xl bg-purple-50/5 backdrop-blur-xl xl:bg-inherit pb-2">
                <h1 className="hidden md:block text-base md:text-lg font-bold font-serif text-purple-50 text-center w-full antialiased">IDEs & Other Platforms</h1>
                <div className="flex flex-wrap md:flex-row gap-8 justify-center mt-2 md:mt-4">
                    {
                        platImages.map((image, index) => (
                            <Parallax scale={[1.4, 0.4]} key={index} className="grid place-items-center rounded-full bg-purple-50/5 backdrop-blur-xl w-12 h-12 md:w-20 md:h-20">
                                <Image
                                    src={image}
                                    alt=""
                                    width={300}
                                    height={300}
                                    className="w-12 h-12 md:w-20 md:h-20 object-contain"
                                />
                            </Parallax>
                        ))
                    }
                </div>
            </div>
            <div className="w-full flex flex-col rounded-2xl bg-purple-50/5 backdrop-blur-xl xl:bg-inherit">
                <h1 className="hidden md:block text-base md:text-lg font-bold font-serif text-purple-50 text-center w-full antialiased">Languages & Frameworks</h1>
                <div className="flex flex-wrap md:flex-row gap-8 justify-center mt-2 md:mt-4">
                    {
                        frameImages.map((image, index) => (
                            <Parallax scale={[1.2, 0.2]} key={index} className="grid place-items-center rounded-full bg-purple-50/5 backdrop-blur-xl w-12 h-12 md:w-20 md:h-20">
                                <Image
                                    src={image}
                                    alt=""
                                    width={300}
                                    height={300}
                                    className="w-12 h-12 md:w-20 md:h-20 object-contain"
                                />
                            </Parallax>
                        ))
                    }
                </div>
                {activated === 0 &&
                    <div className="flex flex-row w-full justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer bi bi-dot w-12 h-12 fill-purple-700" viewBox="0 0 16 16">
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                        </svg>
                        <svg onClick={() => [setFrameImages(images2), setActivated(1)]} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer bi bi-dot w-12 h-12 fill-purple-50" viewBox="0 0 16 16">
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                        </svg>
                        <svg onClick={() => [setFrameImages(images3), setActivated(2)]} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer bi bi-dot w-12 h-12 fill-purple-50" viewBox="0 0 16 16">
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                        </svg>
                    </div>
                }   
                {activated === 1 &&
                    <div className="flex flex-row w-full justify-center">
                        <svg onClick={() => [setFrameImages(images1), setActivated(0)]} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer bi bi-dot w-12 h-12 fill-purple-50" viewBox="0 0 16 16">
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer bi bi-dot w-12 h-12 fill-purple-700" viewBox="0 0 16 16">
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                        </svg>
                        <svg onClick={() => [setFrameImages(images3), setActivated(2)]} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer bi bi-dot w-12 h-12 fill-purple-50" viewBox="0 0 16 16">
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                        </svg>
                    </div>
                }
                {activated === 2 &&
                    <div className="flex flex-row w-full justify-center">
                        <svg onClick={() => [setFrameImages(images1), setActivated(0)]} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer bi bi-dot w-12 h-12 fill-purple-50" viewBox="0 0 16 16">
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                        </svg>
                        <svg onClick={() => [setFrameImages(images2), setActivated(1)]} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer bi bi-dot w-12 h-12 fill-purple-50" viewBox="0 0 16 16">
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                        </svg>    
                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer bi bi-dot w-12 h-12 fill-purple-700" viewBox="0 0 16 16">
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                        </svg>
                    </div>
                }
            </div>
        </div>
    );
}