import Profile from "./components/profile";
import Education from "./components/education";
import Skills from "./components/skills";
import WorkExperience from "./components/workExperience";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-screen min-h-screen flex flex-col xl:px-20 bg-gradient-radial from-violet-950 via-purple-950 to-purple-900 gap-4">
      <nav className="sticky top-0 flex flex-row p-4 xl:h-24 xl:h-20 w-full transparent z-20">
        <div className="flex flex-row border border-purple-50 border-2 rounded-full w-full p-4 bg-purple-50/5 backdrop-blur-xl">
          <Link className="text-shadow flex flex-col h-full justify-center text-purple-50 w-[25%] text-center font-serif text-sm md:text-base xl:text-lg font-semibold xl:hover:text-xl" href={"#profile"}>Profile</Link>
          <Link className="text-shadow flex flex-col h-full justify-center text-purple-50 w-[25%] text-center font-serif text-sm md:text-base xl:text-lg font-semibold xl:hover:text-xl" href={"#education"}>Education</Link>
          <Link className="text-shadow flex flex-col h-full justify-center text-purple-50 w-[25%] text-center font-serif text-sm md:text-base xl:text-lg font-semibold xl:hover:text-xl" href={"#skills"}>Skills</Link>
          <Link className="text-shadow flex flex-col h-full justify-center text-purple-50 w-[25%] text-center font-serif text-sm md:text-base xl:text-lg font-semibold xl:hover:text-xl" href={"#work-experience"}>Work Experience</Link>
        </div>
      </nav>
      <div id="profile" className="w-full h-screen px-4 md:px-24 xl:px-4 rounded-xl -mt-32 pt-20 xl:-mt-24 xl:py-24">
        <Profile/>
      </div>
      <div id="education" className="w-full h-screen px-4 md:px-24 xl:px-4 rounded-xl pt-20 xl:-mt-24 xl:py-24">
        <Education/>
      </div>
      <div id="skills" className="w-full h-screen p-4 rounded-xl -mt-10 xl:-mt-24 xl:py-24">
        <Skills/>
      </div>
      <div id="work-experience" className="w-full h-screen p-4 rounded-xl -mt-10 xl:-mt-24 xl:py-24">
        <WorkExperience/>
      </div>
    </main>
  );
}
