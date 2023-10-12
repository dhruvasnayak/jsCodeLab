import Image from 'next/image'
import Link from 'next/link'
import './Navbar.css'
export default function Home() {
  return (
   <div>
   <div className="navbar">
      <div className="webname">
        jsCodeLab
      </div>
      <div className="pages">
        <dev className="links">
          <Link className="mx-3" href='/problems'>Problems</Link>
        </dev>
        <dev className="links">
          <Link className="mx-3" href='/contest'>Contest</Link>
        </dev>
        <dev className="links">
          <Link className="mx-3" href='/profile'>profile</Link>
        </dev>
      </div>
    </div>
   </div>  
   )
}
