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
        <ProjectInstance type="big" />
      </div>
      <div className="small">
        <hr className="hr90" />
        <ProjectInstance type="small" />
      </div>
    </div>
    <hr />
    <br />
    <div className="projects-list-row">
      <div>
        <ProjectInstance type="small" />
      </div>
      <div className="small">
        <hr className="hr90" />
        <ProjectInstance type="big" />
      </div>
    </div>
    <Info/>

  </section>
}
function ProjectInstance({type}: {type: "small" | "big"}){
  return <div className="project-instance">
      <Image className={(type === "small" ? "small" : "")} src={"https://picsum.photos/600/600"} alt="lel" width={type === "small" ? 400 : 500} height={type === "small" ?  200 : 350}/>
      <div>
        <p className={"p-light " }>Type du projet</p>
        <h1 className={(type === "small" ? "small display-small" : " display-medium ")}>Titre 1 du project SMARK de L'articualtion de greffe</h1>
      </div>
      <div>
        <Link href={"/"}>Read More...</Link>
        {/* Double arrow link  + better bottom margin  */}
      </div>
  </div>
}