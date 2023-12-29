import Image from 'next/image'
import React from 'react'
import "./style.css"
import { getFromFirestore } from '@/app/utils'
export default async function ContactUs() {

  const info = await getFromFirestore("info").then((data)=>data[0] as any)
  
    return <section id="contact">
      <h3>Want to get in touch? <br />
      Drop me a line!</h3>
      {info && <p className="p-light">{info.sections.contact.text}</p>}
      <form className='contact-form' method="post" action={"mailto:"+info.sections.contact.mail+"?subject=PortfolioInquery"}>
      <div className='form-header'>
        <div className="input-group">
            <label htmlFor="name">Name</label>
            <input placeholder='Your Name :)' name="name" type="name" id="name" />
          </div>
      </div>
      <div className="input-group">
        <label htmlFor="form-text">Description</label>
        <textarea placeholder='Enter Text !' name="form-text" id="form-text" cols={30} rows={9}></textarea>
      </div>
      <button type='submit' >SUBMIT</button>
      </form>
    </section>
  }
  