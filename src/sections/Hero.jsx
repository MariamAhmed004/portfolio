import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { FaBriefcase, FaMapMarkerAlt, FaQuoteLeft } from 'react-icons/fa';
import codeImage from '../assets/image-code.jpeg';
import profileImage from '../assets/Maryam-Ahmed.jpeg';
import typingVideo from '../assets/Typing-Maryam.mp4';

function Hero() {
  const [showCodeImage, setShowCodeImage] = useState(false);

  useEffect(() => {
    const imageRotation = window.setInterval(() => {
      setShowCodeImage((currentValue) => !currentValue);
    }, 4200);

    return () => window.clearInterval(imageRotation);
  }, []);

  const activeImage = showCodeImage ? codeImage : profileImage;
  const activeImageAlt = showCodeImage ? 'Code displayed on a screen' : 'Maryam Ahmed';

  return (
    <section id="hero">
      <div className="container py-5">
        <div className="hero-card-layout">
          <motion.div
            className="hero-card-stack hero-card-identity"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card
              className="glass-card hero-identity-card"
              content={(
                <div className="hero-identity-content">
                  <p className="hero-role mb-3 mt-0">Software Developer</p>
                  <h1 className="hero-name mb-1 ms-3">Maryam <span className="hero-last-name ms-5">Ahmed</span></h1>
                </div>
              )}
            />
            <Card
              className="glass-card hero-visual-card"
              content={(
                <div className="hero-video-frame">
                  <video autoPlay loop muted playsInline src={typingVideo} aria-label="Maryam typing code" />
                  <span className="hero-visual-label">In motion</span>
                </div>
              )}
            />
          </motion.div>

          <div className="hero-media-stack">
            <motion.div
              className="hero-media-card hero-profile-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.6 }}
            >
              <Card
                className="glass-card hero-visual-card"
                content={(
                  <div className="hero-visual-frame">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeImage}
                        src={activeImage}
                        alt={activeImageAlt}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.7 }}
                      />
                    </AnimatePresence>
                    <span className="hero-visual-label">{showCodeImage ? 'In the build' : 'The developer'}</span>
                  </div>
                )}
              />
            </motion.div>

            <Card
              className="glass-card hero-quote-card"
              leading={<span className="hero-card-icon"><FaQuoteLeft /></span>}
              content={<p className="hero-quote mb-0">Building practical software with curiosity, care, and a focus on real-world impact.</p>}
            />
          </div>

          <motion.div
            className="hero-status-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.6 }}
          >
            <Card
              className="glass-card h-100"
              leading={<span className="hero-card-icon"><FaMapMarkerAlt /></span>}
              title={<h2 className="hero-card-title">Currently</h2>}
              content={(
                <>
                  <p className="hero-card-copy mb-2">Based in Bahrain and building my next chapter in software development.</p>
                  <p className="hero-status-note mb-0"><FaBriefcase /> Open to software development opportunities</p>
                </>
              )}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;