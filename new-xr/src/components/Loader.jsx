import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-container ${!loading ? 'hidden' : ''}`}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
