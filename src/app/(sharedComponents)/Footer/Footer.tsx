"use server"
import Image from "next/image"
import "./footer.css"
import { getFromFirestore } from "@/app/utils";
import Social from "./Social";

export default async function Footer() {

  const info = await getFromFirestore("info").then((data)=>data[0] as any)


    return <footer>
      <div className="footer-left">
        <Image src="/logo-2/logo-color.svg" alt="Adnen Khiari Portfolio footer logo" width={50} height={50}/>
        <span className="p-light">Built By : DbzAdnen</span>
      </div>
      <div className="icon-ls">
        {info && info.social.map((soc: any,index: number)=>{
            return  <Social soc={soc} key={index} />
        })}
      </div>
    </footer>
}
