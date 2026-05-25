import { motion } from 'framer-motion';
import { FaEnvelope, FaGlobe, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const contactItems = [
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+973 37766860',
    href: 'tel:+97337766860',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'mariamisa5w@gmail.com',
    href: 'mailto:mariamisa5w@gmail.com',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/MariamAhmed004',
    href: 'https://github.com/MariamAhmed004',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/maryam-ahmed-932532250',
    href: 'https://linkedin.com/in/maryam-ahmed-932532250',
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
          <p className="eyebrow mb-2">📞 Contact</p>
          <h1 className="display-5 fw-bold mb-3">Let’s connect</h1>
          <p className="lead text-light-emphasis mb-0">
            Interested in collaboration, opportunities, or discussing a project? Reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="row g-4">
          <div className="col-lg-5">
            <motion.div
              className="glass-card p-4 h-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h2 className="h4 fw-bold mb-3">Contact details</h2>
              <ul className="list-unstyled mb-0">
                <li className="mb-3"><strong>Nationality:</strong> Bahraini</li>
                <li className="mb-3"><strong>Location:</strong> Bahrain</li>
                <li className="mb-0"><strong>Availability:</strong> Open to full-time, part-time, and collaborative opportunities</li>
              </ul>
            </motion.div>
          </div>

          <div className="col-lg-7">
            <div className="row g-3">
              {contactItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="col-md-6"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.08, duration: 0.4 }}
                >
                  <a href={item.href} target="_blank" rel="noreferrer" className="info-card text-decoration-none d-block h-100">
                    <div className="d-flex align-items-center gap-3">
                      <div className="text-primary">{item.icon}</div>
                      <div>
                        <p className="mb-1 fw-semibold text-light">{item.label}</p>
                        <p className="mb-0 small text-light-emphasis">{item.value}</p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="glass-card p-4 mt-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <div className="d-flex align-items-center gap-2 mb-2">
            <FaGlobe className="text-primary" />
            <h2 className="h5 fw-bold mb-0">Find me online</h2>
          </div>
          <p className="mb-0 text-light-emphasis">
            GitHub and LinkedIn are available for a deeper look at technical projects, collaborative work, and professional background.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;