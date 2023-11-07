"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import "./style.css"
import { AnimatePresence, motion, stagger, useInView } from 'framer-motion';

const carouselCont ={
  initial:{
  opacity: 0
},
  animate: {opacity: 1 , 
  transition: {
    when: "beforeChildren",
    staggerChildren: 0.4,
  }
}}

const carouselVariant ={
  initial:{scale: 0},
  animate:  (index: number) => ({scale: 1  ,x: -4000, transition: {staggerChildren: 0.5,scale: {duration: 1}, duration: 10, ease: 'linear', repeat: 0 } }),
}

export default function TechStackIcons() {

  const [icons,setIcons] = useState(Array(6).fill(["/python.png",Math.random()*10000]))

  // const [icons,setIcons] = useState(["/python.png","/bg.png","/kaggle.png"])
  return (
    <AnimatePresence>
    <div className="icon-container">
      <motion.div
        variants={carouselCont}
        animate="animate"
        initial="initial"
        className="icon-list"
        >
        {icons.map((icon, index) => (
          <TechIcon setIcons={setIcons} icons={icons} key={icon[1]} index={index}/>
        ))}
      </motion.div>
    </div>
    </AnimatePresence>
  );
}

const TechIcon = ({icons,index,setIcons} : {icons : any[],index: number,setIcons: any})=>{
  const ref = useRef(null)
  const isInView = useInView(ref)
  const icon = icons[index][0]
  const [isAlreadyInView,setIsAlreadyInView] = useState(false)
  const key : number = icons[index][1] 
  console.log(icons.findIndex((p)=>p[1] == key))
  useEffect(() => {
    // console.log(index,isInView,isAlreadyInView)
    if(!isAlreadyInView){
      setIsAlreadyInView(isInView)
    }
    if(isAlreadyInView){
      if(!isInView){
        
        icons.splice(icons.findIndex((p)=>p[1] == key),0)
        icons.push([icon,Math.random()*10000])
        setIcons([...icons])
        console.log("Removed and added milikher")
      }
    }
  }, [isInView])

  return  <motion.div      
  className="icon"
  ref= {ref}
  custom={index}
  variants={carouselVariant}
  >

  <Image
    src={icon}
    width={100}
    height={100}
    alt={`Tech Icon`} />
  </motion.div> 
}
