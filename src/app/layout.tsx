import "./normalize.css"
import './globals.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import NavBar from './(sharedComponents)/NavBar/NavBar'
import Footer from './(sharedComponents)/Footer/Footer'
import AnimatedCursor from "react-animated-cursor"
import Script from 'next/script'
import {firebaseConfig} from "./config"
const mont = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AdnenKh Tech Portfolio',
  description: 'Personal Portfolio to showcase who I am',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mont.className}>
      <div className="container">
    <Script src={"https://www.googletagmanager.com/gtag/js?id="+firebaseConfig.measurementId}  />
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${firebaseConfig.measurementId}');
      `}
    </Script>
  </div>
      <AnimatedCursor    
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: 'var(--secondary-color)'
        }}
        outerStyle={{
          border: '2px solid var(--lighter-secondary)'
        }} />
        <NavBar></NavBar>
          <div className="app-container">
          {children}
          </div>
        <Footer></Footer>
      </body>
    </html>
  )
}
