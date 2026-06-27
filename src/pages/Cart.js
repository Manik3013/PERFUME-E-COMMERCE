import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Cart.css';

const Cart = () => {
  const [cartItems] = React.useState([]);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <motion.div
            className="empty-cart"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Your Cart is Empty</h1>
            <p>Discover our luxury collection and add your favorite fragrances</p>
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Shopping Cart</h1>
        <div className="cart-content">
          <div className="cart-items">Cart items will appear here</div>
          <div className="cart-summary">Order summary will appear here</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
