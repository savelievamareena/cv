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
        <div className="absolute bg-amber-400 w-16 h-20 left-4 bottom-10 text-4xl flex items-center justify-center cursor-pointer" onClick={downloadHandle}>
            <AiOutlineFileText/>
        </div>
    )
}