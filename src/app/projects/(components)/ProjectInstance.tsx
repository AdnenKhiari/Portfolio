"use client";
import Link from "next/link";
import Image from "next/image"
import { getPicUrl } from "@/app/utils";
import { use, useEffect, useState } from "react";

export default function ProjectInstance({type,categorie,title,image,id}: {type: "small" | "big",categorie: string,title: string,image: string,id: string}){
  const [iconUrl, setIconUrl] = useState<string | null>(null)
  useEffect(()=>{
    getPicUrl("PROJECTS/"+image).then((res) => setIconUrl(res))
  }
  ,[])
  
  return <div className="project-instance">
      <div className={(type === "small" ? "small" : "big") + " img-container"}>
      {iconUrl && <Image fill sizes="100vw" src={iconUrl} alt="Projects i did or collaborated at"/>}

      </div>
      <div>
        <p className={type === "small" ? "p-light " : ""} style={{translate: "0% -0%",paddingBottom: "10px"}}>{categorie}</p>
        <h1 className={(type === "small" ? "small display-small" : " display-medium ")}>{title}</h1>
      </div>
      <div className="link">
        <Link href={"/projects/"+id}>Read More </Link>
        <Image width={25} height={25} src="/right-arrow.png" alt="Projects i did or collaborated at" />
        {/* Double arrow link  + better bottom margin  */}
      </div>
  </div>
}