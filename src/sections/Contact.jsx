import { motion } from 'framer-motion';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <motion.section
      id="contact"
      className="p-5 container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-4">
        <h2 className="display-6">Contact</h2>
        <p className="text-muted">Get in touch — I'm open to internships, collaborations, and full-time opportunities.</p>
      </div>

      <div className="row g-4 align-items-start">
        <div className="col-12 col-md-4">
          <motion.div className="card shadow-sm text-center p-3" whileHover={{ scale: 1.02 }} transition={{ duration: 0.18 }}>
            <img src="https://via.placeholder.com/220x220?text=Avatar" alt="Maryam Ahmed" className="rounded-circle img-fluid mx-auto d-block mb-3" style={{width:220,height:220,objectFit:'cover'}} />
            <h5 className="mb-1">Maryam Ahmed</h5>
            <div className="text-muted mb-2">Software Developer</div>
            <div className="mb-2"><strong>Nationality:</strong> Bahraini</div>

            <div className="d-flex flex-column align-items-start">
              <a href="tel:+97337766860" className="text-decoration-none text-dark mb-2"><AiOutlinePhone className="me-2" />+973 37766860</a>
              <a href="mailto:mariamisa5w@gmail.com" className="text-decoration-none text-dark mb-2"><AiOutlineMail className="me-2" />mariamisa5w@gmail.com</a>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-3">
              <a href="https://github.com/MariamAhmed004" target="_blank" rel="noreferrer" className="text-dark fs-5"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/maryam-ahmed-932532250" target="_blank" rel="noreferrer" className="text-primary fs-5"><FaLinkedin /></a>
            </div>
          </motion.div>
        </div>

        <div className="col-12 col-md-8">
          <motion.div className="card shadow-sm p-4" whileHover={{ y: -3 }} transition={{ duration: 0.18 }}>
            <h5 className="card-title">Profile Summary</h5>
            <p>
              I am a motivated final-year ICT student and Full Stack Developer with practical experience building web-based systems, SaaS platforms, and enterprise applications. I focus on building efficient, user-focused solutions using modern technologies and best practices. I enjoy collaborating with cross-functional teams and learning new tools that improve product quality and developer productivity.
            </p>

            <div className="row g-3">
              <div className="col-12 col-md-6">
                <div className="mb-2"><strong>GitHub</strong></div>
                <a href="https://github.com/MariamAhmed004" target="_blank" rel="noreferrer">github.com/MariamAhmed004</a>
              </div>

              <div className="col-12 col-md-6">
                <div className="mb-2"><strong>LinkedIn</strong></div>
                <a href="https://www.linkedin.com/in/maryam-ahmed-932532250" target="_blank" rel="noreferrer">linkedin.com/in/maryam-ahmed-932532250</a>
              </div>
            </div>

            <hr />

            <div>
              <h6 className="mb-2">Languages</h6>
              <div className="d-flex gap-2 flex-wrap">
                <span className="badge bg-primary">Arabic (native)</span>
                <span className="badge bg-secondary">English (excellent)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;