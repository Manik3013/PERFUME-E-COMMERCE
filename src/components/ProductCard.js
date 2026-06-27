import React from 'react';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -10,
      boxShadow: '0 20px 40px rgba(218, 165, 32, 0.3)',
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="product-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {/* Product Image */}
      <div className="product-image-container">
        <motion.img
          src={product.image}
          alt={product.name}
          className="product-image"
          variants={imageVariants}
        />
        <div className="product-overlay">
          <button className="overlay-btn add-to-cart-btn">
            <FiShoppingCart /> Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
          <button
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <FiHeart />
          </button>
        </div>
        <p className="product-category">{product.category}</p>
        
        {/* Rating */}
        <div className="product-rating">
          <div className="stars">
            {'⭐'.repeat(product.rating)}
          </div>
          <span className="rating-count">({product.reviews})</span>
        </div>
        
        {/* Price */}
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
