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


export interface Experience{
  id: string,
  title: string,
  company: string,
  companyImg?: string,
  startDate: string,
  endDate?: string,
  description: string
}

export default function TimeLine() {

  const experiences : Experience[]  = [
    {
      id: "1",
      title: "Title 1 ",
      company: "random1",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam quaerat numquam reprehenderit debitis laborum eligendi aliquid ad eveniet perferendis ab, doloremque molestias harum corrupti ipsam quibusdam sunt in itaque!",
      startDate: "11 Janv 2011",
      endDate: "12 Fev 2065"
    },
    {
      id: "2",
      title: "Title 2 ",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam quaerat numquam reprehenderit debitis laborum eligendi aliquid ad eveniet perferendis ab, doloremque molestias harum corrupti ipsam quibusdam sunt in itaque!",
      startDate: "11 Janv 2011",
      endDate: "12 Fev 2065",
      company: "random1"
    },
    {
      id: "3",
      title: "Title 3",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam quaerat numquam reprehenderit debitis laborum eligendi aliquid ad eveniet perferendis ab, doloremque molestias harum corrupti ipsam quibusdam sunt in itaque!",
      startDate: "11 Janv 2011",
      company: "random1",

      endDate: "12 Fev 2065"
    }
  ]

  return (
    <Timeline className='timeline' position="alternate">
    {experiences.map((exp,index)=><React.Fragment key={index}>
      <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            {exp.startDate} <br /> {exp.endDate}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Review titre={exp.title} description={exp.description}/>
          </TimelineContent>
        </TimelineItem>
    </React.Fragment>)}
    </Timeline>
  );
}

const Review = ({titre,description}: {titre: string,description: string})=>{
  return <div className='experience-review-container'>
    <h3>{titre}</h3>
    <p className="p-light">{description}</p>
  </div>
}