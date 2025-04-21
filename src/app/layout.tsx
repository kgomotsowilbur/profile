import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Mr KW Manana',
  description: 'Kgomotso Wilbur Manana',
  icons: {
    icon: ['/logo.png'],
    shortcut: ['/logo.png']
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    {
      icon : "/profile.svg",
      link: "#profile"
    },
    {
      icon: "/education.svg",
      link: "#education"
    },
    {
      icon: "/skills.svg",
      link: "#skills"
    },
    {
      icon: "/work.svg",
      link: "#work-experience"

    }
  ];
  return (
    <html lang="en">
      <body className="bg-[url(/light_background.jpeg)] dark:bg-[url(/dark_background.png)] bg-fixed bg-cover w-[100vw] min-h-[100vh] text-black dark:text-white">
        <nav className="sidenav fixed flex flex-col z-20">
          <div className="flex w-[138px] h-[40px] md:w-[50px] md:h-[170px] flex-row md:flex-col rounded-full w-full p-2 gap-8 bg-slate-950/60 dark:bg-zinc-50/60 backdrop-blur-xl">
            <Link className="flex md:w-[34px] items-center justify-center" href={"#profile"}>
              <div 
                className={"w-[20px] h-[20px] md:w-[30px] md:h-[30px] hover:w-[22px] hover:h-[22px] hover:md:w-[32px] hover:md:h-[32px] bg-[url(/profile_light.svg)] dark:bg-[url(/profile.svg)] bg-cover"}
              />
            </Link>
            {/* <Link className="flex items-center justify-center" href={"#education"}>
              <div 
                className={"w-[20px] h-[20px] md:w-[30px] md:h-[30px] md:h-[30px] hover:w-[22px] hover:h-[22px] hover:md:w-[32px] hover:md:h-[32px] bg-[url(/education_light.svg)] dark:bg-[url(/education.svg)] bg-cover"}
              />
            </Link> */}
            <Link className="flex items-center justify-center" href={"#skills"}>
              <div 
                className={"w-[20px] h-[20px] md:w-[30px] md:h-[30px] md:h-[30px] hover:w-[22px] hover:h-[22px] hover:md:w-[32px] hover:md:h-[32px] bg-[url(/skills_light.svg)] dark:bg-[url(/skills.svg)] bg-cover"}
              />
            </Link>
            <Link className="flex items-center justify-center" href={"#work-experience"}>
              <div 
                className={"w-[20px] h-[20px] md:w-[30px] md:h-[30px] md:h-[30px] hover:w-[22px] hover:h-[22px] hover:md:w-[32px] hover:md:h-[32px] bg-[url(/work_light.svg)] dark:bg-[url(/work.svg)] bg-cover"}
              />
            </Link>
          </div>
        </nav>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
