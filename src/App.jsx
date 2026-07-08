import './App.css'
import Layout from './components/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './appRoutes.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;