import ProjectsList from "@/app/projects/ProjectsList";

export default function Projects() {
    return(
        <main className="xl:w-70 w-90 mx-auto h-full flex flex-col flex-1">
            <h2>My projects</h2>
            <ProjectsList/>
        </main>
    )
}