import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import {
  FaBriefcase,
  FaBrain,
  FaChartLine,
  FaChalkboardTeacher,
  FaCode,
  FaCertificate,
  FaGraduationCap,
  FaTimes,
  FaTrophy,
} from 'react-icons/fa';

import { IoDocuments, IoLogoMicrosoft } from "react-icons/io5";
import AlisonImage from '../assets/Alison.png';
import AfsInternshipImage from '../assets/AFS-Internship.png';
import BatelcoBrincImage from '../assets/BatelcoBrinc.jpeg';
import BatelcoExperienceImage from '../assets/batelco-experiance.png';
import MloImage from '../assets/MLO.png';
import MicrosoftPowerAppsImage from '../assets/Microsoft_PowerApps.jpeg';
import DimumaRecommendationImage from '../assets/recommendation-Dimuma.png';
import SoftSkillsImage from '../assets/SoftSkills.jpeg';


import { FaArrowsSpin } from "react-icons/fa6";


const Motion = motion.div;

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
  { title: 'General Assembly – Data Analytics Bootcamp Fellow (Jun 2026 – Sep 2026)', image: null, icon: FaChartLine },
  { title: 'Think Smart – Soft Skill Development (Feb 2025)', image: SoftSkillsImage, icon: FaChalkboardTeacher },
  { title: 'Microsoft – Power Platform Developer Associate (Jan 2025)', image: MicrosoftPowerAppsImage, icon: IoLogoMicrosoft },
  { title: 'Kerne – Machine Learning Olympiad (Mar 2023)', image: MloImage, icon: FaBrain },
  { title: 'Brinc – Batelco Digital Bootcamp (Jul 2022 – Jan 2023) – 1st prize in hackathon', image: BatelcoBrincImage, icon: FaTrophy },
  { title: 'Alison – Management Information Systems Course (2022)', image: AlisonImage, icon: IoDocuments },
];

const experience = [
  {
    role: 'Batelco by Beyon – Industrial Trainee',
    period: 'Feb 2026 – May 2026',
    icon: FaArrowsSpin,
    image: BatelcoExperienceImage,
    details: ['Developed and deployed a PL/SQL automation package that generates and schedules financial reports.','Implemented database automation and reconciliation procedures with PL/SQL packages.', 'Designed and tested Linux cron-based scheduling scripts.', 'Assisted in developing a dashboard concept for workflow monitoring.'],
  },
  {
    role: 'Dimuma Company',
    period: 'Jul 2025 – Nov 2025',
    icon: FaCode,
    image: DimumaRecommendationImage,
    positions: [
      {
        role: 'Part-Time Full Stack Developer',
        period: 'Oct 2025 – Nov 2025',
        details: ['Developed ASP.NET Core features and SQL procedures.', 'Resolved source control conflicts.', 'Contributed to project documentation.'],
      },
      {
        role: 'Trainee',
        period: 'Jul 2025 – Sep 2025',
        details: ['Supported database design and normalization.', 'Troubleshot issues with senior developers.', 'Assisted in testing and auditing documentation.'],
      },
    ],
  },
  {
    role: 'Arab Financial Company (AFS) – IT Infrastructure Trainee',
    period: 'Jul 2023 – Aug 2023',
    icon: IoDocuments,
    image: AfsInternshipImage,
    details: ['Prepared documentation of standards & procedures.', 'Created infrastructure diagrams.', 'Shadowed engineers for hands-on exposure.'],
  },
];

function About() {
  const [selectedDocument, setSelectedDocument] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedDocument(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="about" className="page-shell">
      <div className="container py-5">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
            {/* Removed section label eyebrow */}
          <h1 className="display-5 fw-bold mb-3">A Passionate Software Developer</h1>
          <p className="lead text-light-emphasis mb-0">
            Software Developer with practical experience in developing web-based systems, SaaS platforms, and enterprise applications. Passionate about creating efficient, user-focused solutions, with strengths in automation, AI adaptation, and modern best practices. I aspire to become a recognized technology professional who combines technical skills to build innovative, and efficient solutions.
          </p>
        </Motion>

        <div className="row g-4">
          <div>
            <Motion
              className="about-panel education-panel"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="education-heading mb-3">
                <FaGraduationCap />
                <h2>Education</h2>
              </div>
              <div className="vstack gap-3">
                {education.map((item) => (
                  <Card
                    key={item.title}
                    className="education-card"
                    leading={<span className="education-card-icon"><FaGraduationCap /></span>}
                    title={<span className="education-card-title">{item.title}</span>}
                    content={<p className="education-card-meta mb-0">{item.meta}</p>}
                  />
                ))}
              </div>
            </Motion>

            <Motion
              className="about-panel experience-panel"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="education-heading mb-3">
                <FaBriefcase />
                <h2>Experience</h2>
              </div>
              <div className="vstack gap-3">
                {experience.map((item) => (
                  <Card
                    key={item.role}
                    className="education-card experience-card"
                    leading={<span className="education-card-icon"><item.icon /></span>}
                    title={<div className="experience-card-heading"><span className="education-card-title">{item.role}</span><span className="experience-card-period">{item.period}</span></div>}
                    content={item.positions ? (
                      <div className="experience-card-positions">
                        {item.positions.map((position) => (
                          <div key={position.role} className="experience-card-position">
                            <div className="experience-position-heading">
                              <span className="experience-position-role">{position.role}</span>
                              <span className="experience-card-period">{position.period}</span>
                            </div>
                            <ul className="experience-card-details mb-0">
                              {position.details.map((detail) => (<li key={detail}>{detail}</li>))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : <ul className="experience-card-details mb-0">{item.details.map((detail) => (<li key={detail}>{detail}</li>))}</ul>}
                    footer={(
                      <button type="button" className="experience-card-action" onClick={() => setSelectedDocument(item)}>
                        View
                      </button>
                    )}
                  />
                ))}
              </div>
            </Motion>
          </div>

          <div>
            <Motion
              className="about-panel certification-panel"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <div className="education-heading mb-3">
                <FaCertificate />
                <h2>Certifications</h2>
              </div>
              <div className="vstack gap-3">
                {certifications.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    className="certification-card"
                    onClick={() => setSelectedDocument(item)}
                  >
                    <span className="education-card-icon"><item.icon /></span>
                    <span className="certification-card-title">{item.title}</span>
                    <span className="certification-card-action">View</span>
                  </button>
                ))}
              </div>
            </Motion>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedDocument && (
          <motion.div
            className="certification-modal-backdrop"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDocument(null)}
          >
            <motion.div
              className="certification-modal"
              role="dialog"
              aria-modal="true"
              aria-label={selectedDocument.title || selectedDocument.role}
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 24 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="certification-modal-close"
                aria-label="Close certificate preview"
                onClick={() => setSelectedDocument(null)}
              >
                <FaTimes />
              </button>
              {selectedDocument.image ? (
                <img src={selectedDocument.image} alt={selectedDocument.title || selectedDocument.role} />
              ) : (
                <div className="certification-modal-placeholder">
                  <FaCertificate />
                  <span>Certificate image coming soon</span>
                </div>
              )}
              <p>{selectedDocument.title || selectedDocument.role}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default About;