import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  const dots = [
    { id: 0, label: 'Slide 1' },
    { id: 1, label: 'Slide 2' },
    { id: 2, label: 'Slide 3' },
    { id: 3, label: 'Slide 4' }, // Corrected id to match the slide index
  ];

  return (
    <div className="container">
      <div className="content-box">
        <h1 className="title">What is XR Creator <br /> Hackathon?</h1>
        <p className="description">
          The XR Creator Hackathon (XCH) is an exciting challenge that invites developers from across India to push the boundaries of augmented and virtual reality. Designed to spark creativity and drive innovation, this event provides a platform for showcasing groundbreaking solutions that can transform how we interact with technology.
        </p>
        <p className="description">
          Designed to push the boundaries of what’s possible, XCH offers a dynamic platform for you to develop and showcase your visionary ideas. With the opportunity to present your solutions at the World Audio Visual and Entertainment Summit (WAVES) 2025, this hackathon is your gateway to shaping the future of immersive technology and making a meaningful impact. Get ready to unleash your potential and the world of XR.
        </p>
        <a href="#" className="register-button desktop-button" onClick={(e) => { e.preventDefault(); register(); }}>REGISTER NOW</a>
      </div>

      <div className="carousel-container">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={false}
          onChange={handleChange} // Update index on slide change
          selectedItem={currentIndex} // Sync selected slide with current index
        >
          <div>
            <img src="/assets/photos 2(1).jpg" alt="Image 2" />
          </div>
          <div>
            <img src="/assets/photos 3(1).jpg" alt="Image 2" />
          </div>
          <div>
            <img src="/assets/photos 4(1).jpg" alt="Image 3" />
          </div>
          <div>
            <img src="/assets/Photos 6(1).jpg" alt="Image 4" />
          </div>
        </Carousel>

        <div className="custom-dots">
          {dots.map((dot) => (
            <span
              key={dot.id}
              className={`dot ${currentIndex === dot.id ? 'active' : ''}`}
              onClick={() => setCurrentIndex(dot.id)}
              aria-label={dot.label}
            />
          ))}
        </div>
      </div>

      <a href="#" className="register-button mobile-button">REGISTER NOW</a>
    </div>
  );
};

export default About;
