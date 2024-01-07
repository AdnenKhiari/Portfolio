"use client"

import React, { useEffect, useState } from "react"
import ProjectCard, { Project } from "./ProjectCard"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./projectcad.css"
import { useSpring } from "framer-motion"
import { getFromFirestore } from "@/app/utils";
import useWindowDimensions from "@/app/(sharedComponents)/TechStackIcons/useWindow";

export default function LatestProjects() {
    
    const window = useWindowDimensions()
    const targetRef = useRef(null);
    const [data,setData] = useState<Project[]>([])
    const { scrollYProgress } = useScroll({
      target: targetRef
    });
    const mtx = useTransform(scrollYProgress, [0, 1], [1,-1200]);
    const x = useSpring(mtx,{damping: 10})

    useEffect(()=>{
        getFromFirestore("projects","order").then((d)=>{
            console.log(d)
            setData(d.slice(0,3) as Project[])
        })
    },[])

    // const data : Project[] = [
    //     {
    //     id: 1,
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quisquam est provident a rem optio iste ipsum harum tempore sequi necessitatibus ratione culpa delectus praesentium voluptas placeat aliquam ex nobis.",
    //     titre: "Projet 1",
    //     type: "big",
    //     url: "https://picsum.photos/600/300", 
    //     categorie: "Cat1",
    //     labels: [],
    //     insertionDate: new Date(),
    //     projectDate: new Date(),
    //     lastUpdateDate: new Date(),
    //     content: "",
    //     longDescription: "dzd"
    // },
    // {
    //     id: 2,
    //     description: "Quibusdam, quisquam est provident a rem optio iste ipsum harum tempore sequi necessitatibus ratione culpa delectus praesentium voluptas placeat aliquam ex nobis.",
    //     titre: "Projet 2",
    //     type: "small",
    //     url: "https://picsum.photos/600/300", 
    //     categorie: "Cat1",
    //     labels: [],
    //     insertionDate: new Date(),
    //     projectDate: new Date(),
    //     lastUpdateDate: new Date(),
    //     content: "",
    //     longDescription: "dzd"
    // },
    // {
    //     id: 3,
    //     description: "Quibusdam, quisquam est provident a rem optio iste ipsum harum tempore sequi necessitatibus ratione culpa delectus praesentium voluptas placeat aliquam ex nobis.",
    //     titre: "Projet 2",
    //     type: "big",
    //     url: "https://picsum.photos/600/300", 
    //     categorie: "Cat1",
    //     labels: [],
    //     insertionDate: new Date(),
    //     projectDate: new Date(),
    //     lastUpdateDate: new Date(),
    //     content: "",
    //     longDescription: "dzd"
    // }]

    return <section ref={targetRef} className="project-card-parent">
        <div className="project-card-sticky">
            <motion.h1 initial={{x: "-20%",opacity: 0.2}} viewport={{margin:"-50px"}} whileInView={{opacity:1,x:"0%",transition: {delay: 0.1,duration: 0.5}}}>Latest Projects</motion.h1>
            <motion.div  style={ window.width && window.width > 1200 ? {x: x} : {}} className="project-card-container">
                {data && data.map((item,index)=><ProjectCard {...item} key={index} />)}
            </motion.div>
        </div>
    </section>
}