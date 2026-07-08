import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaDesktop, FaGamepad, FaMobileAlt, FaProjectDiagram, FaServer, FaTimes } from 'react-icons/fa';
import automationImage from '../assets/Batelco-Dashboard.jpeg';
import cImage from '../assets/csharp.jpeg';
import gameImage from '../assets/Games.png';
import webImage from '../assets/LedgerLink.jpeg';
import desktopImage from '../assets/PHP.png';
import mobileImage from '../assets/react.svg';

const projects = [
  {
    title: 'Automation & Workflow Systems',
    icon: <FaServer />,
    summary: 'Billing Reconciliation Automation & Monitoring',
    description: 'Automated PL/SQL reconciliation runs with Linux cron scheduling, integrated into a monitoring dashboard.',
    details: 'This project stands out to me because it turns repetitive finance work into something dependable and easier to trust.',
    image: automationImage,
  },
  {
    title: 'Web Development',
    icon: <FaProjectDiagram />,
    summary: 'LedgerLink, RentOps, Borrow My Charger',
    description: 'LedgerLink is a SaaS platform for SMEs in Bahrain built with ReactJS, ASP.NET Core APIs, Azure SQL Database, ASP.NET Identity, Gemini API, EF Core, and HighCharts. RentOps and Borrow My Charger cover rental and EV charging use cases across .NET, ASP.NET Core MVC, HTML, CSS, PHP, and JavaScript.',
    details: 'I like how this work blends product thinking, clean interfaces, and practical backend integrations into real business tools.',
    image: webImage,cImage,
  },
  {
    title: 'Game Development',
    icon: <FaGamepad />,
    summary: 'OperationExoQuest',
    description: 'PC game built with Unity and C#.',
    details: 'This project reflects a more experimental side of my work, focused on creating interactive systems and player-driven experiences.',
    image: gameImage,
  },
  {
    title: 'Desktop Applications',
    icon: <FaDesktop />,
    summary: 'RentOps Desktop, Happy Journey, Premier League',
    description: 'Windows and database-driven desktop tools built with .NET Framework and SQL, plus a Java desktop app for sports league management.',
    details: 'These tools were built to solve everyday operational problems with a strong emphasis on reliability and usability.',
    image: desktopImage,
  },
  {
    title: 'Mobile Applications',
    icon: <FaMobileAlt />,
    summary: 'Jobify',
    description: 'iOS app for job postings and applications, built in Xcode and connected to Firebase and Cloudinary.',
    details: 'I value this project for the way it brings a simple user experience to a real-world hiring workflow.',
    image: mobileImage,
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="page-shell">
      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <h1 className="display-5 fw-bold mb-3">A portfolio of practical, cross-platform work</h1>
          <p className="lead text-light-emphasis mb-0">
            From automation and dashboards to web, desktop, mobile, and game projects, these examples highlight the breadth of my development experience.
          </p>
        </motion.div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="col-lg-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
            >
              <div className="glass-card p-4 h-100 d-flex flex-column">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="text-primary">{project.icon}</span>
                  <div>
                    <h2 className="h5 fw-bold mb-1">{project.title}</h2>
                    <p className="mb-0 text-light-emphasis small">{project.summary}</p>
                  </div>
                </div>
                <p className="mb-3">{project.description}</p>
                <button
                  type="button"
                  className="btn btn-outline-light btn-sm mt-auto align-self-start"
                  onClick={() => setSelectedProject(project)}
                >
                  View details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ background: 'rgba(0, 0, 0, 0.8)', zIndex: 1050 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass-card p-4 rounded-4 shadow-lg"
              style={{ maxWidth: '720px', width: 'min(92vw, 720px)' }}
              initial={{ scale: 0.96, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 16 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                <div>
                  <h3 className="h4 fw-bold mb-1">{selectedProject.title}</h3>
                  <p className="mb-0 text-light-emphasis">{selectedProject.summary}</p>
                </div>
                <button
                  type="button"
                  className="btn btn-close-white btn-sm"
                  aria-label="Close project details"
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes />
                </button>
              </div>

              {selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="img-fluid rounded-3 mb-3"
                  style={{ maxHeight: '280px', width: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 mb-3 border border-secondary"
                  style={{ height: '220px', background: 'rgba(255, 255, 255, 0.06)' }}
                >
                  <span className="text-light-emphasis">Preview image coming soon</span>
                </div>
              )}

              <p className="mb-3">{selectedProject.description}</p>
              <p className="mb-0 text-light-emphasis">{selectedProject.details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;