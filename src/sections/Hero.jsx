import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="hero" className="p-5 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hero Section
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Placeholder content with animation.
      </motion.p>
    </section>
  );
}

export default Hero;