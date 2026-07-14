import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
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
    <section id="hero">
      <div className="align-items-center container ">
        <div className="row align-items-center g-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Removed section label breadcrumb */}
            <h1 className="display-4 fw-bold mb-3">Maryam Ahmed</h1>
            <p className="h3 text-primary mb-3">Software Developer</p>
            <div className="mb-4">
              <img src="/path/to/your/image.jpg" alt="Profile Picture" className="rounded-circle img-fluid" style={{ width: '150px', height: '150px' }} />
            </div>
            <p className="lead text-light-emphasis mb-4">
              Fresh graduate in ICT and Full Stack Developer with practical experience in web-based systems,
              SaaS platforms, and enterprise applications. Passionate about creating efficient,
              user-focused solutions, with strengths in automation, AI adaptation, and modern best practices.
            </p>
            <div className="d-flex flex-wrap gap-3 mb-4 justify-content-center">
              <a href="#about" className="btn btn-primary px-5 py-2">
                Explore my story
                <FaArrowRight className="ms-2" />
              </a>
              <a href="#contact" className="btn btn-outline-light px-5 py-2">
                Contact me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;