"use client"
import React from "react";
import { motion } from "framer-motion";
import TimeLine from "./Timeline/Timeline";

export default function AllExperience({experiences,education,certifications} :  {experiences: any,education: any,certifications: any} ) {
      return (
        <React.Fragment>
            <div className="education-exp-container">
              <motion.h1 initial={{x: "20%",opacity: 0}} viewport={{margin:"-50px"}}  whileInView={{opacity:1,x:"0%",transition: {delay: 0.5,duration: 0.5}}} className="display-big">Certifications</motion.h1>
              { education && <TimeLine experiences={certifications} />}
            </div>
            <div className="education-exp-container">
              <motion.h1 initial={{x: "-20%",opacity: 0}} viewport={{margin:"-50px"}}  whileInView={{opacity:1,x:"0%",transition: {duration: 0.5}}} className="display-big">Experiences</motion.h1>
              { experiences && <TimeLine experiences={experiences} />}
            </div>
            <div className="education-exp-container">
              <motion.h1 initial={{x: "20%",opacity: 0}} viewport={{margin:"-50px"}}  whileInView={{opacity:1,x:"0%",transition: {delay: 0.5,duration: 0.5}}} className="display-big">Education</motion.h1>
              { education && <TimeLine experiences={education} />}
            </div>
        </React.Fragment>
      )
    }
    