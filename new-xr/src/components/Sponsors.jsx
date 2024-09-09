//import React from 'react';

const Sponsors = () => {
  return (
    <section>
      <div className="sponsors-container">
        <h2 className="sponsors-title">SPONSORS</h2>
        <div className="sponsors-logos">
          <div className="sponsor-item">
            <img src="/assets/Confederation-of-Indian-Industry-CII.png" alt="Sponsor 1" className="sponsor-logo" />
          </div>
          <div className="sponsor-item">
            <img src="/assets/federation-of-indian-chambers-of-commerce-and-industry-ficci-logo-vector.png" alt="Sponsor 2" className="sponsor-logo" />
          </div>
          <div className="sponsor-item">
            <img src="/assets/IB.png" alt="Sponsor 3" className="sponsor-logo" />
          </div>
          <div className="sponsor-item">
            <img src="/assets/NDFC.jpeg" alt="Sponsor 4" className="sponsor-logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;