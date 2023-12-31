"use client"
import React, { useEffect, useState } from "react";
import ExperienceCard, { Role } from "../ExperienceCard";
import "../Experience/style.css"
import "./style.css"
import { getFromFirestore } from "@/app/utils";
import { Variants, motion } from "framer-motion";


const variants : Variants= {
  ani : {

    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1
    }
  }
}

export default function Education({description}: {description: any}) {

  // const data : Role[] = [
  // {
  //   title: "Titre 1",
  //   role: "Janen",
  //   start : "Jan 12",
  //   end: "Fev 2023"
  // },{
  //   title: "Titre 1",
  //   role: "Janen",
  //   start : "Jan 12",
  //   end: "Fev 2023"
  // },{
  //   title: "Titre 1",
  //   role: "Janen",
  //   start : "Jan 12",
  //   end: "Fev 2023"
  // },{

  //   title: "Titre 1",
  //   role: "Janen",
  //   start : "Jan 12",
  //   end: "Fev 2023"
  // }]

  const [experiences,setExperiences] = useState([])
  useEffect(()=>{
    getFromFirestore("education","order").then((d)=>setExperiences(d as any))
  },[])
    return (
      <div className="experience-container">
        <motion.h2 initial={{x: "-20%",opacity: 0.2}} viewport={{once: true}} whileInView={{opacity:1,x:"0%",transition: {delay: 0.1,duration: 0.5}}}>My education</motion.h2>
        <p className="p-light">{description}</p>
        {experiences.length > 0 && <motion.div variants={variants} viewport={{ once: true }}
 whileInView={"ani"}  initial="init" className="experience-card-container">{experiences.map((item: Role,index)=><ExperienceCard {...item} key={index} />)}</motion.div>}
      </div>
    )
  }
  