import Link from "next/link";
import Image from "next/image"
import "./style.css"
import Info from "../(sharedComponents)/Info/Info";
export default function Projects() {
  return <section className="projects-list-container">
    <h1 className="display-big">Projects</h1>
  <br />
    <div className="projects-list-row">
      <div>
        <ProjectInstance id="1" image="https://picsum.photos/600/600" title="Titre du projet Numero id" categorie="Type de projet" type="big" />
      </div>
      <div className="small">
        <hr className="hr90" />
        <ProjectInstance id="2" image="https://picsum.photos/600/600" title="Titre du projet Numero id" categorie="Type de projet" type="small" />
      </div>
    </div>
    <hr />
    <br />
    <div className="projects-list-row">
      <div>
      <ProjectInstance id="3" image="https://picsum.photos/600/600" title="Titre du projet Numero id" categorie="Type de projet" type="small" />
      </div>
      <div className="small">
        <hr className="hr90" />
        <ProjectInstance id="4" image="https://picsum.photos/600/600" title="Titre du projet Numero id" categorie="Type de projet" type="big" />
      </div>
    </div>
    <Info/>

  </section>
}
function ProjectInstance({type,categorie,title,image,id}: {type: "small" | "big",categorie: string,title: string,image: string,id: string}){
  return <div className="project-instance">
      <div className={(type === "small" ? "small" : "") + " img-container"}>
      <Image  src={image} alt="lel" width={type === "small" ? 400 : 500} height={type === "small" ?  200 : 350}/>

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