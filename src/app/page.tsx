import Profile from "./components/profile";
import Education from "./components/education";
import Skills from "./components/skills";
import WorkExperience from "./components/workExperience";

export default function Home() {
  return (
    <main className="max-w-screen min-h-screen flex flex-col overflow-x-hidden text-white dark:text-black">
      <div id="profile" className="h-screen p-4 md:px-24 py-12 bg-gradient-radial from-slate-400 via-gray-300 to-zinc-200 dark:bg-gradient-radial dark:from-zinc-700 dark:via-gray-800 dark:to-slate-900">
        <Profile/>
      </div>
      <div id="education" className="h-screen p-4 md:px-24 py-12">
        <Education/>
      </div>
      <div id="skills" className="h-screen p-4 md:px-24 py-12 bg-gradient-radial from-slate-400 via-gray-300 to-zinc-200 dark:bg-gradient-radial dark:from-zinc-400 dark:via-gray-800 dark:to-slate-900">
        <Skills/>
      </div>
      <div id="work-experience" className="h-screen p-4 md:px-24 py-12">
        <WorkExperience/>
      </div>
    </main>
  );
}
