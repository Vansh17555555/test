import React, { useState, useEffect } from 'react';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    // Fetch the JSON file dynamically
    fetch('/FAQ.json')
      .then(response => response.json())
      .then(data => setFaqs(data.faqs))
      .catch(error => console.error('Error loading FAQs:', error));
  }, []);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faqs">
      <h1 className="heading" >FAQs</h1>
      <div className='faq-container'>
        {faqs.map((faq) => (
          <div key={faq.id} className='faq'>
            <input id={faq.id} type="checkbox" checked={openFAQ === faq.id} readOnly />
            <label htmlFor={faq.id} onClick={() => toggleFAQ(faq.id)}>
              <p className="faq-heading">{faq.question}</p>
              <div className='faq-arrow'></div>
              <p className="faq-text" style={{ display: openFAQ === faq.id ? 'block' : 'none' }}>
                {faq.answer}
              </p>
            </label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
