import './App.css'
import React, { useEffect } from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import GithubActivity from './components/GithubActivity';

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
    <Layout>
      <Hero id="hero" />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <GithubActivity username="MariamAhmed004" />
    </Layout>
    </Router>
  );
}

export default App;