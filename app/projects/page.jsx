import ProjectsList from "@/app/projects/ProjectsList";

export default function Projects() {
    return(
        <main className="w-70 mx-auto h-full">
            <h2 className="text-4xl">A list of my projects</h2>
            <ProjectsList/>
        </main>
    )
}