
import React from "react";
import "./style.css"
import Info from "../(sharedComponents)/Info/Info";
import { getFromFirestore } from "../utils";
import ExperienceMain from "./(components)/ExperienceMain";

export default async function AllExperience() {
  const experiences = await getFromFirestore("experiences","order")
  const education = await getFromFirestore("education","order")
  
    return (
      <React.Fragment>
          <ExperienceMain experiences={experiences} education ={education}></ExperienceMain>
          <Info></Info>
      </React.Fragment>
    )
  }
  