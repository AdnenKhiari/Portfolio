
import React from "react";
import "./style.css"
import Info from "../(sharedComponents)/Info/Info";
import { getFromFirestore } from "../utils";
import ExperienceMain from "./(components)/ExperienceMain";
import { Metadata } from "next";
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Experience And Education'
}

export default async function AllExperience() {
  const experiences = await getFromFirestore("experiences","order")
  const education = await getFromFirestore("education","order")
  const certifications = await getFromFirestore("certifications","order")
  
    return (
      <React.Fragment>
          <ExperienceMain certifications={certifications} experiences={experiences} education ={education}></ExperienceMain>
          <Info></Info>
      </React.Fragment>
    )
  }
  