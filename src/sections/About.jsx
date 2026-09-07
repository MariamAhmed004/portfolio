import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import {
  FaBriefcase,
  FaBrain,
  FaChalkboardTeacher,
  FaCode,
  FaCertificate,
  FaGraduationCap,
  FaTimes,
  FaTrophy,
} from 'react-icons/fa';

import { IoDocuments, IoLogoMicrosoft } from "react-icons/io5";
import AlisonImage from '../assets/Alison.png';
import BatelcoBrincImage from '../assets/BatelcoBrinc.jpeg';
import MloImage from '../assets/MLO.png';
import MicrosoftPowerAppsImage from '../assets/Microsoft_PowerApps.jpeg';
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
    details: ['Implemented database automation and reconciliation procedures with PL/SQL packages.', 'Designed and tested Linux cron-based scheduling scripts.', 'Assisted in developing a dashboard concept for workflow monitoring.'],
  },
  {
    role: 'Dimuma Company – Part-Time Full Stack Developer',
    period: 'Oct 2025 – Nov 2025',
    icon: FaCode,
    details: ['Developed ASP.NET Core features and SQL procedures.', 'Resolved source control conflicts.', 'Contributed to project documentation.'],
  },
  {
    role: 'Dimuma Company – Trainee',
    period: 'Jul 2025 – Sep 2025',
    icon: FaCode,
    details: ['Supported database design and normalization.', 'Troubleshot issues with senior developers.', 'Assisted in testing and auditing documentation.'],
  },
  {
    role: 'Arab Financial Company (AFS) – IT Infrastructure Trainee',
    period: 'Jul 2023 – Aug 2023',
    icon: IoDocuments,
    details: ['Prepared documentation of standards & procedures.', 'Created infrastructure diagrams.', 'Shadowed engineers for hands-on exposure.'],
  },
];

function About() {
  const [selectedCertification, setSelectedCertification] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedCertification(null);
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
                    content={<ul className="experience-card-details mb-0">{item.details.map((detail) => (<li key={detail}>{detail}</li>))}</ul>}
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
                    onClick={() => setSelectedCertification(item)}
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
        {selectedCertification && (
          <motion.div
            className="certification-modal-backdrop"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertification(null)}
          >
            <motion.div
              className="certification-modal"
              role="dialog"
              aria-modal="true"
              aria-label={selectedCertification.title}
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
                onClick={() => setSelectedCertification(null)}
              >
                <FaTimes />
              </button>
              <img src={selectedCertification.image} alt={selectedCertification.title} />
              <p>{selectedCertification.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default About;