import Image from 'next/image'
import React from 'react'
import "./page.css"
import AboutMe from './(sharedComponents)/AboutMe/AboutMe'
import ContactUs from './(sharedComponents)/Contact/Contact'
import Experience from './experience/(components)/Experience/Experience'
import Education from './experience/(components)/Education/Education'
import LatestProjects from './projects/(components)/LatestProjects'
import { getFromFirestore } from './utils'
import ReactLoading from 'react-loading';



const Content = ({info} : {info: any})=>{
  return <React.Fragment> 
    
    <section className='hero box-container'>
      <AboutMe details={info.sections.header} />
    </section>
    <section className='latest-proj box-container'>
     <LatestProjects />
    </section>
    <div className='main-2 box-container'>
      <section className='experience '>
        <article className='professional boxed '>
          <Experience description={info.sections.experience} />
        </article>
        <article className='education boxed'>
          <Education description={info.sections.education}/>
        </article>
        <article className='contact'>
          <article className='boxed'>
          <ContactUs />
          </article>
        </article>
      </section>
    </div>
  </React.Fragment> 
}
export const revalidate = 60

export default async function Home() {  
  const info = await getFromFirestore("info").then((data)=>data[0])
  return <Content info={info}></Content>
}


function StyleGuide() {
  return <React.Fragment> 
      <p className="display-big">
big heder
      </p>
      <p className="display-medium">
        med
      </p>      
      <p className="display-small">
          small
        </p>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <hr />
      <p className="label">Label Here</p>
      <a href="H">Hii XD</a>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam tempore beatae corrupti itaque unde commodi suscipit magni quia voluptate! Commodi rem, molestias deserunt animi asperiores porro. Dicta eligendi consectetur eum.</p>
      <p className="p-bigger">Bigger Paragraph : Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, magnam sed ad natus sapiente deleniti quas cum quasi obcaecati fugiat provident dolor dignissimos tempora, aut dolores pariatur! Possimus, aut ea?</p>
      <p className="p-light">light Paragraph : Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, magnam sed ad natus sapiente deleniti quas cum quasi obcaecati fugiat provident dolor dignissimos tempora, aut dolores pariatur! Possimus, aut ea?</p>
      <p className="p-small">small Paragraph : Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, magnam sed ad natus sapiente deleniti quas cum quasi obcaecati fugiat provident dolor dignissimos tempora, aut dolores pariatur! Possimus, aut ea?</p>
      <p className="p-tiny">tiny Paragraph : Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, magnam sed ad natus sapiente deleniti quas cum quasi obcaecati fugiat provident dolor dignissimos tempora, aut dolores pariatur! Possimus, aut ea?</p>
      <hr />
      <button>Btn1</button>
      <button className='btn-bigger'>Btn1</button>
      <blockquote>
      The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.
      </blockquote>
      <div>
      <Image height={500} width={600} src="https://assets-global.website-files.com/65282b5bb76b10cbb10454fe/65282b5bb76b10cbb1045591_placeholder%201.svg" alt=""></Image>
      <figcaption>Image xD</figcaption>
      </div>

      <ul>
      <li>Text 1 </li>
      <li>Text 2 </li>
      <li>Text 3 </li>
      <li>Text 4 </li>
      </ul>
    </React.Fragment>
}
