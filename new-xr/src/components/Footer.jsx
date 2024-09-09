import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="footer">
      <div style={{ display: 'block', width: '36vw', background: 'transparent' }}>
        {/* Adjust the logo size based on screen size */}
        <img 
          src="assets/image_3-removebg-preview.png" 
          alt="Logo" 
          style={isMobile 
            ? { width: '30vw', marginLeft: '20vw', height: 'auto' } // Mobile styles
            : { width: '10vw', marginLeft: '5vw', height: 'auto' }   // Desktop styles
          } 
        />
      </div>
      <div className="footerContainer">
        <div className="footerPrefix">
          <p className="contactHeader">Contact Us</p>
          <p className="contactInfo">+91 93540 31490</p>
          <p className="contactInfo">xrcreatorhackathon@wavelaps.com</p>
        </div>
        <div className="footerPrefix">
          <p className="followUs">Follow Us</p>
          <div className="socialMedia">
            <a href="https://www.facebook.com/people/Wavelaps/61563794723850/" className="link">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/wavelaps_technologies/" className="link">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/company/wavelaps" className="link">
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/wavelaps" className="link">
              <Twitter size={24} />
            </a>
          </div>
          <div className="footerBottom">
            <p className="footerText">© 2024-25 XR Creator Hackathon. All rights reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
