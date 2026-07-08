
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

          <motion.div
            className="d-flex flex-column bg-primary vh-100 px-3"
            style={{
              width: '20%',
              position: 'fixed',
              top: 0,
              left: 0,
              height: '100vh',
              zIndex: 1050,
              boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
              paddingTop: '75px',
            }}
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <h2
              className="mb-4"
              style={{
                fontFamily: 'Press Start 2P, monospace',
                fontWeight: 700,
                fontSize: '1.4rem',
                letterSpacing: '1px',
                color: '#222',
                background: 'none',
                textShadow: '0 2px 8px rgba(0,0,0,0.10)',
              }}
            >
              Maryam Ahmed
            </h2>
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