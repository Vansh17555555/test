import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

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

  const currentStyles = isMobile ? mobileStyles : styles;

  return (
    <section style={currentStyles.footer}>
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
      </div>  <div style={currentStyles.container}>
        <div style={currentStyles.column}>
          <p style={currentStyles.contactHeader}>Contact Us</p>
          <p style={currentStyles.contactInfo}>+91 93540 31490</p>
          <p style={currentStyles.contactInfo}>xrcreatorhackathon@wavelaps.com</p>
        </div>
        <div style={currentStyles.column}>
          <p style={currentStyles.followUs}>Follow Us</p>
          <div style={currentStyles.socialMedia}>
            <a href="https://www.facebook.com/people/Wavelaps/61563794723850/" style={currentStyles.link}>
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/wavelaps_technologies/" style={currentStyles.link}>
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/company/wavelaps" style={currentStyles.link}>
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/wavelaps" style={currentStyles.link}>
              <Twitter size={24} />
            </a>
      
          </div>
          <div style={currentStyles.footerBottom}>
        <p style={currentStyles.footerText}>© 2024-25 XR Creator Hackathon. All rights reserved</p>
      </div>
        </div>
      </div>    
    </section>
  )
};

const styles = {
  footer: {
    backgroundColor: '#1a202c',
    color: 'white',
    padding: '2rem',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 100px',
    display: 'flex',
    flexDirection:'row-reverse',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  followUs: {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  socialMedia: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  contactHeader: {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  contactInfo: {
    cursor: 'pointer',
    transition: 'color 0.3s',
    marginBottom: '0.25rem',
  },
  footerBottom: {
    textAlign: 'center',
  },
  footerText: {
    fontSize: '0.775rem',
    textAlign: 'left',
    marginTop:'1vh'
  },
};

const mobileStyles = {
  ...styles,
  container: {
    ...styles.container,
    flexDirection: 'column',
  },
  footerText: {
    ...styles.footerText,
    paddingLeft: '0',
  },
};

export default Footer;
