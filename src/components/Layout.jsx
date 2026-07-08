
import Sidebar from './Sidebar';

function Layout({ children }) {
  return (
    <div className="d-flex">
      <Sidebar />
      <main className="flex-grow-1 ms-5">
        {children}
      </main>
    </div>
  );
}

export default Layout;