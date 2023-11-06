"use client"

import React from "react"
import ProjectCard, { Project } from "./ProjectCard"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./projectcad.css"
import { useSpring } from "framer-motion"

export default function LatestProjects() {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);
    const data : Project[] = [
        {
        id: 1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quisquam est provident a rem optio iste ipsum harum tempore sequi necessitatibus ratione culpa delectus praesentium voluptas placeat aliquam ex nobis.",
        titre: "Projet 1",
        type: "big",
        url: "https://picsum.photos/600/300", 
    },
    {
        id: 2,
        description: "Quibusdam, quisquam est provident a rem optio iste ipsum harum tempore sequi necessitatibus ratione culpa delectus praesentium voluptas placeat aliquam ex nobis.",
        titre: "Projet 2",
        type: "small",
        url: "https://picsum.photos/600/300", 
    },
    {
        id: 3,
        description: "Quibusdam, quisquam est provident a rem optio iste ipsum harum tempore sequi necessitatibus ratione culpa delectus praesentium voluptas placeat aliquam ex nobis.",
        titre: "Projet 2",
        type: "big",
        url: "https://picsum.photos/600/300", 
    }]

    return <section ref={targetRef} className="project-card-parent">
        <div className="project-card-sticky">
            <h1>Latest Projects</h1>
            <motion.div  style={{x: x}} className="project-card-container">
                {data.map((item,index)=><ProjectCard {...item} key={index} />)}
            </motion.div>
        </div>
    </section>
}