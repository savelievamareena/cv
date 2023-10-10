import Link from "next/link";

export default function Links() {
    const links = [
        ["LinkedIn", "https://www.linkedin.com/in/maryna-savelyeva-720b39113/"],
        ["LeetCode", "https://leetcode.com/mareena/"],
        ["GitHub", "https://github.com/savelievamareena"]
    ]

    let linksComponents = links.map((link, i) => {
        return(
            <div key={i} className="pb-5">
                <Link
                    href={link[1]} target="_blank"
                    className="text-mint-green">
                    {link[0]}
                </Link>
            </div>
        )
    })

    return(
        <div>
            {linksComponents}
        </div>
    )
}