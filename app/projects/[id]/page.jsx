import {notFound} from "next/navigation";
export const dynamicParams = true;

export async function generateStaticParams() {
    let res = await fetch("http://localhost:4000/projects");
    let projects = await res.json();
    return projects.map(pr => ({
        id: pr.id.toString()
    }))
}

async function getProject(id) {
    let path = "http://localhost:4000/projects/" + id;
    let res = await fetch(path);
    if(!res.ok) {
        notFound();
    }
    return await res.json();
}

export default async function ProjectDetails({params}) {
    let project = await getProject(params.id);
    return(
        <div>
            {project.title}
        </div>
    )
}