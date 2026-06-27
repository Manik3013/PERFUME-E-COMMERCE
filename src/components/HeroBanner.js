import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HeroBanner.css';

const HeroBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="hero-banner">
      <div className="hero-overlay"></div>
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title" variants={itemVariants}>
          Elegance Redefined
        </motion.h1>
        <motion.p className="hero-subtitle" variants={itemVariants}>
          Discover the essence of luxury with our exclusive collection of premium fragrances
        </motion.p>
        <motion.button className="hero-cta" variants={itemVariants}>
          Shop Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
