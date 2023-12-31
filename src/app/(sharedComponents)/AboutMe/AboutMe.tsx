"use client"
import Image from 'next/image'
import React from 'react'
import "./about.css"
import { delay, motion } from 'framer-motion'
import TechStackIcons from '../TechStackIcons/TechStackIcons'

const container = {
    hidden: { },
    show: {
    }
}
const container_2 = {
    hidden: { },
    show: {
        transition: {
            staggerChildren: 1
        }
    }
}
const item = {
    hidden:{
        x: "-10%",
        opacity: 0
    }, 
    show:{
        x: "0%",
        opacity: 1,
        transition: {duration: 0.3,delay: 2}
    }
}

const item_2 = {
    hidden:{
        x: "-10%",
        opacity: 0
    }, 
    show:{
        x: "0%",
        opacity: 1,
        transition: {duration: 0.3}
    }
}
export default function AboutMe({details}: {details: any}) {
    return <motion.article     
    variants={container}
    initial="hidden"
    animate="show"
     className='about-me'>
        <div className='bg-about'>
            <motion.p variants={item} >{details.title}</motion.p>
            <motion.p variants={item} className='p-light'>{details.secondary}</motion.p>
            <motion.h1 variants={container_2} className='display-big'><motion.span variants={item_2}>{details.main_headline}</motion.span> <br /> <motion.span variants={item_2}>{details.secondary_headline}</motion.span></motion.h1>
        </div>
        <TechStackIcons ></TechStackIcons>
    </motion.article>
}