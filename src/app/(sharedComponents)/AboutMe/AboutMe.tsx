import Image from 'next/image'
import React from 'react'
import "./about.css"

export default function AboutMe() {
    return <article className='about-me'>
        <div className='bg-about'>
            <p>Adnen Khiari</p>
            <p className='p-light'>Data Scientist | Software Egineering Student</p>
            <h1 className='display-big'>Hey there! <br /> Lorem Ipsum Dolor Di Amette</h1>
        </div>
    </article>
}