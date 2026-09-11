import { motion } from 'framer-motion';
import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
import Card from '../components/Card';
import cvFile from '../assets/Maryam Ahmed__CV.pdf';

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'mariamisa5w@gmail.com',
    href: 'mailto:mariamisa5w@gmail.com',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'MariamAhmed004',
    href: 'https://github.com/MariamAhmed004',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'Maryam Ahmed',
    href: 'https://linkedin.com/in/maryam-ahmed-932532250',
  },
  {
    icon: <FaFilePdf />,
    label: 'CV',
    value: 'View my CV',
    href: cvFile,
  },
];

function Contact() {
  return (
    <section id="contact" className="page-shell">
      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
            
          <h1 className="display-5 fw-bold mb-3">Let’s connect</h1>
          <p className="lead text-light-emphasis mb-0">
            Interested in collaboration, opportunities, or discussing a project? Reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="row g-4">
          <div className="col-12">
            <div className="contact-grid">
              {contactItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="contact-grid-item"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.08, duration: 0.4 }}
                >
                  <a href={item.href} target="_blank" rel="noreferrer" className="text-decoration-none d-block h-100">
                    <Card className="info-card" leading={<div className="text-primary">{item.icon}</div>} title={item.label} content={<p className="mb-0 small text-light-emphasis">{item.value}</p>} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;