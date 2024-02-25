import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Link from "next/link";

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
  return (
    <html lang="en">
      <body className="bg-gradient-radial from-violet-950 via-purple-950 to-purple-900">
        <nav className="sticky top-0 flex flex-row p-4 xl:h-24 xl:h-20 w-full transparent z-20 xl:px-20">
          <div className="flex flex-row border border-purple-50 border-2 rounded-full w-full p-4 bg-purple-50/5 backdrop-blur-xl">
            <Link className="text-shadow flex flex-col h-full justify-center text-purple-50 w-[25%] text-center font-serif text-sm md:text-base xl:text-lg font-semibold xl:hover:text-xl" href={"#profile"}>Profile</Link>
            <Link className="text-shadow flex flex-col h-full justify-center text-purple-50 w-[25%] text-center font-serif text-sm md:text-base xl:text-lg font-semibold xl:hover:text-xl" href={"#education"}>Education</Link>
            <Link className="text-shadow flex flex-col h-full justify-center text-purple-50 w-[25%] text-center font-serif text-sm md:text-base xl:text-lg font-semibold xl:hover:text-xl" href={"#skills"}>Skills</Link>
            <Link className="text-shadow flex flex-col h-full justify-center text-purple-50 w-[25%] text-center font-serif text-sm md:text-base xl:text-lg font-semibold xl:hover:text-xl" href={"#work-experience"}>Work Experience</Link>
          </div>
        </nav>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
