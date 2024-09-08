import React, { useState } from 'react';

const Navbar = ({ register }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu when a link or close button is clicked
  };

  return (
    <nav>
      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      
      {/* Logo */}
      <img className="logo" src="/assets/XR Creator Hackathon Logo.png" alt="Logo" />

      {/* Navigation links */}
      <ul className={isOpen ? "nav-open" : ""}>
        {/* Close button */}
        {isOpen && (
          <div className="close-btn" onClick={closeMenu}>
            <i className="fas fa-times"></i>
          </div>
        )}
        <li><a href="#about" onClick={closeMenu}>Overview</a></li>
        <li><a href="#theme" onClick={closeMenu}>Themes</a></li>
        <li><a href="#timeline" onClick={closeMenu}>Timeline</a></li>
        <li><a href="#prize" onClick={closeMenu}>Prizes</a></li>
        <li><a href="#sponsor" onClick={closeMenu}>Sponsors</a></li>
        <li><a href="#faqs" onClick={closeMenu}>FAQ</a></li>
        <li><button onClick={register}>REGISTER NOW</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
