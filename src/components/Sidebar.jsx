import React from 'react';
import './SidebarFloating.css';

const Sidebar = ({ sections }) => {
  return (
    <nav className="floating-sidebar" aria-label="Section navigation">
      <ul>
        {sections.map(section => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="sidebar-icon" aria-label={section.label || section.id}>
              {section.icon}
              <span className="sidebar-label">{section.label || section.id}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;