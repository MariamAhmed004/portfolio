import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { FaHome, FaUser, FaTools, FaBriefcase, FaPhone } from 'react-icons/fa';

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home', icon: <FaHome /> },
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'skills', label: 'Skills', icon: <FaTools /> },
    { id: 'projects', label: 'Projects', icon: <FaBriefcase /> },
    { id: 'contact', label: 'Contact', icon: <FaPhone /> }
  ];

  return (
    <div className="layout">
      <Sidebar sections={sections} />

      <header className="mobile-nav">
        <button
          className="mobile-nav-toggle"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(v => !v)}
        >
          ☰
        </button>
        <nav className={`mobile-nav-links ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
          <ul>
            {sections.map(s => (
              <li key={s.id}><a href={`#${s.id}`} onClick={() => setMobileOpen(false)}>{s.icon} {s.label}</a></li>
            ))}
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
};

export default Layout;