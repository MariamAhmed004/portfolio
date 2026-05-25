import { motion } from 'framer-motion';
import { FaDesktop, FaGamepad, FaMobileAlt, FaProjectDiagram, FaServer } from 'react-icons/fa';

const projects = [
  {
    title: 'Automation & Workflow Systems',
    icon: <FaServer />,
    summary: 'Billing Reconciliation Automation & Monitoring',
    description: 'Automated PL/SQL reconciliation runs with Linux cron scheduling, integrated into a monitoring dashboard.',
  },
  {
    title: 'Web Development',
    icon: <FaProjectDiagram />,
    summary: 'LedgerLink, RentOps, Borrow My Charger',
    description: 'LedgerLink is a SaaS platform for SMEs in Bahrain built with ReactJS, ASP.NET Core APIs, Azure SQL Database, ASP.NET Identity, Gemini API, EF Core, and HighCharts. RentOps and Borrow My Charger cover rental and EV charging use cases across .NET, ASP.NET Core MVC, HTML, CSS, PHP, and JavaScript.',
  },
  {
    title: 'Game Development',
    icon: <FaGamepad />,
    summary: 'OperationExoQuest',
    description: 'PC game built with Unity and C#.',
  },
  {
    title: 'Desktop Applications',
    icon: <FaDesktop />,
    summary: 'RentOps Desktop, Happy Journey, Premier League',
    description: 'Windows and database-driven desktop tools built with .NET Framework and SQL, plus a Java desktop app for sports league management.',
  },
  {
    title: 'Mobile Applications',
    icon: <FaMobileAlt />,
    summary: 'Jobify',
    description: 'iOS app for job postings and applications, built in Xcode and connected to Firebase and Cloudinary.',
  },
];

function Projects() {
  return (
    <section id="projects" className="page-shell">
      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <p className="eyebrow mb-2">🚀 Projects</p>
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
              <div className="glass-card p-4 h-100">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="text-primary">{project.icon}</span>
                  <div>
                    <h2 className="h5 fw-bold mb-1">{project.title}</h2>
                    <p className="mb-0 text-light-emphasis small">{project.summary}</p>
                  </div>
                </div>
                <p className="mb-0">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;