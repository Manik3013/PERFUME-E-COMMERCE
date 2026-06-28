import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingCart, FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount] = React.useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-text">✨ RIBELL</span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu desktop-only">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products/men" className="nav-link">Men</Link>
          <Link to="/products/women" className="nav-link">Women</Link>
          <Link to="/products/unisex" className="nav-link">Unisex</Link>
        </div>

        {/* Right Icons */}
        <div className="navbar-right">
          <button className="nav-icon search-icon">
            <FiSearch />
          </button>
          <Link to="/cart" className="nav-icon cart-icon">
            <FiShoppingCart />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <button className="menu-toggle mobile-only" onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div className="mobile-menu" variants={menuVariants} initial="hidden" animate="visible">
          <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>Home</Link>
          <Link to="/products/men" className="mobile-nav-link" onClick={toggleMenu}>Men</Link>
          <Link to="/products/women" className="mobile-nav-link" onClick={toggleMenu}>Women</Link>
          <Link to="/products/unisex" className="mobile-nav-link" onClick={toggleMenu}>Unisex</Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
