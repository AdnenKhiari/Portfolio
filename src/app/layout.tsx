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


const metadata_values = {
  title: 'Adnen Khiari Data Science | Software Engineering student Tech Portfolio',
  description: "I'm a Data Science | Software Engineering student , Eager to learn and work on projects !",
  author: "Adnen Khiari",
  authorWebsite: "https://github.com/AdnenKhiari",
  email: "adnenkhiari484@gmail.com",
  websiteUrl: process.env.SITE_URL as string,
  keywords: ["tech portfolio","data science","software engineering","developer","student","computer science","junior developer","Machine learning","aws","cloud","cloud students","Deep learning"]
}

export const metadata: Metadata = {
  title: {
    default: metadata_values.title ,
    template: "%s - AdnenKh Data Science | Software Engineering student Tech Portfolio"
  },
  description: metadata_values.description,
  applicationName: metadata_values.title,
  referrer: 'origin-when-cross-origin',
  keywords: metadata_values.keywords,
  authors: [{ name: metadata_values.author, url:  metadata_values.authorWebsite }],
  creator: metadata_values.author,
  publisher: metadata_values.author,
  formatDetection: {
    email: true,
    address: true,
    telephone: false,
  },

  metadataBase: new URL(metadata_values.websiteUrl),
  openGraph: {
    title:metadata_values.title,
    description: metadata_values.description,
    url: metadata_values.websiteUrl,
    siteName: metadata_values.title,
    images: [
      {
        url: metadata_values.websiteUrl+ '/logo-1/logo-color.svg', // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Portfolio Logo Icon" ,
        type: "image/svg+xml"
      }
    ],
    locale: 'en_US',
    type: 'website',
  },  

  icons: {
    icon: '/logo-1/logo-color.svg',
    shortcut: '/logo-1/logo-color.svg',
    apple: '/logo-1/logo-color.svg',
    other: {
      url: '/logo-1/logo-color.svg',
    },
  },
  manifest: '/manifest.json',
  // twitter: {
  //   card: 'app',
  //   title: metadata_values.title,
  //   description: metadata_values.description,
  //   creator: "@adnendbz",
  //   images: ['/logo-1/logo-color.svg']
  // },
  verification: {
    google: 'TODO',
    other: {
      me: [metadata_values.email, metadata_values.websiteUrl],
    }
  }
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
                                
        <Script id="chatbot">
{`  (function (w, d, s, o, f, js, fjs) {
    w["botsonic_widget"] = o;
    w[o] =
      w[o] ||
      function () {
        (w[o].q = w[o].q || []).push(arguments);
      };
    (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
    js.id = o;
    js.src = f;
    js.async = 1;
    fjs.parentNode.insertBefore(js, fjs);
  })(window, document, "script", "Botsonic", "https://widget.writesonic.com/CDN/botsonic.min.js");
  Botsonic("init", {
    serviceBaseUrl: "https://api.botsonic.ai",
    token: "dcd8e5cc-47e6-4e9b-a0c3-d81d69f822d4",
  });`}
</Script>       
      </body>
    </html>
  )
}
