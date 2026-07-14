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
      <main>{children}</main>
    </div>
  );
};

export default Layout;