"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import "./projectcad.css"
import Link from 'next/link'
import { getPicUrl } from '@/app/utils'
import { Timestamp } from 'firebase/firestore'

export interface Project {
    id: string,
    url: string,
    reference?: string,
    titre: string,
    categorie: string,
    content?: string,
    description: string,
    longDescription?: string,
    labels: string[],
    insertionDate : Timestamp,
    lastUpdateDate: Timestamp,
    projectDate: Timestamp,
    type: "big" | "small"

}

export default function ProjectCard(project : Project) {

    const [iconUrl,setIconUrl] = useState<string | null>(null) 
    useEffect(()=>{
        if(project.url) 
            getPicUrl("PROJECTS/"+project.url).then((d)=>setIconUrl(d as string))
    },[project])

    return <div className="project-card">
        <Link href={`/projects/${project.id}`}>
            <div className="image-container" style={{width: project.type === "small" ? 600 : 1000,height: 450}}>
            {iconUrl && <Image src={iconUrl} height={450} width={project.type === "small" ? 600 : 1000} alt='project' />}
            </div>
        </Link>
        <Link href={`/projects/${project.id}`}>{project.titre}</Link>
        <p className="p-light">{project.description}</p>
    </div>
}