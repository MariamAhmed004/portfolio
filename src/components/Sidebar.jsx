
import { NavLink, useLocation } from 'react-router-dom';
import { FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaHome } from 'react-icons/fa';
import './SidebarFloating.css';

const iconMap = {
  Home: <FaHome />,
  About: <FaUser />,
  Skills: <FaCode />,
  Projects: <FaProjectDiagram />,
  Contact: <FaEnvelope />,
};

const routes = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/skills', name: 'Skills' },
  { path: '/projects', name: 'Projects' },
  { path: '/contact', name: 'Contact' },
];

function Sidebar() {
  const location = useLocation();
  return (
    <nav className="floating-sidebar">
      {routes.map(({ path, name }) => (
        <NavLink
          to={path}
          key={path}
          className={({ isActive }) =>
            `sidebar-icon${isActive || location.pathname === path ? ' active' : ''}`
          }
          title={name}
        >
          {iconMap[name]}
          <span className="sidebar-label">{name}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default Sidebar;