import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import Card from '../components/Card';
import { FaChartLine, FaChevronLeft, FaChevronRight, FaDesktop, FaDownload, FaGamepad, FaGithub, FaMobileAlt, FaProjectDiagram, FaServer, FaTimes } from 'react-icons/fa';
import automationImage from '../assets/Batelco-Dashboard.jpeg';
import architectureImage from '../assets/BTC-ArchitectureDiagram.png';
import cImage from '../assets/csharp.jpeg';
import gameImage from '../assets/Games.png';
import webImage from '../assets/LedgerLink.jpeg';
import usecaseImage from '../assets/Use Case Model-leadgerlink.bmp';
import mobileImage from '../assets/Jobify.png';
import city311Pdf from '../assets/analytics/citi311Power BI.pdf';
import chicago311Image from '../assets/311-chicago.png';
import nyc311Image from '../assets/nyc311.png';
import electricityPdf from '../assets/analytics/VortexAnalytics_Electricity Generation from Wind_Workbook.pdf';
import textileDashboard from '../assets/analytics/import textile.png';
import textilePdf from '../assets/analytics/Data Sprint - Data Minds - textile imports and reexports.pdf';
import flightDashboard from '../assets/analytics/flight delays.png';
import flightPdf from '../assets/analytics/Capstone Project - US Flight Delays.pdf';
import electricityDashboard from '../assets/analytics/windturbines-dash.jpeg';
import premierLeagueImage from '../assets/premierleague.png';
import rentopsdesktopImage from '../assets/rentop-desktop.png';
import borrowChargerImage from '../assets/PHP.png';

const webProjects = [
  {
    title: 'LedgerLink',
    summary: 'SaaS platform for SMEs in Bahrain',
    description: 'A SaaS platform for small and medium-sized businesses with multi-organization management, branch operations, inventory, dashboards, notifications, and AI-assisted business insights.',
    technologies: ['ASP.NET', 'React.js', 'Azure SQL', 'Gemini API', 'Highcharts'],
    images: [webImage, usecaseImage],
    repositoryUrl: 'https://github.com/MariamAhmed004/LeadgerLink',
  },
  {
    title: 'RentOps',
    summary: 'Rental management platform',
    description: 'A role-based equipment rental system for customers, employees, and administrators with rental requests, dashboards, notifications, audit logs, and shared models with the desktop application.',
    technologies: ['C#', 'ASP.NET Core MVC', 'SQL', 'Entity Framework'],
    image: cImage,
    repositoryUrl: 'https://github.com/Maryam308/RentOps',
  },
  {
    title: 'Borrow My Charger',
    summary: 'EV charging use case',
    description: 'A platform for finding and booking available EV charging stations, with station management, time-slot availability, multiple user roles, and administration tools.',
    technologies: ['JavaScript', 'HTML', 'CSS','PHP'],
    repositoryUrl: 'https://github.com/MariamAhmed004/BorrowMyCharger',
    image: borrowChargerImage,
  },
];

const desktopProjects = [
  {
    title: 'RentOps Desktop',
    summary: 'Windows rental management tool',
    description: 'An equipment rental management application for administrators and employees to manage assets, users, employees, and rental transactions.',
    technologies: ['C#', '.NET', 'SQL', 'Entity Framework'],
    image: rentopsdesktopImage,
  },
  {
    title: 'Premier League',
    summary: 'Java sports league management app',
    description: 'A Java desktop application for managing Premier League teams, players, captains, and team-management operations with serialized data persistence.',
    technologies: ['Java', 'NetBeans', 'Java Serialization'],
    image: premierLeagueImage,
  },
];

const analyticsProjects = [
  {
    title: 'City311 Requests Analysis',
    summary: 'Power BI dashboard for city service requests',
    description: 'Analysis of 311 service-request data from official New York City and Chicago government data portals from 2019 to 2022, comparing trends and patterns across both cities.',
    tools: 'Power BI, Data Transformation, Data Visualization',
    images: [chicago311Image, nyc311Image],
    pdf: city311Pdf,
  },
  {
    title: 'Electricity Generation Analysis',
    summary: 'Tableau story about wind turbine efficiency',
    description: 'Analysis of U.S. electricity-generation data focused on wind facilities, turbine deployment, plant performance, and potential locations for future renewable-energy investment.',
    tools: 'Python, Tableau, Data Analysis, Data Visualization',
    dashboardImage: electricityDashboard,
    pdf: electricityPdf,
  },
  {
    title: 'Bahrain Textile Import & Re-export',
    summary: 'Tableau analysis of official Bahrain trade data',
    description: 'Analysis of official Bahrain textile import and re-export data from 2021 to 2025 to identify market activity and support investment decisions.',
    tools: 'Python, Tableau, Data Analysis, Data Visualization',
    dashboardImage: textileDashboard,
    pdf: textilePdf,
  },
  {
    title: 'Flight Delays Analysis',
    summary: 'Tableau analysis of flight delays',
    description: 'Analysis of U.S. airline flight-delay data from 2024 and 2025, with interactive departure and arrival delay views and airline-level filtering.',
    tools: 'Python, Tableau, Data Analysis, Interactive Dashboards',
    dashboardImage: flightDashboard,
    pdf: flightPdf,
  },
];

const projects = [
  {
    title: 'Automation & Workflow Systems',
    icon: <FaServer />,
    summary: 'Billing Reconciliation Automation & Monitoring',
    description: 'Automation, monitoring, and reconciliation solutions that connect backend processing with practical operational visibility.',
    details: 'A billing reconciliation and monitoring system that uses PL/SQL packages to identify discrepancies, Linux scripts for scheduled processing, a web dashboard for manual triggers and monitoring, and email notifications for completed results. The solution integrates Linux, database, SMTP, and web application servers.',
    technologies: ['PL/SQL', 'SQL Server', 'Linux Shell', 'SMTP'],
    images: [automationImage, architectureImage],
    repositoryUrl: 'https://github.com/MariamAhmed004/BTC_ReconciliationAutomation',
  },
  {
    title: 'Web Development',
    icon: <FaProjectDiagram />,
    summary: 'LedgerLink, RentOps, Borrow My Charger',
    description: 'Business and consumer web applications focused on SaaS operations, equipment rental, and EV charging workflows.',
    technologies: ['ASP.NET', 'React.js', 'SQL', 'JavaScript'],
    type: 'web',
  },
  {
    title: 'Data Analytics',
    icon: <FaChartLine />,
    summary: 'Four dashboard and visualization projects',
    description: 'Data projects that turn public, operational, and business datasets into interactive dashboards, comparisons, and decision-ready insights.',
    technologies: ['Python', 'Power BI', 'Tableau', 'Data Visualization'],
    details: 'Select this project to browse the analytics work, view dashboard previews, and download the related project PDFs.',
    type: 'analytics',
  },
  {
    title: 'Mobile Applications',
    icon: <FaMobileAlt />,
    summary: 'Jobify',
    description: 'Mobile applications that connect users with practical services through focused workflows and cloud-backed functionality.',
    details: 'Jobify is an iOS application built with Swift and Xcode for posting, discovering, and applying for jobs.Additionally, it always access to learning resources added by the admin. It uses Firebase Authentication and Database for user and job data, and Cloudinary for job-posting images.',
    technologies: ['Swift', 'Xcode', 'Firebase', 'Cloudinary'],
    image: mobileImage,
    repositoryUrl: 'https://github.com/Maryam308/Jobify',
  },
  {
    title: 'Game Development',
    icon: <FaGamepad />,
    summary: 'OperationExoQuest',
    description: 'Interactive game experiences built around exploration, puzzles, player interaction, and level design.',
    details: 'Operation ExoQuest is a single-player 2D/3D puzzle adventure built with Unity and C#. It includes three levels across different worlds, with unique environments, obstacles, puzzles, collectibles, and room-based exploration objectives.',
    technologies: ['C#', 'Unity'],
    image: gameImage,
  },
  {
    title: 'Desktop Applications',
    icon: <FaDesktop />,
    summary: 'RentOps Desktop, Premier League',
    description: 'Desktop tools for rental operations and sports league administration, with database-backed and serialized data solutions.',
    technologies: ['Java', 'C#', '.NET', 'SQL'],
    type: 'desktop',
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(null);

  const activeGalleryProject = selectedGallery && selectedGalleryIndex !== null
    ? selectedGallery.items[selectedGalleryIndex]
    : null;
  const activeProject = activeGalleryProject || selectedProject;

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedGallery(null);
    setSelectedGalleryIndex(null);
  };

  const showGalleryProject = (direction) => {
    setSelectedGalleryIndex((currentIndex) => (currentIndex + direction + selectedGallery.items.length) % selectedGallery.items.length);
  };

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

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="projects-grid-item"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
            >
              <Card
                className="education-card project-card h-100 d-flex flex-column"
                leading={<span className="education-card-icon">{project.icon}</span>}
                title={project.title}
                subtitle={<span className="mb-0 text-light-emphasis small">{project.summary}</span>}
                content={<p className="mb-3">{project.description}</p>}
                footer={(
                  <div className="project-card-footer">
                    <div className="project-tags" aria-label={`${project.title} technologies`}>
                      {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-light btn-sm"
                      onClick={() => {
                        if (project.type) {
                          setSelectedProject(null);
                          const galleryItems = project.type === 'analytics'
                            ? analyticsProjects
                            : project.type === 'web' ? webProjects : desktopProjects;
                          setSelectedGallery({ type: project.type, items: galleryItems });
                          setSelectedGalleryIndex(0);
                        } else {
                          setSelectedGallery(null);
                          setSelectedGalleryIndex(null);
                          setSelectedProject(project);
                        }
                      }}
                    >
                      View details
                    </button>
                  </div>
                )}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ background: 'rgba(0, 0, 0, 0.8)', zIndex: 1050 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <Card
              className="glass-card project-modal-card p-4 rounded-4 shadow-lg"
              style={{ maxWidth: '720px', width: 'min(92vw, 720px)' }}
              initial={{ scale: 0.96, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 16 }}
              onClick={(event) => event.stopPropagation()}
            >
              {selectedGallery && (
                <div className="project-modal-navigation" aria-label={`${selectedGallery.type} project navigation`}>
                  <button type="button" className="btn btn-outline-light btn-sm" aria-label="Previous project" onClick={() => showGalleryProject(-1)}>
                    <FaChevronLeft />
                  </button>
                  <span>{selectedGalleryIndex + 1} / {selectedGallery.items.length}</span>
                  <button type="button" className="btn btn-outline-light btn-sm" aria-label="Next project" onClick={() => showGalleryProject(1)}>
                    <FaChevronRight />
                  </button>
                </div>
              )}

              <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                <div>
                  <h3 className="h4 fw-bold mb-1">{activeProject.title}</h3>
                  <p className="mb-0 text-light-emphasis">{activeProject.summary}</p>
                </div>
                <button
                  type="button"
                  className="btn btn-close-white btn-sm"
                  aria-label="Close project details"
                  onClick={closeModal}
                >
                  <FaTimes />
                </button>
              </div>

              {(activeProject.images || [activeProject.dashboardImage || activeProject.image].filter(Boolean)).length > 0 ? (
                <div className={`project-modal-image-grid${activeProject.images?.length > 1 ? ' has-multiple' : ''}`}>
                  {(activeProject.images || [activeProject.dashboardImage || activeProject.image].filter(Boolean)).map((image, imageIndex) => (
                    <img
                      key={image}
                      src={image}
                      alt={`${activeProject.title} preview ${imageIndex + 1}`}
                      className="project-modal-image rounded-3"
                    />
                  ))}
                </div>
              ) : (
                <div
                  className="project-modal-placeholder d-flex align-items-center justify-content-center rounded-3 mb-3 border border-secondary"
                >
                  <span className="text-light-emphasis">Preview image coming soon</span>
                </div>
              )}

              <p className="mb-3">{activeProject.description}</p>
              {activeProject.tools && <p className="mb-3 text-light-emphasis"><strong>Tools used:</strong> {activeProject.tools}</p>}
              {activeProject.technologies && (
                <div className="project-tags project-modal-tags" aria-label={`${activeProject.title} technologies`}>
                  {activeProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
              )}
              {activeProject.repositoryUrl && (
                <a className="btn btn-outline-light btn-sm me-2" href={activeProject.repositoryUrl} target="_blank" rel="noreferrer">
                  <FaGithub className="me-2" /> View repository
                </a>
              )}
              {activeProject.pdf && (
                <a className="btn btn-outline-light btn-sm" href={activeProject.pdf} download>
                  <FaDownload className="me-2" /> Download project PDF
                </a>
              )}
              {activeProject.details && <p className="mb-0 mt-3 text-light-emphasis">{activeProject.details}</p>}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;