import Image from 'next/image'
import React from 'react'
import "./about.css"
import { motion } from 'framer-motion'

export default function AboutMe() {
    return <article className='about-me'>
        <div className='bg-about'>
            <motion.p initial={{x: "-10%",opacity: 0}} animate={{x:"  0%",opacity: 1,transition: {duration: 0.3,delay: 1}}}>Adnen Khiari</motion.p>
            <motion.p initial={{x: "-10%",opacity: 0}} animate={{x:"  0%",opacity: 1,transition: {duration: 0.3,delay: 1}}} className='p-light'>Data Scientist | Software Egineering Student</motion.p>
            <h1 className='display-big'>Hey there! <br /> Lorem Ipsum Dolor Di Amette</h1>
        </div>
    </article>
}