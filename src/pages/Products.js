import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import '../styles/Products.css';

const Products = () => {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 300]);

  const allProducts = [
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
    {
      id: 5,
      name: 'Golden Hour',
      category: 'Women',
      price: 159.99,
      rating: 5,
      reviews: 201,
      image: 'https://images.unsplash.com/photo-1563181286-d3fee7d55364?w=500&h=500&fit=crop',
    },
    {
      id: 6,
      name: 'Arctic Frost',
      category: 'Unisex',
      price: 139.99,
      originalPrice: 169.99,
      rating: 4,
      reviews: 112,
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop',
    },
  ];

  const filteredProducts = category
    ? allProducts.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      )
    : allProducts;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>{category ? `${category} Fragrances` : 'All Products'}</h1>
      </div>

      <div className="container">
        <div className="products-content">
          {/* Sidebar */}
          <aside className="products-sidebar">
            <div className="sidebar-section">
              <h3>Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="sidebar-section">
              <h3>Price Range</h3>
              <div className="price-range">
                <input
                  type="range"
                  min="0"
                  max="300"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, e.target.value])}
                  className="range-slider"
                />
                <p>${priceRange[0]} - ${priceRange[1]}</p>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <motion.div
            className="products-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products;
