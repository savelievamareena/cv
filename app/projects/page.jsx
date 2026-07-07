import ProjectsList from "@/app/projects/ProjectsList";

export default function Projects() {
    return(
        <main className="w-full h-full flex flex-col flex-1">
            <h2>My projects</h2>
            <ProjectsList/>
        </main>
    )
}