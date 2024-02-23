'use client'

import Image from "next/image";
import { useState } from "react";

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
    const [dataImages, setDataImages] = useState(imagesB)
    const [platImages, setPlatImages] = useState(imagesb)
    const [activated, setActivated] = useState(1)

    return (
        <div className="flex flex-col w-full h-full justify-center p-4 gap-8">
            <div className="w-full h-[33%] flex flex-col">
                <h1 className="text-lg font-bold font-serif text-purple-50 text-center w-full antialiased">Data Modeling</h1>
                <div className="flex flex-row gap-8 justify-center mt-4">
                    {
                        dataImages.map((image) => (
                            <div className="grid place-items-center rounded-full bg-purple-50/5 backdrop-blur-xl w-20 h-20">
                                <Image
                                    src={image}
                                    alt=""
                                    width={300}
                                    height={300}
                                    className="w-20 h-20 object-contain"
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-full h-[33%] flex flex-col">
                <h1 className="text-lg font-bold font-serif text-purple-50 text-center w-full antialiased">IDEs & Other Platforms</h1>
                <div className="flex flex-row gap-8 justify-center mt-4">
                    {
                        platImages.map((image) => (
                            <div className="grid place-items-center rounded-full bg-purple-50/5 backdrop-blur-xl w-20 h-20">
                                <Image
                                    src={image}
                                    alt=""
                                    width={300}
                                    height={300}
                                    className="w-20 h-20 object-contain"
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-full h-[34%] flex flex-col">
                <h1 className="text-lg font-bold font-serif text-purple-50 text-center w-full antialiased">Languages & Frameworks</h1>
                <div className="flex flex-row gap-8 justify-center mt-4">
                    {
                        frameImages.map((image) => (
                            <div className="grid place-items-center rounded-full bg-purple-50/5 backdrop-blur-xl w-20 h-20">
                                <Image
                                    src={image}
                                    alt=""
                                    width={300}
                                    height={300}
                                    className="w-20 h-20 object-contain"
                                />
                            </div>
                        ))
                    }
                </div>
                {activated === 0 &&
                    <div className="flex flex-row w-full justify-center mb-4">
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
                    <div className="flex flex-row w-full justify-center mb-4">
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
                    <div className="flex flex-row w-full justify-center mb-4">
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