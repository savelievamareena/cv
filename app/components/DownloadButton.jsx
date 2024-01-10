"use client"
import React from "react"
import {AiOutlineFileText} from "react-icons/ai";

export default function DownloadButton () {
    function downloadFile(url, fileName){
        fetch(url, { method: 'get', referrerPolicy: 'no-referrer' })
            .then(res => res.blob())
            .then(res => {
                const aElement = document.createElement('a');
                aElement.setAttribute('download', fileName);
                const href = URL.createObjectURL(res);
                aElement.href = href;
                aElement.setAttribute('target', '_blank');
                aElement.click();
                URL.revokeObjectURL(href);
            });
    }

    function downloadHandle() {
        downloadFile('http://localhost:3000/maryna-savelyeva-cv-actual.pdf', 'marina-savelieva-cv.pdf');
    }


    return(
        <div className="absolute bg-amber-400 w-10 h-12 md:w-16 md:h-20 left-10 top-2 md:left-32 md:top-6 text-4xl flex items-center justify-center cursor-pointer"
             onClick={downloadHandle}
             title="Download CV"
        >
            <AiOutlineFileText/>
        </div>
    )
}