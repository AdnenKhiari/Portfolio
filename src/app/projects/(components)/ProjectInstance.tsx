import Link from "next/link";
import Image from "next/image"
import { getPicUrl } from "@/app/utils";

export const revalidate = 60
export default async function  ProjectInstance({type,categorie,title,image,id}: {type: "small" | "big",categorie: string,title: string,image: string,id: string}){
  const iconUrl = image ? await getPicUrl("PROJECTS/"+image) : null

  
  return <div className="project-instance">
      <div className={(type === "small" ? "small" : "") + " img-container"}>
      {iconUrl && <Image  src={iconUrl} alt="lel" width={type === "small" ? 400 : 500} height={type === "small" ?  200 : 350}/>}

      </div>
      <div>
        <p className={"p-light " }>{categorie}</p>
        <h1 className={(type === "small" ? "small display-small" : " display-medium ")}>{title}</h1>
      </div>
      <div className="link">
        <Link href={"/projects/"+id}>Read More </Link>
        <Image width={25} height={25} src="/right-arrow.png" alt="" />
        {/* Double arrow link  + better bottom margin  */}
      </div>
  </div>
}