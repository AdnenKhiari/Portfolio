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
import { motion } from 'framer-motion';


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

  const MotionTimelineItem = motion(TimelineItem)

  return (
    <Timeline className='timeline' position="alternate">
    {experiences.map((exp: any,index: number)=><MotionTimelineItem key={index}>
          <TimelineOppositeContent color="text.secondary">
            {exp.start} <br /> {exp.end}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Review role={exp.role} titre={exp.title} description={exp.description}/>
          </TimelineContent>
        </MotionTimelineItem>
    )}
    </Timeline>
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