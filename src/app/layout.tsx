import "./normalize.css";
import "./globals.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NavBar from "./(sharedComponents)/NavBar/NavBar";
import Footer from "./(sharedComponents)/Footer/Footer";
import AnimatedCursor from "react-animated-cursor";
import Script from "next/script";
import { firebaseConfig } from "./config";
const mont = Montserrat({ subsets: ["latin"] });

const metadata_values = {
  title:
    "Adnen Khiari Data Science | Software Engineering student Tech Portfolio",
  description:
    "I'm a Data Science | Software Engineering student , Eager to learn and work on projects !",
  author: "Adnen Khiari",
  authorWebsite: "https://github.com/AdnenKhiari",
  email: "adnenkhiari484@gmail.com",
  websiteUrl: process.env.SITE_URL as string,
  keywords: [
    "tech portfolio",
    "data science",
    "software engineering",
    "developer",
    "student",
    "computer science",
    "junior developer",
    "Machine learning",
    "aws",
    "cloud",
    "cloud students",
    "Deep learning",
  ],
};

export const metadata: Metadata = {
  title: {
    default: metadata_values.title,
    template:
      "%s - AdnenKh Data Science | Software Engineering student Tech Portfolio",
  },
  description: metadata_values.description,
  applicationName: metadata_values.title,
  referrer: "origin-when-cross-origin",
  keywords: metadata_values.keywords,
  authors: [
    { name: metadata_values.author, url: metadata_values.authorWebsite },
  ],
  creator: metadata_values.author,
  publisher: metadata_values.author,
  formatDetection: {
    email: true,
    address: true,
    telephone: false,
  },

  metadataBase: new URL(metadata_values.websiteUrl),
  openGraph: {
    title: metadata_values.title,
    description: metadata_values.description,
    url: metadata_values.websiteUrl,
    siteName: metadata_values.title,
    images: [
      {
        url: metadata_values.websiteUrl + "/logo-1/logo-color.svg", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Portfolio Logo Icon",
        type: "image/svg+xml",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/logo-1/logo-color.svg",
    shortcut: "/logo-1/logo-color.svg",
    apple: "/logo-1/logo-color.svg",
    other: {
      url: "/logo-1/logo-color.svg",
    },
  },
  manifest: "/manifest.json",
  // twitter: {
  //   card: 'app',
  //   title: metadata_values.title,
  //   description: metadata_values.description,
  //   creator: "@adnendbz",
  //   images: ['/logo-1/logo-color.svg']
  // },
  // verification: {
  //   google: 'TODO',
  //   other: {
  //     me: [metadata_values.email, metadata_values.websiteUrl],
  //   }
  // }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <div className="container">
          <Script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          />

          <script type="text/javascript">
            {`(function(){
            emailjs.init({
              publicKey: ${process.env.NEXT_PUBLIC_EMAIl_JS_PBK},
            });
        })(); `}
          </script>
          <Script
            src={
              "https://www.googletagmanager.com/gtag/js?id=" +
              firebaseConfig.measurementId
            }
          />
          <Script id="google-analytics">
            {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${firebaseConfig.measurementId}');
      `}
          </Script>
          <Script async data-id="1477234871" id="chatling-embed-script" type="text/javascript" src="https://chatling.ai/js/embed.js"></Script>
        </div>
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: "var(--secondary-color)",
          }}
          outerStyle={{
            border: "2px solid var(--lighter-secondary)",
          }}
        />
        <NavBar></NavBar>
        <div className="app-container">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
