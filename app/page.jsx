import './globals.css'
import Link from "next/link";
import Hello from "@/app/components/Hello";

export default function Home() {
    return (
        <main className="w-1/2 text-center text-2xl">
            <Hello/>
            <div className="min-w-5 flex flex-col space-y-8">
                <div>
                    <Link href="projects"
                          className="underline text-pink-700 hover:text-violet-800">
                        Projects
                    </Link>
                </div>
                <div>
                    <Link
                        href="https://www.linkedin.com/in/maryna-savelyeva-720b39113/" target="_blank"
                        className="underline text-pink-600 hover:text-violet-800 mb-50">
                        Linkedin
                    </Link>
                </div>
                <div>
                    <Link
                        href="https://leetcode.com/mareena/" target="_blank"
                        className="underline text-pink-500 hover:text-violet-800 mb-50">
                        LeetCode
                    </Link>
                </div>
                <div>
                    <Link
                        href="https://github.com/savelievamareena" target="_blank"
                        className="underline text-pink-400 hover:text-violet-800 mb-50">
                        Github
                    </Link>
                </div>
            </div>

        </main>
    );
}

