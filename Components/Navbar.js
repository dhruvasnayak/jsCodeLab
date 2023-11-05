"use client"

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  // State to track whether the mobile menu is open or not
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="navbar text-white bg-gray-700 p-4">
      <div className="flex items-center justify-between">
        <div className="webname text-white text-xl font-bold">
          jsCodeLab
        </div>

        {/* Mobile menu icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-xl focus:outline-none"
          >
            {mobileMenuOpen ? "X" : "☰"}
          </button>
        </div>

        {/* Desktop navigation links */}
        <div className="hidden lg:flex space-x-4">
          <Link href="/problems">
            Problems
          </Link>
          <Link href="/contest">
            Contest
          </Link>
          <Link href="/profile">
            Profile
          </Link>
          <Link href="/login">
            Login
          </Link>
          <Link href="/register">
            Register
          </Link>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4">
          <Link href="/problems " className="block">
            Problems
          </Link>
          <Link href="/contest" className="block">
            Contest
          </Link>
          <Link href="/profile" className="block">
            Profile
          </Link>
          <Link href="/login" className="block">
            Login
          </Link>
          <Link href="/register" className="block">
            Register
          </Link>
        </div>
      )}
    </div>
  );
}
