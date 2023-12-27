import Image from 'next/image'
import React from 'react'
import "./projectcad.css"
import Link from 'next/link'

export interface Project {
    id: number,
    url: string,
    titre: string,
    categorie: string,
    content?: string,
    description: string,
    longDescription?: string,
    labels: string[],
    insertionDate : Date,
    lastUpdateDate: Date,
    projectDate: Date,
    type: "big" | "small"

}

export default function ProjectCard(project : Project) {
    return <div className="project-card">
        <Link href={`/projects/${project.id}`}>
            <div className="image-container" style={{width: project.type === "small" ? 600 : 1000,height: 450}}>
            <Image src={project.url} height={450} width={project.type === "small" ? 600 : 1000} alt='project' />
            </div>
        </Link>
        <Link href={`/projects/${project.id}`}>{project.titre}</Link>
        <p className="p-light">{project.description}</p>
    </div>
}