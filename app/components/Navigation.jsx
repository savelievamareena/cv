"use client"
import Link from "next/link";
import "../globals.css";
import {usePathname} from "next/navigation"

export default function Navigation() {
    let pathName = usePathname();
    return(
        <nav className="min-w-full flex flex-row justify-evenly my-5 border-b-2 border-pink-400 py-2">
            <div>
                <Link href="/"
                      className={`text-pink-600 ${pathName === "/" ? "active" : null }`}>
                    About
                </Link>
            </div>
            <div>
                <Link href="cv"
                      className={`text-pink-500 ${pathName === "/cv" ? "active" : null }`}>
                    CV
                </Link>
            </div>
            <div>
                <Link href="projects"
                      className={`text-pink-400 ${pathName === "/projects" ? "active" : null }`}>
                    Projects
                </Link>
            </div>
            <div>
                <Link
                    href="links"
                    className={`text-pink-300 ${pathName === "/links" ? "active" : null }`}>
                    External Links
                </Link>
            </div>
        </nav>
    )
}