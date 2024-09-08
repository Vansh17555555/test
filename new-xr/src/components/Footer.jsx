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
      <div style={currentStyles.container}>
        <div style={currentStyles.column}>
          <p style={currentStyles.contactHeader}>Contact Us</p>
          <p style={currentStyles.contactInfo}>+49 9533 074090</p>
          <p style={currentStyles.contactInfo}>creatorhackathon@gmail.com</p>
        </div>
        <div style={currentStyles.column}>
          <p style={currentStyles.followUs}>Follow Us</p>
          <div style={currentStyles.socialMedia}>
            <a href="#" style={currentStyles.link}>
              <Facebook size={24} />
            </a>
            <a href="#" style={currentStyles.link}>
              <Instagram size={24} />
            </a>
            <a href="#" style={currentStyles.link}>
              <Linkedin size={24} />
            </a>
            <a href="#" style={currentStyles.link}>
              <Twitter size={24} />
            </a>
      
          </div>
          <div style={currentStyles.footerBottom}>
        <p style={currentStyles.footerText}>© 2023 5.2.28 Creator Hackathon. All rights reserved</p>
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
    margin: '0 auto',
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
    fontSize: '0.875rem',
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
