import Link from "next/link"
import './Navbar.css'

export default function Navbar() {
    return (
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
            <Link className="mx-3" href='/profile'>Profile</Link>
          </dev>
          <dev className="links">
            <Link className="mx-3" href='/login'>Login</Link>
          </dev>
          <dev className="links">
            <Link className="mx-3" href='/register'>Register</Link>
          </dev>
        </div>
      </div>
    )
}