'use client'
import React from "react";
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs";
import db from "@/_data/db.json";

const projects = db.projects;

export default function ProjectsList() {
    const [activeProjectIndex, setActiveProjectIndex] = React.useState(0);
    const activeProject = projects[activeProjectIndex];

    function projectsFlipNext() {
        if(activeProjectIndex === projects.length - 1) {
            setActiveProjectIndex(0);
        }else {
            setActiveProjectIndex(activeProjectIndex + 1);
        }
    }

    function projectsFlipPrev() {
        if(activeProjectIndex === 0) {
            setActiveProjectIndex(projects.length - 1);
        }else {
            setActiveProjectIndex(activeProjectIndex - 1);
        }
    }

    if (!projects.length) return <p>No profile data</p>

    return(
        <div className="flex flex-col justify-between flex-1">
            <div key={activeProject.id} className="flex justify-evenly flex-row">
                <div className="responsive-pr-column1">
                    <div>{activeProject.title}</div>
                    {activeProject.period && <div className="text-sm opacity-60 mt-1">{activeProject.period}</div>}
                </div>
                <div className="responsive-pr-column2">{activeProject.description}</div>
                <div className="responsive-pr-column3">
                    {activeProject.technologies?.map((technology, i) => {
                        return(
                            <div key={i}>{technology}</div>
                        )
                    })}
                </div>
            </div>
            <div className="flex flex-row space-x-10 text-4xl place-content-center mt-10">
                <BsArrowLeftCircle className="cursor-pointer" onClick={projectsFlipPrev} />
                <BsArrowRightCircle className="cursor-pointer" onClick={projectsFlipNext} />
            </div>
        </div>
    )
}
