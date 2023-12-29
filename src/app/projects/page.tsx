import Link from "next/link";
import Image from "next/image"
import "./style.css"
import Info from "../(sharedComponents)/Info/Info";
import { getFromFirestore, getPicUrl } from "../utils";
import React from "react";
import { Project } from "./(components)/ProjectCard";

function groupSuccessivePairs(array: Project[]) {
  let groupedArray = [];
  
  for (let i = 0; i < array.length; i += 2) {
    groupedArray.push(array.slice(i, i + 2));
  }
  
  return groupedArray;
}
export default async function Projects() {

  const data = (await getFromFirestore("projects","order")) as Project[]

  const projects = groupSuccessivePairs(data)

  return <section className="projects-list-container">
    <h1 className="display-big">Projects</h1>
      {  projects.map((pair,index:number)=>{
          return <React.Fragment key={index}>
          <br />
          <div className="projects-list-row">
{           pair && pair.length > 0 &&  <div>
              <ProjectInstance id={pair[0].id} image={pair[0].url} title={pair[0].titre} categorie={pair[0].categorie} type="big" />
            </div>}
{            pair && pair.length > 1 &&  <div className="small">
              <hr className="hr90" />
              <ProjectInstance id={pair[1].id} image={pair[1].url} title={pair[1].titre} categorie={pair[1].categorie}  type="small" />
            </div>}
          </div>
          <hr />
          </React.Fragment>
      })  }
    <Info/>

  </section>
}
async function  ProjectInstance({type,categorie,title,image,id}: {type: "small" | "big",categorie: string,title: string,image: string,id: string}){
  const iconUrl = image ? await getPicUrl("PROJECTS/"+image) : null

  
  return <div className="project-instance">
      <div className={(type === "small" ? "small" : "") + " img-container"}>
      {iconUrl && <Image  src={iconUrl} alt="lel" width={type === "small" ? 400 : 500} height={type === "small" ?  200 : 350}/>}

      </div>
      <div>
        <p className={"p-light " }>{categorie}</p>
        <h1 className={(type === "small" ? "small display-small" : " display-medium ")}>{title} 1 du project SMARK de L'articualtion de greffe</h1>
      </div>
      <div className="link">
        <Link href={"/projects/"+id}>Read More </Link>
        <Image width={25} height={25} src="/right-arrow.png" alt="" />
        {/* Double arrow link  + better bottom margin  */}
      </div>
  </div>
}