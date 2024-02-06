export default function SkillsList() {
    const skillsLevels = ["Beginner", "Familiar", "Proficient", "Expert"];
    const skillsData = [
        { skill: "HTML", level: "Expert" },
        { skill: "CSS", level: "Familiar" },
        { skill: "JS", level: "Proficient" },
        { skill: "React", level: "Proficient" },
        { skill: "TS", level: "Beginner" },
        { skill: "Java", level: "Familiar" },
        { skill: "PHP", level: "Familiar" },
        { skill: "MySQL", level: "Expert" },
        { skill: "Git", level: "Familiar" },
    ];

    return(
        <div className="flex flex-col 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs">
            <div className="flex">
                <div className="2xl:w-32 xl:w-28 lg:w-24 md:w-20 w-16 flex-shrink-0 p-2"></div>
                {skillsLevels.map((level, index) => (
                    <div key={index} className="2xl:w-32 xl:w-28 lg:w-24 md:w-20 w-16 flex-shrink-0 p-2 text-center">{level}</div>
                ))}
            </div>

            {skillsData.map((data, index) => (
                <div key={index} className="flex">
                    <div className="2xl:w-32 xl:w-28 lg:w-24 md:w-20 w-16 flex-shrink-0 p-2 my-2">{data.skill}</div>
                    {skillsLevels.map((level, levelIndex) => (
                        <div
                            key={levelIndex}
                            className={`2xl:w-32 xl:w-28 lg:w-24 md:w-20 w-16 flex-shrink-0 p-2 my-2 ${
                                levelIndex <= skillsLevels.indexOf(data.level) ? 'bg-coral-pink' : ''
                            }`}
                        >
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}