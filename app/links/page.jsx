import Link from "next/link";

export default function Links() {
    const links = [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/maryna-savelyeva-720b39113/" },
        { label: "LeetCode", url: "https://leetcode.com/u/optovoloknope/" },
        { label: "GitHub", url: "https://github.com/savelievamareena" },
    ];

    return (
        <div className="w-full flex flex-col items-center flex-1">
            {links.map(({ label, url }) => (
                <div key={label} className="pb-5">
                    <Link
                        href={url} target="_blank"
                        className="text-mint-green">
                        {label}
                    </Link>
                </div>
            ))}
        </div>
    );
}
