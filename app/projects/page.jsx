import ProjectsList from "@/app/projects/ProjectsList";

export default function Projects() {
    return(
        <main className="w-70 mx-auto h-full flex flex-col flex-1">
            <h2 className="text-4xl">My projects</h2>
            <ProjectsList/>
        </main>
    )
}