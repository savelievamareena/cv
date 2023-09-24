import ProjectsList from "@/app/projects/ProjectsList";

export default function Projects() {
    return(
        <main className="w-70 mx-auto">
            <h2 className="text-4xl my-3 pb-5">A list of my projects</h2>
            <ProjectsList/>
        </main>
    )
}