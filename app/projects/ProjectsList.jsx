'use client'
import React from "react";
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs";

export default function ProjectsList() {
    const [pData, setPData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [activeProjectIndex, setActiveProjectIndex] = React.useState(0);
    const [activeProject, setActiveProject] = React.useState({});

    React.useEffect(()=> {
        fetch('http://localhost:4000/projects')
            .then((res) => res.json())
            .then((data) => {
                setPData([...data]);
                setLoading(false);
            }).catch(error => {
                console.log(error)
            })
    }, []);

    React.useEffect(()=> {
        if(pData.length > 0) {
            setActiveProject({...pData[activeProjectIndex]});
        }
    }, [pData]);

    React.useEffect(()=> {
        setActiveProject({...pData[activeProjectIndex]});
    }, [activeProjectIndex]);

    function projectsFlipNext() {
        console.log(activeProjectIndex)
        if(activeProjectIndex === pData.length - 1) {
            setActiveProjectIndex(0);
        }else {
            setActiveProjectIndex(activeProjectIndex + 1);
        }
    }

    function projectsFlipPrev() {
        if(activeProjectIndex === 0) {
            setActiveProjectIndex(pData.length - 1);
        }else {
            setActiveProjectIndex(activeProjectIndex - 1);
        }
    }

    if (loading) return <p className="pt-10">Loading...</p>
    if (!pData) return <p className="pt-10">No profile data</p>

    return(
        <div className="flex flex-col h-full pt-10">
            <div key={activeProject.id} className="flex justify-evenly flex-row">
                <div className="text-2xl w-64 shrink-0 pr-4">{activeProject.title}</div>
                <div className="text-xl shrink text-justify">{activeProject.description}</div>
                <div className="text-xl shrink-0 w-64 text-right pl-4">
                    {activeProject.technologies?.map((technology, i) => {
                        return(
                            <div key={i}>{technology}</div>
                        )
                    })}
                </div>
            </div>
            <div className="flex flex-row space-x-10 text-4xl place-content-center mt-auto mb-20">
                <BsArrowLeftCircle className="cursor-pointer" onClick={projectsFlipPrev} />
                <BsArrowRightCircle className="cursor-pointer" onClick={projectsFlipNext} />
            </div>
        </div>
    )
}