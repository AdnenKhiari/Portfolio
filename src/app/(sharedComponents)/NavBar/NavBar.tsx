
"use client"
import Link from "next/link";
import Image from "next/image"
import "./comp.css"
import { usePathname } from "next/navigation";

export default function NavBar() {

  const pathname = usePathname();

  const links = [
    { text: 'Home', href: '/' },
    { text: 'Projects', href: '/projects' },
    { text: 'Experience', href: '/experience' },
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
  