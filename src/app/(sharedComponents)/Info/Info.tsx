import "./style.css"
import { getFromFirestore } from "@/app/utils"
export const revalidate = 60

export default async function Info() {

  const info = await getFromFirestore("info").then((data)=>data[0] as any)

  
    return <section className="info-me">
      <h2>Want to work together ?</h2>
      <p>
        If you like what you see and want to work together, get in touch!
      </p>
      {info && <p className="display-big">{info.sections.contact.mail}</p>}
    </section>
  }
  