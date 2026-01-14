import Nav from 'react-bootstrap/Nav';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { routes } from '../appRoutes.jsx';

function Sidebar({ open, onClose }) {
  const iconMap = {
    About: <FaUser />,
    Skills: <FaCode />,
    Projects: <FaProjectDiagram />,
    Contact: <FaEnvelope />,
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="position-fixed"
            style={{
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.3)',
              zIndex: 1040,
            }}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.div
            className="d-flex flex-column bg-primary vh-100 px-3"
            style={{
              width: '270px',
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

            <Nav className="flex-column">
              {routes.map(({ path, name }) => (
                <Nav.Link
                  as={NavLink}
                  to={path}
                  key={path}
                  className={({ isActive }) =>
                    `text-white d-flex align-items-center gap-2${isActive ? ' fw-bold' : ''}`
                  }
                  onClick={onClose}
                  style={{ background: 'none', border: 'none' }}
                >
                  {iconMap[name] || null} {name}
                </Nav.Link>
              ))}
            </Nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;