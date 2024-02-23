import Image from "next/image";

export default function Education() {
    return (
        <div className="flex flex-col w-full h-full justify-center p-4 gap-16 xl:gap-4">
            <div className="xl:h-[50%] w-full flex flex-col xl:flex-row rounded-2xl md:rounded-full bg-purple-50/5 backdrop-blur-xl p-2 xl:p-10 gap-4">
                <h1 className="md:hidden text-lg font-bold font-serif text-purple-50 text-center w-full antialiased">OSIZWENI SECONDARY SCHOOL</h1>
                <div className="flex flex-row w-full">
                    <div className="h-full w-[30%] xl:w-[15%] flex flex-col justify-center">
                        <Image 
                            src={"/osizweni.jpg"} 
                            alt={""}
                            width={140}
                            height={200}
                            className="h-22 w-22 md:h-36 md:w-36 rounded-full bg-zinc-300 shadow-2xl shadow-purple-800"
                        />
                    </div>
                    <div className="h-full w-[70%] md:w-[85%] flex flex-col justify-center">
                        <h1 className="hidden md:block text-lg font-bold font-serif text-purple-50 text-center w-full antialiased">OSIZWENI SECONDARY SCHOOL</h1>
                        <h1 className="text-base font-thin font-serif text-purple-50 text-center w-full antialiased">(01/2011 - 12/2015)</h1>
                        <h1 className="text-base font-thin font-serif text-purple-50 text-center w-full antialiased mt-4">Obtained Matric with a Bachelor's pass</h1>
                    </div>
                </div>
            </div>
            <div className="xl:h-[50%] w-full flex flex-col xl:flex-row rounded-2xl md:rounded-full bg-purple-50/5 backdrop-blur-xl p-2 xl:p-10 gap-4">
                <h1 className="md:hidden text-lg font-bold font-serif text-purple-50 text-center w-full antialiased">UNIVERSITY OF JOHANNESBURG</h1>
                <div className="flex flex-row w-full">
                    <div className="h-full w-[70%] xl:w-[85%] flex flex-col justify-center">
                        <h1 className="hidden md:block text-lg font-bold font-serif text-purple-50 text-center w-full antialiased">UNIVERSITY OF JOHANNESBURG</h1>
                        <h1 className="text-base font-thin font-serif text-purple-50 text-center w-full antialiased">(01/2017 - 12/2021)</h1>
                        <h1 className="text-base font-thin font-serif text-purple-50 text-center w-full antialiased mt-4">Obtained BSc Degree in Computer Science and Informatics</h1>
                    </div>
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
            </div>
        </div>
    );
}