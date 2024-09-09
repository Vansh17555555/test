import  { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Theme from './components/Theme';
import './App.css';
import About from './components/About';
import Timelines from './components/Timeline';
import Prize from './components/Prize';
import Organiser from './components/Organiser';
import Waves from './components/Waves';
import Sponsors from './components/Sponsors';
import Loader from './components/Loader';
import Marquee from './components/Marquee';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const register = () => {
    alert(
      "We're excited to announce that registrations will begin on 10th September. Mark your calendars and stay tuned for updates. We can't wait to see you join us!"
    );
  };

  return (
    <>
      {loading && <Loader />}
      <Navbar register={register} />
      <section id="launchpage" className="pages">
        <img src="/assets/Banner Layers.png" alt=""/>
        <Marquee/>
      </section>
    
      <section id="about">
        <About />
      </section>
      <section>
        <Waves/>
      </section>
      <section id="theme">
        <Theme />
      </section>
      <section id="timelines">
        <Timelines />
      </section>
      <section id="prize">
        <Prize />
      </section>
      <section id="sponsor">
        <Sponsors/>
        <Organiser />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <Footer />
    </>
  );
};

export default App;
