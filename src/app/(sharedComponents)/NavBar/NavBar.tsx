
"use client"
import Link from "next/link";
import Image from "next/image"
import "./comp.css"
import { usePathname } from "next/navigation";
import {  getPicUrl } from "@/app/utils";
import { useEffect, useState } from "react";

export default function NavBar() {

  const pathname = usePathname();
  const [imgPath,setImgPath] = useState<string>("")
  useEffect(()=>{
    getPicUrl("/MISC/AdnenKhiariCVNoPhone.pdf").then((img)=>{
      setImgPath(img)
    })
  },[])
  const links = [
    { text: 'Home', href: '/' },
    { text: 'Projects', href: '/projects' },
    { text: 'Experience', href: '/experience' },
    { text: 'Resume', href: imgPath ,target:"_", rel:"noopener noreferrer"},
    { text: 'Contact', href: '/#contact',scroll: true }
  ];

  return <header>
    <div className="logo">
      <Link href={"/"}><Image width={100} height={100} src="/logo-1/logo-color.svg" alt="Adnen Khiari Portfolio Logo" /></Link>
    </div>
    <nav className="navigation">
      <ul>

      {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              scroll={link.scroll ?? true}
              rel={link.rel}
              target={link.target}
              className={pathname === link.href ? 'active' : ''}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
}
  