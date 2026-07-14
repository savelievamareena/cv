"use client"
import Link from "next/link";
import "../globals.css";
import {usePathname} from "next/navigation"

export default function Navigation() {
    const pathName = usePathname();
    const paths = [
        { href: "/", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/skills", label: "Skills" },
        { href: "/links", label: "Links" },
        { href: "/contact", label: "Contact Me" },
    ];

    return(
        <nav className="min-w-full flex flex-row justify-evenly border-b-2 border-coral-pink py-2 mb-10">
            {paths.map(({ href, label }) => (
                <div key={href}>
                    <Link
                        href={href}
                        className={`text-coral-pink ${pathName === href && "active"} 2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm`}
                    >
                        {label}
                    </Link>
                </div>
            ))}
        </nav>
    )
}