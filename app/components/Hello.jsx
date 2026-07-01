export default function Hello() {
    return (
        <div className="flex flex-row flex-wrap h-full items-center gap-20">
            <div className="flex-1 min-w-0 h-full 2xl:text-xl xl:text-lg lg:text-base text-sm text-balance text-justify">
                <p className="text-mint-green">
                    Minsk / Remote, hybrid
                </p>
                <p>
                    Hi, I am Marina, I am a software engineer with around 5 years of
                    commercial experience and a degree in computer science.
                </p>
                <p>
                    Specializing in TypeScript, React, and modern frontend architecture.
                    Experienced in building data-heavy web applications, complex workflows,
                    role-based interfaces, and reliable API integrations. Strong focus on accessible UI,
                    application state management, performance, testing, and user-focused product
                    delivery in cross-functional teams.
                </p>
                <p>
                    Applied frontend engineering expertise across MedTech, business applications,
                    logistics, and financial management products. Experienced in Agile environments
                    and cross-functional collaboration with product managers, designers, backend engineers,
                    and international teams. Mentors junior developers and shares knowledge across the team.
                </p>
            </div>
            <div className="h-full 2xl:text-2xl xl:text-xl lg:text-lg text-base">
                <p className="text-mint-green">
                    Languages:
                </p>
                <p>Russian: native</p>
                <p>English: upper-intermediate</p>
                <p>Polish: elementary</p>
            </div>
        </div>
    )
}