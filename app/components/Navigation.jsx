"use client"
import Link from "next/link";
import "../globals.css";
import {usePathname} from "next/navigation"

export default function Navigation() {
    let pathName = usePathname();
    let paths = [
        ["/", "About", "text-pink-700"],
        ["/cv", "CV", "text-pink-600"],
        ["/projects", "Projects", "text-pink-500"],
        ["/links", "Links", "text-pink-400"],
        ["/skills", "Skills", "text-pink-300"],
    ]

    let links = paths.map((linkPath, i) => {
        return(
            <div key={i}>
                <Link
                    href={linkPath[0]}
                    className={`${linkPath[2]} ${pathName === paths[i][0] && "active"}`}
                >
                    {linkPath[1]}
                </Link>
            </div>
        )
    })

    return(
        <nav className={`min-w-full flex flex-row justify-evenly my-5 border-b-2 border-pink-400 py-2`}>
            {links}
        </nav>
    )
}