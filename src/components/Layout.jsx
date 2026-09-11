import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { FaHome, FaUser, FaProjectDiagram, FaPhone } from 'react-icons/fa';
import { GiToolbox } from "react-icons/gi";

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home', icon: <FaHome /> },
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'skills', label: 'Skills', icon: <GiToolbox /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'contact', label: 'Contact', icon: <FaPhone /> }
  ];

  return (
    <div className="layout">
      <Sidebar sections={sections} />
      <main>{children}</main>
      <footer className="site-footer">
        &copy; {new Date().getFullYear()} Maryam Ahmed. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;