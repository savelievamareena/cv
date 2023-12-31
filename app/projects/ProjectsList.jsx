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

    if (loading) return <p>Loading...</p>
    if (!pData) return <p>No profile data</p>

    return(
        <div className="flex flex-col justify-between flex-1">
            <div key={activeProject.id} className="flex justify-evenly flex-row">
                <div className="responsive-pr-column1">{activeProject.title}</div>
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