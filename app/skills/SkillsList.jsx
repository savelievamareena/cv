export default function SkillsList() {
    const skillsLevels = ["Beginner", "Familiar", "Proficient", "Expert"];
    const skillGroups = [
        {
            title: "Core frontend",
            skills: [
                ["React", 3],
                ["JavaScript", 3],
                ["TypeScript", 3],
                ["HTML", 3],
                ["CSS", 3],
            ],
        },
        {
            title: "State & data",
            skills: [
                ["Redux", 2],
                ["Zustand", 2],
                ["React Query", 2],
                ["REST APIs", 3],
                ["GraphQL", 1],
            ],
        },
        {
            title: "Framework & styling",
            skills: [
                ["Next.js", 2],
                ["Tailwind", 2],
                ["SASS", 2],
                ["Material UI", 2],
            ],
        },
        {
            title: "Quality & tooling",
            skills: [
                ["Jest/RTL", 2],
                ["Playwright", 1],
                ["Storybook", 2],
                ["WCAG", 2],
                ["Git", 2],
            ],
        },
        {
            title: "Secondary / backend",
            skills: [
                ["MySQL", 2],
                ["Docker", 1],
                ["Java", 1],
                ["PHP", 1],
                ["Node.js", 0],
            ],
        },
    ];

    return(
        <div className="flex flex-col 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs">
            <div className="flex sticky top-0 z-10 bg-gray-800 py-3">
                <div className="2xl:w-36 xl:w-32 lg:w-28 md:w-24 w-20 flex-shrink-0 p-2"></div>
                {skillsLevels.map((level) => (
                    <div key={level} className="flex-1 pr-1 text-center">{level}</div>
                ))}
            </div>

            {skillGroups.map((group) => (
                <div key={group.title}>
                    <div className="mt-4 mb-1 font-semibold uppercase tracking-wide opacity-60 2xl:text-base xl:text-sm text-xs">
                        {group.title}
                    </div>
                    {group.skills.map(([skill, level]) => (
                        <div key={skill} className="flex">
                            <div className="2xl:w-36 xl:w-32 lg:w-28 md:w-24 w-20 flex-shrink-0 p-2 my-2">{skill}</div>
                            {skillsLevels.map((levelName, levelIndex) => (
                                <div
                                    key={levelName}
                                    className={`flex-1 p-2 my-2 ${
                                        levelIndex <= level ? 'bg-coral-pink' : ''
                                    }`}
                                >
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
