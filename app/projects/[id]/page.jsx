import {notFound} from "next/navigation";
import db from "@/_data/db.json";

export const dynamicParams = true;

export function generateStaticParams() {
    return db.projects.map(pr => ({
        id: pr.id.toString()
    }))
}

function getProject(id) {
    let project = db.projects.find(pr => pr.id.toString() === id);
    if(!project) {
        notFound();
    }
    return project;
}

export default async function ProjectDetails({params}) {
    let {id} = await params;
    let project = getProject(id);
    return(
        <div>
            {project.title}
        </div>
    )
}
