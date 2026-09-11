import { motion } from 'framer-motion';
import { FaChartBar, FaChartLine, FaCode, FaDatabase, FaFileExcel, FaGamepad, FaGithub, FaJava, FaPlug, FaPython, FaTools } from 'react-icons/fa';
import { TbBrandCSharp } from "react-icons/tb";

const Motion = motion.div;

const sections = [
  {
    title: 'Languages',
    icon: <FaCode />,
    items: [
      { name: 'C#', icon: <TbBrandCSharp /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'SQL & PL/SQL', icon: <FaDatabase /> },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: <FaTools />,
    items: [
      { name: 'Git', icon: <FaGithub /> },
      { name: 'REST API', icon: <FaPlug /> },
      { name: '.NET Framework', icon: <FaCode /> },
      { name: 'Unity', icon: <FaGamepad /> },
    ],
  },
  {
    title: 'Data Analytics',
    icon: <FaDatabase />,
    items: [
      { name: 'Power BI', icon: <FaChartLine /> },
      { name: 'Tableau', icon: <FaChartBar /> },
      { name: 'Python Pandas', icon: <FaPython /> },
      { name: 'Excel', icon: <FaFileExcel /> },
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