import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import '../styles/FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Midnight Elegance',
      category: 'Men',
      price: 129.99,
      originalPrice: 149.99,
      rating: 5,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop',
    },
    {
      id: 2,
      name: 'Rose Whisper',
      category: 'Women',
      price: 139.99,
      rating: 5,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1548695682-7e3f65dc2f7e?w=500&h=500&fit=crop',
    },
    {
      id: 3,
      name: 'Eternal Bliss',
      category: 'Unisex',
      price: 149.99,
      originalPrice: 179.99,
      rating: 5,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500&h=500&fit=crop',
    },
    {
      id: 4,
      name: 'Obsidian Soul',
      category: 'Men',
      price: 119.99,
      rating: 4,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1606042894002-26f8681b2d1b?w=500&h=500&fit=crop',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="featured-products">
      <div className="container">
        <motion.div
          className="section-header"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Featured Collection</h2>
          <p>Handpicked luxury fragrances for the discerning taste</p>
        </motion.div>

        <motion.div
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
