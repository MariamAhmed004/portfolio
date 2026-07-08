import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaStar } from 'react-icons/fa';

function About() {
  const timelineItem = (title, role, period, points) => (
    <div style={{ position: 'relative', paddingLeft: 18, marginBottom: 18 }}>
      <div style={{ position: 'absolute', left: -2, top: 2, width: 10, height: 10, borderRadius: 10, background: '#6c757d' }} />
      <div className="d-flex justify-content-between">
        <div>
          <h6 className="mb-1">{title}</h6>
          <div className="small text-muted mb-2">{role}</div>
        </div>
        <div className="small text-muted">{period}</div>
      </div>
      <ul className="small mb-0">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <motion.section id="about" className="p-5 container" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div className="text-center mb-5">
        <h2 className="display-6">About & Experience</h2>
        <p className="text-muted">A clear, spaced layout that separates profile, experience, education and certifications. Each entry has room for logos or screenshots.</p>
      </div>

      {/* Profile - single centered card */}
      <div className="mb-5 d-flex justify-content-center">
        <motion.div className="card shadow-sm bg-dark text-light border-0" style={{ maxWidth: 900, width: '100%' }} whileHover={{ scale: 1.01 }} transition={{ duration: 0.18 }}>
          <div className="row g-0 align-items-center">
            <div className="col-12 col-md-3 text-center p-4">
              <img src="/avatar.jpg" alt="Maryam Ahmed" className="rounded-circle img-fluid" style={{ width: 140, height: 140, objectFit: 'cover', border: '2px solid rgba(255,255,255,0.06)' }} />
            </div>
            <div className="col-12 col-md-9 p-4">
              <h4 className="mb-1">Maryam Ahmed</h4>
              <div className="text-muted mb-2">Software Developer — Final-year ICT student</div>
              <p className="small mb-2">Motivated full stack developer with practical experience in developing web-based systems, SaaS platforms, and enterprise applications. Passionate about building efficient, user-focused solutions using modern technologies and best practices.</p>
              <div className="d-flex gap-2 flex-wrap small">
                <span className="badge bg-light text-dark">Bahrain Polytechnic</span>
                <span className="badge bg-light text-dark">GPA 3.7/4</span>
                <span className="badge bg-light text-dark">Available for opportunities</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Experience - stacked cards with logo placeholder */}
      <div className="mb-5">
        <div className="d-flex align-items-center mb-3"><FaBriefcase className="me-2" /> <h5 className="mb-0">Experience</h5></div>

        <div className="d-flex flex-column gap-3">
          <motion.div className="card shadow-sm p-3" whileHover={{ y: -4 }} transition={{ duration: 0.18 }}>
            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <div style={{ width: 96, height: 96 }} className="bg-light d-flex align-items-center justify-content-center rounded">
                  <img src="https://via.placeholder.com/80?text=Logo" alt="Dimuma logo" style={{ maxWidth: 80 }} />
                </div>
              </div>
              <div className="col">
                <h6 className="mb-1">Dimuma Company</h6>
                <div className="small text-muted mb-2">Part-Time Full Stack Developer — Oct 2025 – Nov 2025</div>
                <ul className="small mb-0">
                  <li>Developed full-stack features using ASP.NET Core web pages and SQL procedures.</li>
                  <li>Assisted in resolving code conflicts on source control.</li>
                  <li>Contributed to project documentation.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div className="card shadow-sm p-3" whileHover={{ y: -4 }} transition={{ duration: 0.18 }}>
            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <div style={{ width: 96, height: 96 }} className="bg-light d-flex align-items-center justify-content-center rounded">
                  <img src="https://via.placeholder.com/80?text=Logo" alt="Dimuma trainee" style={{ maxWidth: 80 }} />
                </div>
              </div>
              <div className="col">
                <h6 className="mb-1">Dimuma Company</h6>
                <div className="small text-muted mb-2">Trainee — Jul 2025 – Sep 2025</div>
                <ul className="small mb-0">
                  <li>Supported database design and normalization tasks.</li>
                  <li>Collaborated with senior developers to troubleshoot issues.</li>
                  <li>Contributed to testing processes and auditing documentation.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div className="card shadow-sm p-3" whileHover={{ y: -4 }} transition={{ duration: 0.18 }}>
            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <div style={{ width: 96, height: 96 }} className="bg-light d-flex align-items-center justify-content-center rounded">
                  <img src="https://via.placeholder.com/80?text=Logo" alt="AFS logo" style={{ maxWidth: 80 }} />
                </div>
              </div>
              <div className="col">
                <h6 className="mb-1">Arab Financial Company (AFS)</h6>
                <div className="small text-muted mb-2">Trainee, IT Infrastructure — Jul 2023 – Aug 2023</div>
                <ul className="small mb-0">
                  <li>Prepared documentation of standards & procedures and created infrastructure diagrams.</li>
                  <li>Shadowed senior engineers to gain hands-on exposure to infrastructure operations.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-5">
        <div className="d-flex align-items-center mb-3"><FaGraduationCap className="me-2" /> <h5 className="mb-0">Education</h5></div>
        <div className="d-flex flex-column gap-3">
          <motion.div className="card shadow-sm p-3 d-flex align-items-center" whileHover={{ y: -3 }} transition={{ duration: 0.15 }}>
            <div className="d-flex align-items-center w-100">
              <div className="me-3" style={{ width: 84, height: 84 }}>
                <img src="https://via.placeholder.com/80?text=Logo" alt="Bahrain Polytechnic" className="img-fluid rounded" />
              </div>
              <div>
                <div className="fw-bold">Bachelor of Information Communication Technology</div>
                <div className="small text-muted">Bahrain Polytechnic (2022 - 2026) • GPA: 3.7/4</div>
              </div>
            </div>
          </motion.div>

          <motion.div className="card shadow-sm p-3 d-flex align-items-center" whileHover={{ y: -3 }} transition={{ duration: 0.15 }}>
            <div className="d-flex align-items-center w-100">
              <div className="me-3" style={{ width: 84, height: 84 }}>
                <img src="https://via.placeholder.com/80?text=Logo" alt="Jidhafs Secondary" className="img-fluid rounded" />
              </div>
              <div>
                <div className="fw-bold">Secondary General Education — Physics & Math</div>
                <div className="small text-muted">Jidhafs Secondary Girls School (2019 - 2022) • 99.0/100</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-5">
        <div className="d-flex align-items-center mb-3"><FaCertificate className="me-2" /> <h5 className="mb-0">Certifications & Workshops</h5></div>
        <div className="row g-3">
          <div className="col-12 col-md-6 col-lg-4">
            <motion.div className="card shadow-sm p-3 text-center" whileHover={{ scale: 1.02 }} transition={{ duration: 0.12 }}>
              <img src="https://via.placeholder.com/200x120?text=Cert" alt="Think Smart" className="img-fluid mb-2" />
              <div className="fw-bold">Think Smart</div>
              <div className="small text-muted">Soft Skill Development — Feb 2025</div>
            </motion.div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <motion.div className="card shadow-sm p-3 text-center" whileHover={{ scale: 1.02 }} transition={{ duration: 0.12 }}>
              <img src="https://via.placeholder.com/200x120?text=Cert" alt="Microsoft Power" className="img-fluid mb-2" />
              <div className="fw-bold">Microsoft</div>
              <div className="small text-muted">Power Platform Developer Associate — Jan 2025</div>
            </motion.div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <motion.div className="card shadow-sm p-3 text-center" whileHover={{ scale: 1.02 }} transition={{ duration: 0.12 }}>
              <img src="https://via.placeholder.com/200x120?text=Cert" alt="Kerne" className="img-fluid mb-2" />
              <div className="fw-bold">Kerne</div>
              <div className="small text-muted">Machine Learning Olympiad — Mar 2023</div>
            </motion.div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <motion.div className="card shadow-sm p-3 text-center" whileHover={{ scale: 1.02 }} transition={{ duration: 0.12 }}>
              <img src="https://via.placeholder.com/200x120?text=Cert" alt="Brinc" className="img-fluid mb-2" />
              <div className="fw-bold">Brinc</div>
              <div className="small text-muted">Batelco Digital Bootcamp — Jul 2022 – Jan 2023</div>
            </motion.div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <motion.div className="card shadow-sm p-3 text-center" whileHover={{ scale: 1.02 }} transition={{ duration: 0.12 }}>
              <img src="https://via.placeholder.com/200x120?text=Cert" alt="Alison" className="img-fluid mb-2" />
              <div className="fw-bold">Alison</div>
              <div className="small text-muted">Management Information Systems — 2022</div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;