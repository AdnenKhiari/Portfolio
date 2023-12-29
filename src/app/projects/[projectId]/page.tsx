
'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import "./style.css"
import { getDocFromFirestore, getPicUrl } from '@/app/utils'
import { useParams } from "next/navigation";
import { Project } from '../(components)/ProjectCard'
import ReactLoading from 'react-loading'

export default function ProjectView() {

  const params = useParams();
  const { projectId } = params as any


  // const data : Project = {
  //   id: 1,
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quisquam est provident a rem optio iste ipsum harum tempore sequi necessitatibus ratione culpa delectus praesentium voluptas placeat aliquam ex nobis.",
  //   longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quisquam est provident a rem optio iste ipsum harum tempore sequi necessitatibus ratione culpa delectus praesentium voluptas placeat aliquam ex nobis.",
  //   titre: "Projet 1",
  //   type: "big",
  //   categorie: "ML",
  //   url: "https://picsum.photos/1920/1080",
  //   insertionDate: new Date(),
  //   lastUpdateDate: new Date(),
  //   projectDate: new Date(),
  //   labels: ["Data","W&B","Support Vector Machine","EDA"]
  // }

  const [data,setData] = useState<Project | null>(null)
  const [img,setImage] = useState<string | null>(null)

  useEffect(()=>{
    getDocFromFirestore("projects/"+projectId).then((d)=>setData(d))
  },[projectId])
  useEffect(()=>{
    if(data)
    getPicUrl("PROJECTS/"+data.url).then((d)=>setImage(d as string))
  },[data])
  console.log(data)

    if(data)
    return <section className="project-instance">
      <div className="project-instance-details">
        <h1 className='display-big'>{data.titre}</h1>
        <p className='p-light'>{data.description}</p>
      </div>
      <div className="img-container">
       { img && <Image src={img} fill  alt='img' />}
      </div>
      <div className="project-header">
      <div style={{display: "flex",width: "100%",justifyContent: "space-between"}}>
        <p className="p-light">{data.projectDate && data.projectDate.toDate().toISOString()}</p>
        <div className="label-container">
          {data.labels?.map((label,key)=><p className="label" key={key}>{label}</p>)}
        </div>
      </div>
      </div>
      <article>

      <p className="p-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta culpa doloribus, in laborum, assumenda vero numquam incidunt ea nulla non ipsam fugit minus quos sunt magni impedit vitae at?</p>
      <h2>Title 2 : </h2>
      <ul>
        <li>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem fugit repudiandae. Laudantium, nihil. Quia officia quis iste dolor. Similique esse rem autem aspernatur quae cumque repellat velit maiores nemo.</div>
          </li>
          <li>
<div>Nisi, aut sunt adipisci repudiandae culpa ipsum placeat asperiores sapiente aperiam laboriosam! Praesentium blanditiis, commodi fugiat assumenda officiis reiciendis numquam exercitationem hic animi quidem quaerat veritatis itaque natus delectus iusto?</div>
</li>
<li>
<div>Dolores, eius. Quidem quod et, quos quia possimus, illo eum nisi minus vel quasi necessitatibus iste at ad quibusdam accusantium vitae ipsum! A distinctio cupiditate laudantium, ipsa officia quos explicabo.</div>
</li>
<li>
 <div>Minima voluptas veritatis voluptatum ullam consequuntur molestias ipsam vitae quisquam corporis officia excepturi iure nam officiis qui est, dolores nobis culpa autem, non porro fugiat? Voluptates modi veniam impedit accusantium.</div>
 </li>
 <li>
<div>Odit excepturi ipsa reiciendis quidem aperiam accusantium modi ducimus eos beatae reprehenderit possimus nesciunt quod minima, pariatur totam iste eaque vero, est quasi aliquid quis! Eius explicabo porro optio placeat?</div>
</li>
    </ul>
      <p className="p-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta culpa doloribus, in laborum, assumenda vero numquam incidunt ea nulla non ipsam fugit minus quos sunt magni impedit vitae at?</p>

      <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eaque perspiciatis temporibus dignissimos ratione ut aut doloremque laborum culpa nulla voluptatem corrupti saepe incidunt, delectus debitis atque, quis labore reiciendis?</blockquote>
      <p className="p-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta culpa doloribus, in laborum, assumenda vero numquam incidunt ea nulla non ipsam fugit minus quos sunt magni impedit vitae at?</p>

      </article>
    </section> 
    
    
    return     <ReactLoading className='loader' type={"spinningBubbles"} color={"black"} height={'50%'} width={'100vw'} />

  }
  