"use server"
import { getPicUrl } from "@/app/utils";
import Link from "next/link";
import Image from "next/image"

export default async function Social ({soc}: {soc: any}){
    const iconUrl = await  getPicUrl("SOCIAL/"+soc.icon)
  
    return <Link rel="noopener noreferrer" target="_blank"  href={soc.url} className="social-pair" >
      {iconUrl && <Image src={iconUrl} width={20} height={20} alt={"Social Icon of " + soc.label + " that link to my profile"} />}
      <span>{soc.label}</span>
    </Link>
  }