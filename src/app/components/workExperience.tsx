import Image from "next/image";
import Link from "next/link";

export default function WorkExperience() {
    return (
        <div className="flex flex-col w-full h-full justify-center p-2 xl:p-4">
            <div className="flex flex-col md:flex-row w-full gap-8">
                <Link href="https://www.nectarsoft.co.za/" className="flex flex-col w-full md:w-[50%] p-4 rounded-2xl bg-purple-50/5 backdrop-blur-2xl hover:bg-purple-50/10 gap-4 xl:gap-8">
                    <div className="flex flex-row w-full">
                        <Image
                            alt=""
                            src={"/nectarsoft.png"}
                            width={300}
                            height={300}
                            className="h-10 w-10 md:h-16 md:w-16"
                        />
                        <div className="flex flex-col h-full w-full justify-center">
                            <h1 className="text-base md:text-lg font-bold font-serif text-purple-50 text-end w-full antialiased">Nectarsoft cc</h1>
                            <h1 className="text-base md:text-lg font-thin font-serif text-purple-50 text-end w-full antialiased">(14/07/2022 - 25/09/2022)</h1>
                            <h1 className="text-base md:text-lg font-thin font-serif text-purple-50 text-end w-full antialiased italic">On-site ~ Temporary Contract</h1>
                        </div>
                    </div>
                    <div>
                        <p className="text-base md:text-lg font-semibold font-serif text-purple-50 text-center w-full antialiased mb-2">Junior Software Developer duties:</p>
                        <p className="text-sm md:text-base font-base font-serif text-purple-50 text-start w-full antialiased">· Azure DevOps for recieving and closing refined tasks on weekly sprints</p>    
                        <p className="text-sm md:text-base font-base font-serif text-purple-50 text-start w-full antialiased">· Server SQL Management Studio to access the systems database</p>
                        <p className="text-sm md:text-base font-base font-serif text-purple-50 text-start w-full antialiased">· Visual Studio for the .Net core backend, and AngularJS frontend (website)</p>
                        <p className="text-sm md:text-base font-base font-serif text-purple-50 text-start w-full antialiased">· Webstorm for Angular 12 frontend (mobile app)</p>
                        <p className="text-sm md:text-base font-base font-serif text-purple-50 text-start w-full antialiased">· Postman for testing and debugging</p>
                        <p className="text-sm md:text-base font-base font-serif text-purple-50 text-start w-full antialiased">· Collaborate with Developers in the office</p>
                        <p className="text-sm md:text-base font-base font-serif text-purple-50 text-start w-full antialiased">· Attend in office and online meetings</p>
                    </div>
                </Link>
                <Link href="https://www.reecheble.com/" className="flex flex-col w-full md:w-[50%] p-4 rounded-2xl bg-purple-50/5 backdrop-blur-2xl hover:bg-purple-50/10 gap-4 xl:gap-8">
                    <div className="flex flex-row w-full">
                        <Image
                            alt=""
                            src={"/reech.png"}
                            width={300}
                            height={450}
                            className="h-6 w-auto md:w-auto md:h-12"
                        />
                        <div className="flex flex-col h-full w-full justify-center">
                            <h1 className="text-base md:text-lg font-bold font-serif text-purple-50 text-end w-full antialiased">Reecheble</h1>
                            <h1 className="text-base md:text-lg font-thin font-serif text-purple-50 text-end w-full antialiased">(01/11/2022 - 04/09/2023)</h1>
                            <h1 className="text-base md:text-lg font-thin font-serif text-purple-50 text-end w-full antialiased italic">Remotely ~ Internship</h1>
                        </div>
                    </div>
                    <div>
                        <p className="text-base md:text-lg font-semibold font-serif text-purple-50 text-center w-full antialiased mb-2">Full Stack Developer (Intern) duties:</p>
                        <p className="text-sm md:text-base font-base font-serif text-purple-50 text-start w-full antialiased">· Azure DevOps, and Github for refining requirements, creating weekly sprints, and opening and closing backlog tasks</p>    
                        <p className="text-sm md:text-base font-base font-serif text-purple-50 text-start w-full antialiased">· Azure Cosmosdb, and Mongodb to create databases, store and retrieve data</p>
                        <p className="text-sm md:text-basefont-base font-serif text-purple-50 text-start w-full antialiased">· Visual Studio for ASP.Net backend, and Mudblazor frontend (website)</p>
                        <p className="text-sm md:text-base font-base font-serif text-purple-50 text-start w-full antialiased">· Visual Studio Code for MERT stack (mobile app and website)</p>
                        <p className="text-sm md:text-base font-base font-serif text-purple-50 text-start w-full antialiased">· Postman, Expo Go, and Android Studio Emulators for debugging</p>
                        <p className="text-sm md:text-base font-base font-serif text-purple-50 text-start w-full antialiased">· Expo EAS, and Vercel for hosting apps, and websites</p>
                        <p className="text-sm md:text-base font-base font-serif text-purple-50 text-start w-full antialiased">· Create Excel spreadsheets, convert .xml spreadsheets to .json data structured files and upload to mongodb</p>
                        <p className="text-sm md:text-base font-base font-serif text-purple-50 text-start w-full antialiased">· Collaborate with developers through online platforms</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}