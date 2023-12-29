import React from "react";
import ExperienceCard, { Role } from "../ExperienceCard";
import "./style.css"
export default function Experience({description} : {description: any}) {

  const data : Role[] = [
    {
    url: "https://picsum.photos/150",
    title: "Titre 1",
    role: "Janen",
    start : "Jan 12",
    end: "Fev 2023"
  },{
    url: "https://picsum.photos/150",
    title: "Titre 1",
    role: "Janen",
    start : "Jan 12",
    end: "Fev 2023"
  },{
    url: "https://picsum.photos/150",
    title: "Titre 1",
    role: "Janen",
    start : "Jan 12",
    end: "Fev 2023"
  },{
    url: "https://picsum.photos/150",
    title: "Titre 1",
    role: "Janen",
    start : "Jan 12",
    end: "Fev 2023"
  },{
    url: "https://picsum.photos/150",
    title: "Titre 1",
    role: "Janen",
    start : "Jan 12",
    end: "Fev 2023"
  },{
    url: "https://picsum.photos/150",
    title: "Titre 1",
    role: "Janen",
    start : "Jan 12",
    end: "Fev 2023"
  },{
    url: "https://picsum.photos/150",
    title: "Titre 1",
    role: "Janen",
    start : "Jan 12",
    end: "Fev 2023"
  },{
    url: "https://picsum.photos/150",
    title: "Titre 1",
    role: "Janen",
    start : "Jan 12",
    end: "Fev 2023"
  }]

    return (
      <div className="experience-container">
        <h2>My experience</h2>
        <p className="p-light">{description}</p>
        <div className="experience-card-container">{data.map((item,index)=><ExperienceCard {...item} key={index} />)}</div>
      </div>
    )
  }
  