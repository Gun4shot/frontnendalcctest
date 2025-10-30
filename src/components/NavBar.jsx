"use client";
import { useState } from "react";
import "../CSS/NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-container">
    <nav className="navbar ">
      <div className="navbar__logo">
        <a href="index.html">
        ALCC
        </a>
      </div>

      <div className={`navbar__links ${isOpen ? "open" : ""}`}>
        <a href="team.html">Team</a>
        <a href="events.html">Events</a>
        <a href="projects.html">Projects</a>
        <a href="challenges.html">Challenges</a>
        <a href="membership.html">Join us</a>
      </div>

      <div className="navbar__toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    </div>
  );
};

export default NavBar;
