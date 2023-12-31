"use client"
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import "./style.css"
import { Variants, motion } from 'framer-motion';


const container_v : Variants ={
    initial: {
      scale: 0.9,
    },
    animate : {
      scale: 1,
      transition : {
        staggerChildren: 0.2
      }
    }
}

const dot_v : Variants ={
  initial: {
    scale: 0
  },
  animate : {
    scale: 1,
    transition: {
      duration: 0.3
    }
  }
}
const reveal_v : Variants ={
  initial: {
    opacity: 0,
    x: "-20%"
  },
  animate : {
    opacity: 1,
    x: "0%"  
  }
}
const line_v : Variants ={
  initial: {
    scaleY: 0,
    transformOrigin: "top left"
  },
  animate : {
    scaleY: 1,
    transition: {
      duration: 1
    }
  }
}
export interface Experience{
  id: string,
  role: string,
  title: string,
  icon?: string,
  start: string,
  end?: string,
  description: string
}

export default function TimeLine({experiences} : {experiences: any}) {

  // const experiences : Experience[]  = [
  //   {
  //     id: "1",
  //     role: "Title 1 ",
  //     title: "random1",
  //     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam quaerat numquam reprehenderit debitis laborum eligendi aliquid ad eveniet perferendis ab, doloremque molestias harum corrupti ipsam quibusdam sunt in itaque!",
  //     start: "11 Janv 2011",
  //     end: "12 Fev 2065"
  //   },
  //   {
  //     id: "2",
  //     role: "Title 2 ",
  //     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam quaerat numquam reprehenderit debitis laborum eligendi aliquid ad eveniet perferendis ab, doloremque molestias harum corrupti ipsam quibusdam sunt in itaque!",
  //     start: "11 Janv 2011",
  //     end: "12 Fev 2065",
  //     title: "random1"
  //   },
  //   {
  //     id: "3",
  //     role: "Title 3",
  //     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam quaerat numquam reprehenderit debitis laborum eligendi aliquid ad eveniet perferendis ab, doloremque molestias harum corrupti ipsam quibusdam sunt in itaque!",
  //     start: "11 Janv 2011",
  //     title: "random1",
  //     end: "12 Fev 2065"
  //   }
  // ]
  const MotionTimeline = motion(Timeline)

  const MotionTimelineItem = motion(TimelineItem)
  const MotionTimelineOppositeContent= motion(TimelineOppositeContent)
  const MotionTimelineSeparator = motion(TimelineSeparator)
  const MotionTimelineDot = motion(TimelineDot)
  const MotionTimelineConnector= motion(TimelineConnector)
  const MotionTimelineContent= motion(TimelineContent)

  return (
    <MotionTimeline variants={container_v} viewport={{margin:"-50px"}}   whileInView="animate" initial="initial" className='timeline' position="alternate">
    {experiences.length > 0 && experiences.map((exp: any,index: number)=><MotionTimelineItem key={index}>
          <TimelineOppositeContent color="text.secondary">
          < motion.div variants={reveal_v}>{exp.start} <br /> {exp.end}</motion.div>  
          </TimelineOppositeContent>
          <MotionTimelineSeparator>
            <MotionTimelineDot variants={dot_v} />
            <MotionTimelineConnector variants={line_v} />
          </MotionTimelineSeparator>
          <MotionTimelineContent variants={reveal_v}>
            <Review role={exp.role} titre={exp.title} description={exp.description}/>
          </MotionTimelineContent>
        </MotionTimelineItem>
    )}
    </MotionTimeline>
  );
}

const Review = ({titre,role,description}: {titre: string,role: string,description: string[]})=>{
  return <div className='experience-review-container'>
    <h3>
      {role}<br/>
      <p className='subtitle'>{titre}</p>
      </h3>
    {description && description.map((e,index)=><p key={index} className="p-light">{e}</p>)}
  </div>
}