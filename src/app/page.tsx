import Profile from "./components/profile";
import Education from "./components/education";
import Skills from "./components/skills";
import WorkExperience from "./components/workExperience";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-screen min-h-screen flex flex-col xl:px-20 overflow-x-hidden -mt-28 xl:-mt-24">
      <div id="profile" className="w-full h-screen rounded-xl px-4 pt-24">
        <Profile/>
      </div>
      <div id="education" className="w-full h-screen rounded-xl px-4 pt-24">
        <Education/>
      </div>
      <div id="skills" className="w-full h-screen rounded-xl px-4 pt-24">
        <Skills/>
      </div>
      <div id="work-experience" className="w-full md:h-screen rounded-xl px-4 pt-24">
        <WorkExperience/>
      </div>
    </main>
  );
}
