import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Sidebar from './Sidebar';

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="d-flex">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <button
        className="btn btn-primary position-fixed d-flex align-items-center justify-content-center"
        style={{ top: 20, left: 20, zIndex: 1050, width: 48, height: 48, borderRadius: '8px', padding: 0 }}
        onClick={handleToggleSidebar}
        aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <main
        className="flex-grow-1 ms-5"
        style={{ marginLeft: sidebarOpen ? '220px' : '0', transition: 'margin-left 0.3s' }}
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;