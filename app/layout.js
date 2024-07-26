import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import RouteNameText from "@/components/RouteNameText";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oliver Kwun-Morfitt | portfolio",
  description: "Hi, I'm Oliver, a full-stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-indigo-400">
      <body className={inter.className}>
        <div className="hidden sm:flex fixed top-0 right-0 dark:text-white text-black p-4"></div>
        <div className="flex min-h-screen max-h-full sm:flex-row flex-col dark:text-white dark:bg-gray-900 text-gray-800 bg-white transition-colors">
          {/* <div className="fixed top-0 w-full h-auto flex justify-center items-center bg-indigo-400 text-white">
            Still under construction 🚧
          </div> */}
          <div className=" sm:hidden fixed top-0 right-0 flex flex-col mt-8 fill-gray-400 space-y-4 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              className="w-7 h-8"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-7 h-8"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-7 h-8"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          </div>

          <div className="sm:sticky top-0 sm:min-h-screen sm:h-full h-auto lg:p-24 p-10 lg:pb-24 pb-4 sm:w-auto w-full flex flex-col justify-between">
            <div className="space-y-8">
              <div className="">
                <small>📍 Toronto, ON</small>
                <Link href={"/"}>
                  <h1 className="text-2xl">Oliver Kwun-Morfitt</h1>
                </Link>
                <h2 className="font-semibold">
                  CS @{" "}
                  <span className="text-indigo-900">University of Toronto</span>
                </h2>
              </div>

              <div className="w-full flex space-x-4">
                <Link
                  href={"/posts"}
                  className="hover:underline hover:text-indigo-500"
                >
                  Posts
                </Link>
                <Link
                  href={"/work"}
                  className="hover:underline hover:text-indigo-500"
                >
                  My work
                </Link>
                <Link
                  href={"/cv"}
                  className="hover:underline hover:text-indigo-500"
                >
                  Resume/CV
                </Link>
              </div>
              <div className="sm:max-w-64">
                <h1>Interested in:</h1>
                <div className="flex flex-wrap gap-1 sm:text-sm text-xs">
                  <div className="p-1 px-2 rounded-md bg-blue-300">
                    Quantitative trading
                  </div>
                  <div className="p-1 px-2 rounded-md bg-indigo-300">
                    Machine Learning & AI
                  </div>
                  <div className="p-1 px-2 rounded-md bg-red-300">
                    Math & Statistics
                  </div>
                  <div className="p-1 px-2 rounded-md bg-yellow-300">
                    Software Engineering
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex space-x-4">
              <a
                href="https://www.github.com/olliekm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-indigo-500"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/oliver-kwun-morfitt/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-indigo-500"
              >
                LinkedIn
              </a>
              <a
                href="mailto:oliver.kwunmorfitt@mail.utoronto.ca"
                className="hover:underline hover:text-indigo-500"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full p-10 pb-0 overflow-hidden">
              <RouteNameText />
            </div>
            {children}
            {/* <FooterComponent /> */}
            <div className="p-2 px-4 mt-10 bg-indigo-400 text-white">
              <small>Created by Oliver Kwun-Morfitt 🤖</small>
            </div>
          </div>
          <div className="fixed bottom-0 right-0 p-4">
            <div className="">
              <a
                href="https://visitcount.itsvg.in"
                aria-label="Just an icon showing view count of site"
              >
                <Image
                  width={100}
                  height={50}
                  alt="view count"
                  src="https://visitcount.itsvg.in/api?id=olliekm&label=Views&color=12&icon=5&pretty=true"
                />
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
