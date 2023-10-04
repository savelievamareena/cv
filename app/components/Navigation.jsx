"use client"
import Link from "next/link";
import "../globals.css";
import {usePathname} from "next/navigation"

export default function Navigation() {
    let pathName = usePathname();
    let paths = [
        ["/", "About"],
        ["/projects", "Projects"],
        ["/skills", "Skills"],
        ["/links", "Links"],
        ["/contact", "Contact Me"],
    ]

    let links = paths.map((linkPath, i) => {
        return(
            <div key={i}>
                <Link
                    href={linkPath[0]}
                    className={`text-coral-pink ${pathName === paths[i][0] && "active"}`}
                >
                    {linkPath[1]}
                </Link>
            </div>
        )
    })

    return(
        <nav className={`min-w-full flex flex-row justify-evenly border-b-2 border-coral-pink py-2 mb-10`}>
            {links}
        </nav>
    )
}