import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaCode />,
    title: 'Full Stack Development',
    description: 'Web, desktop, and mobile solutions with a practical delivery focus.',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Automation & AI Adaptation',
    description: 'Process automation, data workflows, and modern platforms built with efficiency in mind.',
  },
  {
    icon: <FaRocket />,
    title: 'User-Focused Delivery',
    description: 'Designing solutions that are reliable, clear, and easy to use for real-world teams.',
  },
];

function Hero() {
  return (
    <section id="hero" className="page-shell">
      <div className="container py-5">
        <div className="row align-items-center g-4">
          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
              {/* Removed section label breadcrumb */}
            <h1 className="display-4 fw-bold mb-3">Maryam Ahmed</h1>
            <p className="h3 text-primary mb-3">Software Developer</p>
            <p className="lead text-light-emphasis mb-4">
              Fresh graduate in ICT and Full Stack Developer with practical experience in web-based systems,
              SaaS platforms, and enterprise applications. Passionate about creating efficient,
              user-focused solutions, with strengths in automation, AI adaptation, and modern best practices.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4">
              <Link to="/about" className="btn btn-primary">
                Explore my story
                <FaArrowRight className="ms-2" />
              </Link>
              <Link to="/contact" className="btn btn-outline-light">
                Contact me
              </Link>
            </div>

            <div className="row g-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="col-md-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.4 }}
                >
                  <div className="info-card h-100">
                    <div className="text-primary mb-2">{item.icon}</div>
                    <h2 className="h6 fw-bold mb-2">{item.title}</h2>
                    <p className="mb-0 text-light-emphasis small">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-card p-4">
              <p className="text-uppercase small text-primary fw-semibold mb-2">At a glance</p>
              <ul className="list-unstyled mb-0">
                <li className="mb-3"><strong>Education:</strong> B.I.C.T – Bahrain Polytechnic</li>
                <li className="mb-3"><strong>Focus:</strong> Web, automation, and enterprise application development</li>
                <li className="mb-3"><strong>Tools:</strong> .NET, ASP.NET, React, Azure, SQL, GitHub</li>
                <li className="mb-0"><strong>Languages:</strong> Arabic and English</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;