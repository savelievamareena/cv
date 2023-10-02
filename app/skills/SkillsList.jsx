export default function SkillsList() {
    const skillsLevels = ["Beginner", "Familiar", "Proficient", "Expert"];
    const skillsData = [
        { skill: "HTML", level: "Expert" },
        { skill: "CSS", level: "Familiar" },
        { skill: "JavaScript", level: "Proficient" },
        { skill: "React", level: "Proficient" },
        { skill: "Typescript", level: "Beginner" },
        { skill: "Java", level: "Familiar" },
        { skill: "PHP", level: "Familiar" },
        { skill: "MySQL", level: "Expert" },
        { skill: "Git", level: "Proficient" },
    ];

    return(
        <div className="flex flex-col text-xl pt-10">
            <div className="flex">
                <div className="w-36 flex-shrink-0 p-2"></div>
                {skillsLevels.map((level, index) => (
                    <div key={index} className="w-36 flex-shrink-0 p-2 text-center">{level}</div>
                ))}
            </div>

            {skillsData.map((data, index) => (
                <div key={index} className="flex">
                    <div className="w-36 flex-shrink-0 p-2 my-2">{data.skill}</div>
                    {skillsLevels.map((level, levelIndex) => (
                        <div
                            key={levelIndex}
                            className={`w-36 flex-shrink-0 p-2 my-2 ${
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