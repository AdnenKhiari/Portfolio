import parse from 'html-react-parser';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { getDocFromFirestore, getPicUrl } from '@/app/utils'
import { useParams } from "next/navigation";
import { Project } from '../(components)/ProjectCard'
import Loading from '@/app/(sharedComponents)/TechStackIcons/loading'
import "./style.css"
import { motion } from 'framer-motion';
import { Metadata, ResolvingMetadata } from 'next';
import ProjectDetails from './(components)/ProjectDetails';
import { Timestamp } from 'firebase/firestore';


// export async function generateMetadata({ params }: any): Promise<Metadata> {
//   // read route params
//   const projectId = params.projectId
 
//   // fetch data
//   const data = await getDocFromFirestore("projects/"+projectId)
  
//   return {
//     title: data.titre,
//     description: data.description,
//    keywords: data.labels
//   }
// }
export async function generateMetadata({ params }: any): Promise<Metadata> {
  // read route params
  const projectId = params.projectId
 
  // fetch data
  const data = await getDocFromFirestore("projects/"+projectId)
  
  return {
    title: data.titre,
    description: data.description,
    keywords: data.labels
  }
}
export const revalidate = 60

export default async function ProjectView({params}: any)  {
  const projectId = params.projectId
  const data = await getDocFromFirestore("projects/"+projectId)
  const img = await getPicUrl("PROJECTS/"+data.url)

  data.projectDate = new Timestamp(data.projectDate.seconds,data.projectDate.nanoseconds).toDate()
  data.lastUpdateDate = new Timestamp(data.lastUpdateDate.seconds,data.lastUpdateDate.nanoseconds).toDate()

  return <ProjectDetails data={data} img={img} />

}
  