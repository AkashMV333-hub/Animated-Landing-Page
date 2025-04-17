import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from './components/HeroSection.jsx'
import About from './components/About.jsx';
import Features from './components/Features.jsx';
import Advantages from './components/Advantages.jsx';
import Footer from './components/Footer.jsx';
 

function LandingPage() {

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

