import Image from "next/image";

export default function Profile() {
    return (
        <div className="flex flex-col xl:flex-row w-full h-full justify-center gap-2 xl:gap-0">
            <div className="flex flex-row w-full justify-center">
                <Image
                    alt=""
                    src={"/Grad.png"}
                    width={380}
                    height={600}
                    className="w-64 md:w-96 xl:h-auto xl:w-auto shadow-2xl shadow-purple-800 rounded-3xl"
                />
            </div>
            <div className="flex flex-col xl:h-full w-fit xl:justify-center gap-2 xl:gap-4 xl:pl-8">
                <div className="flex flex-col">
                    <h1 className="text-xl md:text-2xl xl:text-5xl font-black font-serif text-purple-50 text-shadow antialiased">KGOMOTSO WILBUR</h1>
                    <h1 className="text-xl md:text-2xl xl:text-5xl font-black font-serif text-purple-50 text-shadow antialiased">MANANA</h1>
                </div>
                <h1 className="text-base md:text-xl xl:text-2xl font-semibold font-serif text-purple-50 text-shadow antialiased italic text-center">Full Stack Developer</h1>
                <div className="flex flex-row w-full justify-center mt-4">
                    <h1 className="text-sm md:text-base xl:text-lg font-serif font-thin text-purple-50 text-center w-10/12 h-full antialiased">BSc graduate in Computer science and Informatics. Full stack developer mainly skilled on .Net core and MERT/MEAN stack. Versatile, and effective enough to work on end-to-end web development projects, and ensure that the collaboration between front-end and back-end is in sync.</h1>
                </div>
            </div>
        </div>
    );
}   