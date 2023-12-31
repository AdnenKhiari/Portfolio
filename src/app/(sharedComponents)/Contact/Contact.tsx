"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import "./style.css"
import { getFromFirestore } from '@/app/utils'
import { motion } from 'framer-motion'
import Loading from '../TechStackIcons/loading'
export default function ContactUs() {
  const [info,setData] = useState<any>(null)

    useEffect(()=>{
      getFromFirestore("info").then((d)=>{
          setData(d[0] as any)
      })
  },[])

  if(!info)
    return <p>Loading...</p>

    return <section id="contact">
      <motion.h3
              viewport={{once:true}}

      initial={{opacity: 0}} whileInView={{opacity:1,transition: {delay: 0.1,duration: 1}}}>Want to get in touch? <br />
      Drop me a line!</motion.h3>
      {info && <motion.p 

viewport={{once:true}}

      
      initial={{opacity: 0,y:"40%"}} whileInView={{opacity:1,y: "0%",transition: {delay: 1,duration: 0.5}}} className="p-light">{info.sections.contact.text}</motion.p>}
      <form className='contact-form' method="post" action={"mailto:"+info.sections.contact.mail+"?subject=PortfolioInquery"}>
      <div className='form-header'>
        <div className="input-group">
            <label htmlFor="name">Name</label>
            <motion.input
            viewport={{once:true}}

            initial={{opacity: 0.5,scaleX:"0%"}} whileInView={{opacity:1,scaleX: "100%",transition: {delay: 2,duration: 0.5}}} 
            
            placeholder='Your Name :)' name="name" type="name" id="name" />
          </div>
      </div>
      <div className="input-group">
        <label htmlFor="form-text">Description</label>
        <motion.textarea
        viewport={{once:true}}
                    initial={{opacity: 0.5,scaleY:"0%"}}  
                    whileInView={{opacity:1,scaleY: "100%",transition: {delay: 2.2,duration: 0.5}}} 

        
        placeholder='Enter Text !' name="form-text" id="form-text" cols={30} rows={9}></motion.textarea>
      </div>
      <button type='submit' >SUBMIT</button>
      </form>
    </section>
  }
  