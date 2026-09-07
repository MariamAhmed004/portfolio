import './App.css'
import React, { useEffect } from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import CursorGlow from './components/CursorGlow';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleScroll = () => {
      const sections = document.querySelectorAll('.page-shell');
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - window.innerHeight / 2;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });

      document.querySelectorAll('.sidebar-icon').forEach(icon => {
        icon.classList.remove('active');
        if (`#${currentSection}` === icon.closest('a').getAttribute('href')) {
          icon.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Router>
      <CursorGlow 
          color="#4f8cff"
          trailLength={6000}
          trailThickness={1}
          lineCount={1}
          lineGap={2}
          idleDelay={2000}
          blur={28}
          opacity={0.9}
      />
      <Layout>
        <Hero id="hero" />
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Contact id="contact" />
      </Layout>
    </Router>
  );
}

export default App;