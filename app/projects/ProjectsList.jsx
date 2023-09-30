async function getProjects() {
    let data = await fetch("http://localhost:4000/projects", {
        next: {
            revalidate: 100
        }
    });
    return data.json();
}

export default async function ProjectsList() {
    let projects = await getProjects();
    let projectsComponents = projects.map(project => {
        return(
            <div key={project.id} className="flex justify-evenly flex-row mb-10 pb-5 border-b border-mint-green">
                <div className="text-2xl w-64 shrink-0 mr-2">{project.title}</div>
                <div className="text-xl shrink text-justify mr-10">{project.description}</div>
                <div className="text-xl shrink-0 w-64 text-right">
                    {project.technologies.map(technologie => {
                        return(
                            <div>{technologie}</div>
                        )
                    })}
                </div>
            </div>
        )
    })

    return(
        <>
            {projectsComponents}
        </>
    )
}