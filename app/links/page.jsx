import Link from "next/link";

export default function Links() {
    return(
        <div>
            <div>
                <Link
                    href="https://www.linkedin.com/in/maryna-savelyeva-720b39113/" target="_blank"
                    className="text-pink-400">
                    Linkedin
                </Link>
            </div>
            <div>
                <Link
                    href="https://leetcode.com/mareena/" target="_blank"
                    className="text-pink-300">
                    LeetCode
                </Link>
            </div>
            <div>
                <Link
                    href="https://github.com/savelievamareena" target="_blank"
                    className="text-pink-200">
                    Github
                </Link>
            </div>
        </div>
    )
}