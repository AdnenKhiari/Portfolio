import React from "react"
import ProjectCard, { Project } from "./ProjectCard"

export default function LatestProjects() {
    const data : Project[] = [
        {
        id: 1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quisquam est provident a rem optio iste ipsum harum tempore sequi necessitatibus ratione culpa delectus praesentium voluptas placeat aliquam ex nobis.",
        titre: "Projet 1",
        type: "big",
        url: "https://picsum.photos/600/300", 
    },
    {
        id: 2,
        description: "Quibusdam, quisquam est provident a rem optio iste ipsum harum tempore sequi necessitatibus ratione culpa delectus praesentium voluptas placeat aliquam ex nobis.",
        titre: "Projet 2",
        type: "small",
        url: "https://picsum.photos/600/300", 
    }]
    return <React.Fragment>
        <h1>Latest Projects</h1>
        <div className="project-card-container">
        {data.map((item,index)=><ProjectCard {...item} key={index} />)}
        </div>
    </React.Fragment>
}