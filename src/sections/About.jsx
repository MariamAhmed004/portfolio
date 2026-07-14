import { motion } from 'framer-motion';
import Card from '../components/Card';
import {
  FaBriefcase,
  FaCertificate,
  FaGraduationCap,
  FaLanguage,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const education = [
  {
    title: 'Bachelor of Information Communication Technology',
    meta: 'GPA 3.81/4 · Bahrain Polytechnic · 2022 – 2026',
  },
  {
    title: 'Secondary General Education – Physics and Math',
    meta: '99.0/100 · Jidhafs Secondary Girls School · 2019 – 2022',
  },
];

const certifications = [
  'Think Smart – Soft Skill Development (Feb 2025)',
  'Microsoft – Power Platform Developer Associate (Jan 2025)',
  'Kerne – Machine Learning Olympiad (Mar 2023)',
  'Brinc – Batelco Digital Bootcamp (Jul 2022 – Jan 2023) – 1st prize in hackathon',
  'Alison – Management Information Systems Course (2022)',
];

const experience = [
  {
    role: 'Batelco by Beyon – Industrial Trainee',
    period: 'Feb 2026 – May 2026',
    details: ['Implemented database automation and reconciliation procedures with PL/SQL packages.', 'Designed and tested Linux cron-based scheduling scripts.', 'Assisted in developing a dashboard concept for workflow monitoring.'],
  },
  {
    role: 'Dimuma Company – Part-Time Full Stack Developer',
    period: 'Oct 2025 – Nov 2025',
    details: ['Developed ASP.NET Core features and SQL procedures.', 'Resolved source control conflicts.', 'Contributed to project documentation.'],
  },
  {
    role: 'Dimuma Company – Trainee',
    period: 'Jul 2025 – Sep 2025',
    details: ['Supported database design and normalization.', 'Troubleshot issues with senior developers.', 'Assisted in testing and auditing documentation.'],
  },
  {
    role: 'Arab Financial Company (AFS) – IT Infrastructure Trainee',
    period: 'Jul 2023 – Aug 2023',
    details: ['Prepared documentation of standards & procedures.', 'Created infrastructure diagrams.', 'Shadowed engineers for hands-on exposure.'],
  },
];

function About() {
  return (
    <section id="about" className="page-shell">
      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
            {/* Removed section label eyebrow */}
          <h1 className="display-5 fw-bold mb-3">A developer focused on practical impact</h1>
          <p className="lead text-light-emphasis mb-0">
            I enjoy building reliable, user-centered systems across web, automation, and enterprise environments.
          </p>
        </motion.div>

        <div className="row g-4">
          <div>
            <motion.div
              className="glass-card-wrapper"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Card
                className="glass-card p-4 mb-4"
                title={<span className="h4 fw-bold">About</span>}
                content={(
                  <p className="mb-0">
                    Fresh graduate in ICT and Full Stack Developer with practical experience in developing web-based systems,
                    SaaS platforms, and enterprise applications. Passionate about creating efficient, user-focused solutions,
                    with strengths in automation, AI adaptation, and modern best practices.
                  </p>
                )}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaGraduationCap className="text-primary" />
                <h2 className="h4 fw-bold mb-0">Education</h2>
              </div>
              <div className="vstack gap-3">
                {education.map((item) => (
                  <Card key={item.title} className="info-card" title={<span className="h6 fw-bold mb-1">{item.title}</span>} content={<p className="mb-0 small text-light-emphasis">{item.meta}</p>} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaBriefcase className="text-primary" />
                <h2 className="h4 fw-bold mb-0">Experience</h2>
              </div>
              <div className="vstack gap-3">
                {experience.map((item) => (
                  <Card
                    key={item.role}
                    className="info-card"
                    title={<div className="d-flex justify-content-between flex-wrap gap-2 align-items-start"><span className="h6 fw-bold mb-0">{item.role}</span><span className="badge bg-primary-subtle text-dark fw-semibold">{item.period}</span></div>}
                    content={<ul className="mb-0 ps-3">{item.details.map((detail) => (<li key={detail}>{detail}</li>))}</ul>}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-4"
            >
              <Card
                className="glass-card p-4"
                title={<div className="d-flex align-items-center gap-2 mb-0"><FaCertificate className="text-primary" /><span className="h4 fw-bold mb-0">Certifications</span></div>}
                content={(
                  <ul className="mb-0 ps-3">
                    {certifications.map((item) => (
                      <li key={item} className="mb-2">{item}</li>
                    ))}
                  </ul>
                )}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <Card
                className="glass-card p-4"
                title={<div className="d-flex align-items-center gap-2 mb-0"><FaLanguage className="text-primary" /><span className="h4 fw-bold mb-0">Languages</span></div>}
                content={(
                  <>
                    <ul className="mb-0 ps-3">
                      <li>Arabic (native)</li>
                      <li>English (excellent reading, writing, speaking)</li>
                    </ul>
                    <div className="mt-4 d-flex align-items-center gap-2 text-light-emphasis">
                      <FaMapMarkerAlt className="text-primary" />
                      <span>Nationality: Bahraini</span>
                    </div>
                  </>
                )}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;