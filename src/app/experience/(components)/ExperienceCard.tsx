import Image from 'next/image'
import React from 'react'
import "./Experience/style.css"

export interface Role {
    url?: string | null,
    title : string,
    start: string,
    role: string,
    end: string
}

export default function ExperienceCard({url,title,role,start,end}:Role) {
    return <div className="experience-card">
        { url && <Image src={url} alt='img' width={100} height={100}  />}
        <p className='title'>{title}</p>
        <p className='p-light'>{role}</p>
        <p className='p-light p-tiny'>{start} -- {end}</p>
    </div>
}
  