import { useState, useEffect } from 'react'
import './App.css'

import {Routes, Route} from 'react-router-dom'

import Header from './partials/Header'
import Navigation from './partials/Navigation'
import Hero from './partials/Hero'
import About from './partials/About'
import Experience from './partials/Experience'
import Skills from './partials/Skills'
import Contact from './partials/Contact'
import Projects from './partials/Projects'

import 'aos/dist/aos.css'; // Import the AOS stylesheet
import AOS from 'aos';

import FOG from 'vanta/src/vanta.fog'

function App() {

  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'skills', 'contact'];
      
      sections.forEach(id => {
        const section = document.getElementById(id);
        const boundingBox = section.getBoundingClientRect();
  
        if (boundingBox.top <= window.innerHeight / 2 && boundingBox.bottom >= window.innerHeight / 2) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  AOS.init({
    duration: 800, // Animation duration
    easing: 'ease-in-out', // Animation easing
    once: true, // Animation only happens once
  });

  useEffect(() => {
    VANTA.FOG({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0x0,
      midtoneColor: 0x8ea2,
      lowlightColor: 0xfcfcfc,
      baseColor: 0x0,
      blurFactor: 1.0,
      speed: 1.50,
      zoom: 0.40
    })
  }, [])

  return (
    <>
    <div id='vanta' className='bg'>
    <Navigation activeSection={activeSection} />
      <Header/>
      <Hero />
      <About />
      <Experience />
      <Skills/>
      <Projects />
      <Contact />
    </div>
    </>
  )
}

export default App
