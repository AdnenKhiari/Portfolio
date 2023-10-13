import React from "react";
import ExperienceCard, { Role } from "../ExperienceCard";
import "./style.css"
export default function Experience() {

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
        <p className="p-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus animi error explicabo veritatis. Suscipit quidem veniam obcaecati optio molestiae quisquam eligendi? Dolorem ad eveniet optio repellat fuga illum tenetur officiis.</p>
        <div className="experience-card-container">{data.map((item,index)=><ExperienceCard {...item} key={index} />)}</div>
      </div>
    )
  }
  