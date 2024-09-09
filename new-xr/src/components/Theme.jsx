//import React from 'react'

const Theme = () => {
    return (        
          <section className="theme-container" >
          <h1 className="theme-heading">THEMES</h1>
          <div className='theme-card-container'>
            {/* Healthcare, Fitness, Well-being Theme Card */}
            <div className="theme-card-1">
              <img src="/assets/education.png" className='theme-image'/>
             
                <h3 className="theme-title">Healthcare,<br/> Fitness, Well-being</h3>
                <p className='theme-content'>This theme encompasses the integration of XR technologies into the healthcare sector, focusing on enhancing patient care, promoting fitness, and improving overall well-being.
                </p>
            
            </div>
      
            {/* Educational Transformation Theme Card */}
            <div className="theme-card-2">
            <img src="/assets/education (1).png" className='theme-image'/>

                <h3 className="theme-title">Educational <br></br> Transformation</h3>
                <p className='theme-content'>This theme centers on the potential of XR to revolutionize education and training. Participants will delve into the ways immersive technologies can create engaging learning environments, enhance accessibility, and facilitate experiential learning.</p>

            </div>
      
            {/* Immersive Tourism Theme Card */}
            <div className="theme-card-3">
            <img src="/assets/education (2).png" className='theme-image'/>

            
                <h3 className="theme-title">Immersive <br></br> Tourism</h3>
                <p className='theme-content'>This theme highlights the role of XR in enhancing travel experiences and promoting cultural exchange. Participants will explore how immersive technologies can transform the way people experience destinations, allowing for virtual exploration and interaction with local cultures. 
                </p>
              
            </div>
      
            {/* Digital Media & Entertainment Theme Card */}
            <div className="theme-card-4">
            <img src="/assets/education (3).png" className='theme-image'/>

              
                <h3 className="theme-title">Digital  Media  &<br></br> Entertainment</h3>
                <p className='theme-content'>This theme focuses on the evolving landscape of digital media and entertainment through the lens of XR technologies. Participants will investigate how immersive experiences can redefine storytelling, gaming, and content consumption. </p>
             
            </div>
      
            {/* eCommerce & Retail Transformation Theme Card */}
            <div className="theme-card-5">
            <img src="/assets/education (4).png" className='theme-image'/>

             
                <h3 className="theme-title">eCommerce & Retail 
                  <br></br>Transformation</h3>
                <p className='theme-content'>This theme explores the transformative impact of XR on retail, eCommerce, and real estate. Participants will examine how immersive technologies can enhance customer experiences, streamline shopping processes, and create personalized environments.</p>
              
            </div>
          </div>
          </section>

      );
      
}

export default Theme
