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
          <Link href="/home" className="link">
            Home
          </Link>
          <Link href="/home/problems" className="link">
            Problems
          </Link>
          <Link href="/home/contest" className="link">
            Contest
          </Link>
          <Link href="/home/profile" className="link">
            Profile
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
