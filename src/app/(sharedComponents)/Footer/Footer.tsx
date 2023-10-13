import Link from "next/link";
import Image from "next/image"
import "./footer.css"

export default function Footer() {
    return <footer>
      <div className="footer-left">
        <Image src="logo-2/logo-color.svg" alt="lel" width={50} height={50}/>
        <span className="p-light">Built By : DbzAdnen</span>
      </div>
      <div>
        <Link href="linkedin">Linked In</Link>
      </div>
    </footer>
}
  