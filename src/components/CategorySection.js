import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/CategorySection.css';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: 'Men',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      description: 'Bold & Sophisticated',
    },
    {
      id: 2,
      name: 'Women',
      image: 'https://images.unsplash.com/photo-1529148482759-b8a9ef0e6a7a?w=600&h=400&fit=crop',
      description: 'Elegant & Graceful',
    },
    {
      id: 3,
      name: 'Unisex',
      image: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8a311?w=600&h=400&fit=crop',
      description: 'Versatile & Modern',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="category-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Shop by Category</h2>
          <p>Find your perfect fragrance</p>
        </motion.div>

        <motion.div
          className="categories-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={cardVariants} whileHover="hover">
              <Link to={`/products/${category.name.toLowerCase()}`} className="category-card">
                <div className="category-image-wrapper">
                  <img src={category.image} alt={category.name} className="category-image" />
                  <div className="category-overlay"></div>
                </div>
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;
