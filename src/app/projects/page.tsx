import "./style.css"
import Info from "../(sharedComponents)/Info/Info";
import React from "react";
import ProjectGrid from "./(components)/ProjectGrid";
import { getFromFirestore } from "../utils";
import { Project } from "./(components)/ProjectCard";
import { Metadata } from "next";
import ScrollUp from "./ScrollUp";
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Projects'
}


function groupSuccessivePairs(array: Project[]) {
  let groupedArray = [];
  
  for (let i = 0; i < array.length; i += 2) {
    groupedArray.push(array.slice(i, i + 2));
  }
  
  return groupedArray;
}

export default async function Projects() {

  const data = (await getFromFirestore("projects","order")) as Project[]

  const projects = groupSuccessivePairs((data.concat([])).map((d)=>({
    url: d.url,
    id: d.id,
    titre: d.titre,
    categorie: d.categorie,
  } as any)))

  return <section className="projects-list-container">
      <ScrollUp x={0} y={0}/>
      <ProjectGrid projects={projects}></ProjectGrid>
    <Info/>
  </section>
}