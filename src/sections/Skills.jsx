import { motion } from 'framer-motion';
import { FaCode, FaCogs, FaLightbulb, FaTools } from 'react-icons/fa';

const sections = [
  {
    title: 'Technical Skills',
    icon: <FaCode />,
    items: ['Programming & Development: Web, mobile, desktop solutions.', 'Database & Automation: SQL design, PL/SQL procedures, Linux scheduling.', 'Web Technologies: .NET Framework, ASP.NET, modern frontend libraries.'],
  },
  {
    title: 'Tools & Platforms',
    icon: <FaTools />,
    items: ['Visual Studio, VS Code, Xcode, GitHub, Azure DevOps, Oracle SQL Developer, Unity, AWS, Microsoft Power Apps.'],
  },
  {
    title: 'Soft Skills',
    icon: <FaLightbulb />,
    items: ['Strong teamwork and collaboration.', 'Thrives under pressure, delivers results.', 'Excellent time management and prioritization.'],
  },
];

function Skills() {
  return (
    <section id="skills" className="page-shell">
      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
              {/* Removed section label eyebrow */}
          <h1 className="display-5 fw-bold mb-3">A balanced mix of technical and collaborative strengths</h1>
          <p className="lead text-light-emphasis mb-0">
            These skills reflect both the development work I’ve completed and the day-to-day habits that help me deliver results.
          </p>
        </motion.div>

        <div className="row g-4">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="col-lg-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
            >
              <div className="glass-card p-4 h-100">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="text-primary">{section.icon}</span>
                  <h2 className="h4 fw-bold mb-0">{section.title}</h2>
                </div>
                <ul className="mb-0 ps-3">
                  {section.items.map((item) => (
                    <li key={item} className="mb-3">{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="glass-card p-4 mt-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <div className="d-flex align-items-center gap-2 mb-2">
            <FaCogs className="text-primary" />
            <h2 className="h5 fw-bold mb-0">Highlights</h2>
          </div>
          <p className="mb-0 text-light-emphasis">
            I work comfortably across backend automation, frontend development, database design, and cross-functional delivery.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;