"use client"
import Image from 'next/image'
import React from 'react'
import "./about.css"
import { motion } from 'framer-motion'
import TechStackIcons from '../TechStackIcons/TechStackIcons'

export default function AboutMe({details}: {details: any}) {
    return <article className='about-me'>
        <div className='bg-about'>
            <motion.p initial={{x: "-10%",opacity: 0}} animate={{x:"  0%",opacity: 1,transition: {duration: 0.3,delay: 1}}}>{details.title}</motion.p>
            <motion.p initial={{x: "-10%",opacity: 0}} animate={{x:"  0%",opacity: 1,transition: {duration: 0.3,delay: 1}}} className='p-light'>{details.secondary}</motion.p>
            <h1 className='display-big'>{details.main_headline} <br /> {details.secondary_headline}</h1>
        </div>

        <TechStackIcons ></TechStackIcons>
    </article>
}