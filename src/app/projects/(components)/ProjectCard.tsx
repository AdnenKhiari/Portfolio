import Image from 'next/image'
import React from 'react'
import "./projectcad.css"
import Link from 'next/link'

export interface Project {
    id: number,
    url: string,
    titre: string,
    content?: string,
    description: string,
    labels?: string[],
    date?: Date,
    type: "big" | "small"

}

export default function ProjectCard(project : Project) {
    return <div className="project-card">
        <Link href={`/projects/${project.id}`}>
            <Image src={project.url} height={450} width={project.type === "small" ? 600 : 1000} alt='project' />
        </Link>
        <Link href={`/projects/${project.id}`}>{project.titre}</Link>
        <p className="p-light">{project.description}</p>
    </div>
}