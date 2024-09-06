import React from 'react';
import "./About.scss"
const About = ({ register }) => {
  return (
    <div className="container">
      {/* Content Section */}
      <div className="content-box">
        <h1 className="title">What is XCH?</h1>
        <p className="description">The XR Creator Hackathon (XCH) is an exciting challenge that invites developers from across India to push the boundaries of augmented and virtual reality. Designed to spark creativity and drive innovation, this event provides a platform for showcasing groundbreaking solutions that can transform how we interact with technology.</p>
        <p className="description">Designed to push the boundaries of what’s possible, XCH offers a dynamic platform for you to develop and showcase your visionary ideas. With the opportunity to present your solutions at the World Audio Visual and Entertainment Summit (WAVES) 2025, this hackathon is your gateway to shaping the future of immersive technology and making a meaningful impact. Get ready to unleash your potential and the world of XR.</p>
        <a href="#" className="register-button" onClick={(e) => { e.preventDefault(); register(); }}>REGISTER NOW</a>
      </div>

      {/* Overlapping Images Section */}
      <div className="image-stack">
        <div className="image-stack__item image-stack__item--top">
          <img src="/assets/image.png" alt="Texture" />
        </div>
        <div className="image-stack__item image-stack__item--bottom">
          <img src="/assets/image (1).png" alt="Portrait" />
        </div>
      </div>
    </div>
  );
};

export default About;
