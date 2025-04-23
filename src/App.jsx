import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import HeroSection from './components/HeroSection.jsx'
import About from './components/About.jsx';
import Features from './components/Features.jsx';
import Advantages from './components/Advantages.jsx';
import Footer from './components/Footer.jsx';
import AOS from 'aos';
 

function LandingPage() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className='w-[calc(100vw - 15px)] text-white overflow-hidden'>
      <HeroSection/>
      <About/>
      <Features/>
      <Advantages/>
      <Footer/>
    </div>
  );
}

export default LandingPage;

