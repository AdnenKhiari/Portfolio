import Image from 'next/image'
import React from 'react'
import "./Experience/style.css"
import { getPicUrl } from '@/app/utils'

export interface Role {
    icon?: string | null,
    title : string,
    start: string,
    role: string,
    end: string
}

export default  async function ExperienceCard(exp:Role) {
    const iconUrl = exp.icon ? await getPicUrl("EXPERIENCE/"+exp.icon) : null

    return <div className="experience-card">
        { iconUrl && <Image src={iconUrl} alt='img' width={100} height={100}  />}
        <p className='title' style={{fontWeight: "600"}}>{exp.role}</p>
        <p className='p-light' style={{fontWeight: "500"}}  >{exp.title}</p>
        <p className='p-light p-tiny' style={{fontWeight: "500",fontStyle: "italic"}}>{exp.start}{ exp.end &&  (" -- " + exp.end)}</p>
    </div>
}
  