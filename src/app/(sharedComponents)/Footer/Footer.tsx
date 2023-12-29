"use server"
import Link from "next/link";
import Image from "next/image"
import "./footer.css"
import { getFromFirestore, getPicUrl } from "@/app/utils";

export default async function Footer() {

  const info = await getFromFirestore("info").then((data)=>data[0] as any)


    return <footer>
      <div className="footer-left">
        <Image src="logo-2/logo-color.svg" alt="lel" width={50} height={50}/>
        <span className="p-light">Built By : DbzAdnen</span>
      </div>
      <div className="icon-ls">
        {info && info.social.map((soc: any,index: number)=>{
            return  <Social soc={soc} key={index} />
        })}
      </div>
    </footer>
}
  
const Social = async ({soc}: {soc: any})=>{
  const iconUrl = await  getPicUrl("SOCIAL/"+soc.icon)

  return <Link rel="noopener noreferrer" target="_blank"  href={soc.url} className="social-pair" >
    {iconUrl && <Image src={iconUrl} width={20} height={20} alt={soc.label} />}
    <span>{soc.label}</span>
  </Link>
}