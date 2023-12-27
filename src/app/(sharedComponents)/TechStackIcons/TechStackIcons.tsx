"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import "./style.css"
import { AnimatePresence, motion, stagger, useInView } from 'framer-motion';

const carouselCont ={
  initial:{
  opacity: 0
},
  animate: {opacity: 1}}

const carouselVariant ={
  initial:{scale: 0,x: 150},
  animate:  (data: any) => ({scale: 1  ,x: -4000, transition: {scale: {duration: 1}, delay: Math.max((data.maxIcons-(data.index+1))*0.735,0), duration: 20, ease: 'linear', repeat: 0 } }),
}

export default function TechStackIcons() {

  const [icons,setIcons]  = useState<[string,number][]>([])
  const [queue,setQueue]  = useState([])
  const window = useWindowDimensions()

  const [maxIcons,setMaxIcons] = useState(13)
  
  useEffect(()=>{
    console.log(window)
    setMaxIcons(Math.floor(window.width / 140))
  },[window])

  useEffect(()=>{ 
    let diff = maxIcons-icons.length
    // console.log("NEW QUEUE ITEM",queue,icons,diff)
    if( diff>0 && queue.length>0  ) {
      for(let counter = 0;counter < diff && queue.length > 0;counter++){
        let newItem = queue.at(0 ) 
        icons.push(newItem as never)
        queue.splice(0,1)    
        // console.log("ITER",counter,queue,icons  )
      }
  
      setIcons([...icons])
      setQueue([...queue])
      console.log("ICONS",icons)
      console.log("Q",queue)
    }
  },[queue,icons])

  useEffect(()=>{
      let arr = [] as any
      for(let i = 0;i< 20;i++){
        arr.push(["/python.png",Math.random()*1000000])
      }
      setQueue(arr)

      // setIcons([...icons])  
      // console.log("INIT QUEUE ITEM",queue)
      // console.log("INIT ICONS ITEM",icons)

  },[])
  const ref = useRef(null)

  // const [icons,setIcons] = useState(["/python.png","/bg.png","/kaggle.png"])
  return (
    <div className="icon-container"         ref={ref}
    >
      <motion.div
        variants={carouselCont}
        animate="animate"
        initial="initial"
        className="icon-list"
        >
        {icons && icons.map((icon, index: number) => (
          <TechIcon maxIcons={maxIcons} container={ref} setQueue={setQueue} queue={queue} setIcons={setIcons} icons={icons} key={icon[1]} index={index}/>
        ))}
      </motion.div>
    </div>
  );
}

const TechIcon = ({maxIcons,container,queue,setQueue,icons,index,setIcons} : {maxIcons:number,container:any,setQueue:any,queue: any ,icons : any[],index: number,setIcons: any})=>{
  const ref = useRef(null)
  const isInView = useInView(ref,{root: container})
  const icon = icons[index][0]
  const [isAlreadyInView,setIsAlreadyInView] = useState(isInView)
  const key : number = icons[index][1] 
  // console.log(icons.findIndex((p)=>p[1] == key))
  useEffect(() => {
    // console.log(index,isInView,isAlreadyInView)
    if(!isAlreadyInView){
      setIsAlreadyInView(isInView)
    }
    if(isAlreadyInView){
      if(!isInView){
        
        icons.splice(icons.findIndex((p)=>p[1] == key),1)
        queue.push([icon,Math.random()*1000000])
        // icons.push()
        setQueue([...queue])
        setIcons([...icons])
        console.log("Removed and added milikher")
      }
    }
  }, [isInView])

  return  <motion.div      
  className="icon"
  ref= {ref}
  custom={{index,maxIcons}}
  variants={carouselVariant}
  >

  <Image
    src={icon}
    width={100}
    height={100}
    alt={`Tech Icon`} />
  </motion.div> 
}


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}