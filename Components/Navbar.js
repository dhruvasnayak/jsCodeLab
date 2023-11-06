"use client"

import Link from "next/link";
import { useState } from "react";
import "./Navbar.css"


function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);


  const toggleMenu = () => {
    setIsActive(!isActive);
    setIsClicked(!isClicked);
  }


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-club">
          <div className="club-name">
            <h3 className='cn1'>jsCodeLab</h3>
          </div>
        </div>

        <ul className={`navbar-menu ${isActive ? 'active' : ''}`}>
          <Link href="/problems" className="link">
            Problems
          </Link>
          <Link href="/contest" className="link">
            Contest
          </Link>
          <Link href="/profile" className="link">
            Profile
          </Link>
          <Link href="/login" className="link">
            Login
          </Link>
          <Link href="/register" className="link">
            Register
          </Link>
        </ul>

        <div className={`navbar-toggle ${isClicked ? 'clicked' : ''}`} onClick={toggleMenu}>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
