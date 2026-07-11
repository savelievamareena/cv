export default function SkillsList() {
    const skillsLevels = ["Beginner", "Familiar", "Proficient", "Expert"];
    const skills = new Map([
        ["HTML", 3],
        ["CSS", 2],
        ["JS", 3],
        ["React", 3],
        ["Typescript", 2],
        ["Tailwind", 2],
        ["Redux", 2],
        ["GraphQL", 1],
        ["Next.js", 2],
        ["MySQL", 2],
        ["Git", 2],
        ["Java", 1],
        ["PHP", 1],
    ]);

    return(
        <div className="flex flex-col 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs">
            <div className="flex">
                <div className="2xl:w-36 xl:w-32 lg:w-28 md:w-24 w-20 flex-shrink-0 p-2"></div>
                {skillsLevels.map((level, index) => (
                    <div key={index} className="flex-1 p-2 text-center">{level}</div>
                ))}
            </div>

            {[...skills].map(([skill, level]) => (
                <div key={skill} className="flex">
                    <div className="2xl:w-36 xl:w-32 lg:w-28 md:w-24 w-20 flex-shrink-0 p-2 my-2">{skill}</div>
                    {skillsLevels.map((_, levelIndex) => (
                        <div
                            key={levelIndex}
                            className={`flex-1 p-2 my-2 ${
                                levelIndex <= level ? 'bg-coral-pink' : ''
                            }`}
                        >
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
