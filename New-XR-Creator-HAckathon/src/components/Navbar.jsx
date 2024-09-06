import React, { useState } from 'react';

const Navbar = ({ register }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar-container">
        <img className="logo" src="/assets/logo.webp" alt="Logo" />
        <div
          className="hamburger"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="nav-links"
        >
          &#9776;
        </div>
        <ul
          id="nav-links"
          className={`nav-links ${isOpen ? 'open' : ''}`}
        >
          <li>
            <a href="#about" onClick={toggleMenu}>
              Overview
            </a>
          </li>
          <li>
            <a href="#theme" onClick={toggleMenu}>
              Themes
            </a>
          </li>
          <li>
            <a href="#timelines" onClick={toggleMenu}>
              Timelines
            </a>
          </li>
          <li>
            <a href="#prize" onClick={toggleMenu}>
              Prizes
            </a>
          </li>
          <li>
            <a href="#organiser" onClick={toggleMenu}>
              Sponsors
            </a>
          </li>
          <li>
            <a href="#faq" onClick={toggleMenu}>
              FAQ
            </a>
          </li>
          <li>
            <button onClick={register}>Register</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
