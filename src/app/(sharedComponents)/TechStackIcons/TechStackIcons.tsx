"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import "./style.css"
import { AnimatePresence, motion, stagger, useInView } from 'framer-motion';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getDownloadURL, getStorage, ref,listAll, ListResult } from 'firebase/storage'


const carouselVariant ={
  initial:{scale: 0,x: 150},
  animate:  (data: any) => ({scale: 1, transition: {scale: {duration: 1}, ease: 'linear', repeat: 0 } }),
}

function getOffset( el : any ) {
  let data = el.getBoundingClientRect()
  return data;
}



const getIcons =  async ()=>{
  const storage = getStorage()
  const rr = ref(storage,"/ICONS")
  const listprefixes : ListResult = await listAll(rr)
  const list  = await Promise.all(listprefixes.prefixes.map((prefix)=>{return listAll(ref(storage,prefix.fullPath))})).then((arr : ListResult[])=>{return  arr.map((i)=>i.items).flat(1)} )
 
  const images = Promise.all(  list.map((item)=>{
    return getDownloadURL(item)
  }))
  return await images
}

export default function TechStackIcons() {

  const [icons,setIcons]  = useState<[string,number][]>([])
  const [queue,setQueue]  = useState([])
  const window = useWindowDimensions()
  const [size,setSize] = useState<any>(null) 
  const [maxIcons,setMaxIcons] = useState(13)
  const ref = useRef(null)
 

  useEffect(()=>{
    console.log("W",window)
    setSize(getOffset(ref?.current))
    setMaxIcons(Math.floor((window.width ?? 0) / 140))

  },[window,ref])

  useEffect(()=>{
      // let arr = [] as any
      // for(let i = 0;i< 20;i++){
      //   arr.push([{url: "/python.png",name: "xD",categorie: "lel"},Math.random()*1000000])
      // }
      // setIcons(arr)
      getIcons().then((data)=>{
        let arr = [] as any
        for(let i = 0;i< data.length;i++){
          arr.push([{url: data[i],name: "xD",categorie: "lel"},Math.random()*1000000])
        }
        setIcons(arr)
      })
  },[])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: maxIcons,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  // const [icons,setIcons] = useState(["/python.png","/bg.png","/kaggle.png"])
  return (
    <div className="icon-container"         ref={ref}
    >

      <Carousel 
      
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={ true}
      autoPlaySpeed={3000}
      keyBoardControl={false}
      transitionDuration={500}
      containerClass="icon-list"
      deviceType={"desktop"}
      removeArrowOnDeviceType={["desktop"]}
      
>
        {icons && icons.filter((arr,index)=>index < icons.length/2).map((icon, index: number) => (
          <TechIcon icon={icon}  maxIcons={maxIcons} key={index} index={index}/>
        ))}
      </Carousel> 
      <Carousel 
      
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={ true}
      autoPlaySpeed={3000}
      keyBoardControl={false}
      transitionDuration={500}
      rtl	
      containerClass="icon-list"
      deviceType={"desktop"}
      removeArrowOnDeviceType={["desktop"]}
>
        {icons && icons.filter((arr,index)=>index >= icons.length/2).map((icon, index: number) => (
          <TechIcon icon={icon}  maxIcons={maxIcons} key={index} index={index}/>
        ))}
      </Carousel> 

    </div>
  );
}

const TechIcon = ({icon,maxIcons,index} : {icon:any,maxIcons:number,index: number})=>{
  return  <motion.div     
  className="icon"
  custom={{index,maxIcons}}
  variants={carouselVariant}
  >
  <Image
    src={icon[0]["url"]}
    width={100}
    height={100}
    alt={`Tech Icon`} />
  </motion.div> 
}


function getWindowDimensions() {
  if(window){
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }else{
    return {
      width: null,
      height: null
    };
  }

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
