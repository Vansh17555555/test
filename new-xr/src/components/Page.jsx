
import './Page.css';

const Page = () => {
    return (
        <>
          <div className="main-container">
            {/* Container for Main Content */}
            <div className="content-container">
              {/* Section Title */}
              <h2 className="section-title">What is XCH?</h2>
              {/* Description Text */}
              <p className="description-text">The XR Creator Hackathon (XCH) is an exciting challenge that brings together innovators from across various fields to explore the power of immersive technologies. Join us as we harness the potential of AR/VR to transform groundbreaking solutions.</p>
              {/* Register Button */}
              <a href="#" className="register-button">REGISTER NOW</a>
            </div>
      
            {/* Image and Description Section */}
            <div className="image-description-container">
              {/* Left Image Section */}
              <div className="image-container">
                <img src="path_to_image_1.jpg" alt="XCH Event" className="image" />
              </div>
              {/* Right Description Section */}
              <div className="description-container">
                <h3 className="sub-title">Get coding faster</h3>
                <p className="description-text">Dive into simple, streamlined solutions designed just for you.</p>
                <a href="#" className="try-button">Try Now</a>
              </div>
            </div>
          </div>
        </>
      );
      
};

export default Page;
