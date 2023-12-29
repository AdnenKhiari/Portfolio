import React from "react";
import ExperienceCard, { Role } from "../ExperienceCard";
import "../Experience/style.css"
import "./style.css"
export default function Education({description}: {description: any}) {

  const data : Role[] = [
  {
    title: "Titre 1",
    role: "Janen",
    start : "Jan 12",
    end: "Fev 2023"
  },{
    title: "Titre 1",
    role: "Janen",
    start : "Jan 12",
    end: "Fev 2023"
  },{
    title: "Titre 1",
    role: "Janen",
    start : "Jan 12",
    end: "Fev 2023"
  },{

    title: "Titre 1",
    role: "Janen",
    start : "Jan 12",
    end: "Fev 2023"
  }]

    return (
      <div className="experience-container">
        <h2>My education</h2>
        <p className="p-light">{description}</p>
        <div className="experience-card-container">{data.map((item,index)=><ExperienceCard {...item} key={index} />)}</div>
      </div>
    )
  }
  