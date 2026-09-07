import { motion } from 'framer-motion';
import { FaAws, FaCode, FaDatabase, FaGithub, FaJs, FaPython, FaTools } from 'react-icons/fa';

const Motion = motion.div;

const sections = [
  {
    title: 'Languages',
    icon: <FaCode />,
    items: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'C++', icon: <FaCode /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'SQL', icon: <FaDatabase /> },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: <FaTools />,
    items: [
      { name: '.NET Framework', icon: <FaCode /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Power Apps', icon: <FaTools /> },
    ],
  },
  {
    title: 'Data Analytics',
    icon: <FaDatabase />,
    items: [
      { name: 'Oracle SQL', icon: <FaDatabase /> },
      { name: 'PL/SQL', icon: <FaCode /> },
      { name: 'Data Automation', icon: <FaTools /> },
      { name: 'Reporting', icon: <FaDatabase /> },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="page-shell">
      <div className="container py-5">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
              <h1 className="display-5 fw-bold mb-3">Technical skills</h1>
          <p className="lead text-light-emphasis mb-0">
                A practical toolkit spanning development, platforms, and data-focused problem solving.
          </p>
        </Motion>

            <div className="skills-grid">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
                  className="skill-panel"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
            >
                  <div className="skill-panel-heading">
                    <span className="skill-panel-icon">{section.icon}</span>
                    <h2>{section.title}</h2>
                  </div>
                  <div className="skill-items">
                    {section.items.map((item) => (
                      <div className="skill-item" key={item.name}>
                        <span className="skill-item-icon">{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;