"use client"
import Link from "next/link";
import Image from "next/image"
import "../style.css"
import React from "react";
import { getPicUrl } from "@/app/utils";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const container = {
  show: {
      transition: {
        staggerChildren: 0.4
      }
  }
}
const reveal_left = {
  hidden: {
    x: "-40%",
    opacity: 0
  },
  show: {
    x: "0%",
    opacity: 1
  }
}
const reveal_right = {
  hidden: {
    x: "40%",
    opacity: 0
  },
  show: {
    x: "0%",
    opacity: 1

  }
}
export default function ProjectGrid({projects} : { projects: any[]}) {

  const router = useRouter()
  return <React.Fragment>
        <motion.h1
        viewport={{once: true}}
        initial={{opacity: 0,scale: 0}} whileInView={{opacity:1,scale:1,transition: {delay: 1.3,duration: 0.6}}}
        className="display-big">Projects</motion.h1>
        <motion.div variants={container} whileInView="show" initial="hidden">
                {projects.length > 0 && projects.map((pair,index:number)=>{

          const arr : ["big","small"] = ["big","small"]
          return <React.Fragment key={index}>
                      <span></span>
          <div className="projects-list-row">

  {           pair && pair.length > 0 &&  <div>
                <motion.div variants={reveal_left}  onClick={()=>router.push(`/projects/${pair[0].id}`, { scroll: true })}>
                <ProjectInstance id={pair[0].id} image={pair[0].url} title={pair[0].titre} categorie={pair[0].categorie} type={arr[index % 2]} />
                </motion.div>
              </div>}
  {            pair && pair.length > 1 &&  <div className="small">
                <hr className="hr90" />
                <motion.div variants={reveal_right}   onClick={()=>router.push(`/projects/${pair[1].id}`, { scroll: true })}>
                <ProjectInstance  id={pair[1].id} image={pair[1].url} title={pair[1].titre} categorie={pair[1].categorie}  type={arr[1 - index % 2]} />
                </motion.div>
              </div>}
            </div>
            <hr />
            </React.Fragment>
        })  }  
        </motion.div >

  </React.Fragment> 
}
async function  ProjectInstance({type,categorie,title,image,id}: {type: "small" | "big",categorie: string,title: string,image: string,id: string}){
  const iconUrl = image ? await getPicUrl("PROJECTS/"+image) : null

  
  return <div className="project-instance">
      <div className={(type === "small" ? "small" : "") + " img-container"}>
      {iconUrl && <Image  src={iconUrl} alt="lel" width={type === "small" ? 400 : 500} height={type === "small" ?  200 : 350}/>}

      </div>
      <div>
        <p className={"p-light " }>{categorie}</p>
        <h1 className={(type === "small" ? "small display-small" : " display-medium ")}>{title}</h1>
      </div>
      <div className="link">
        <Link href={"/projects/"+id}>Read More </Link>
        <Image width={25} height={25} src="/right-arrow.png" alt="" />
        {/* Double arrow link  + better bottom margin  */}
      </div>
  </div>
}