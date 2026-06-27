import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: About */}
        <div className="footer-column">
          <h3>About RIBELL</h3>
          <p>Discover the world's finest luxury fragrances. Each bottle tells a story of elegance and sophistication. RIBELL - Where Elegance Meets Rebellion.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#shipping">Shipping Info</a></li>
            <li><a href="#returns">Returns</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>

        {/* Column 4: Contact & Social */}
        <div className="footer-column">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="#facebook" className="social-icon"><FiFacebook /></a>
            <a href="#instagram" className="social-icon"><FiInstagram /></a>
            <a href="#twitter" className="social-icon"><FiTwitter /></a>
            <a href="#email" className="social-icon"><FiMail /></a>
          </div>
          <p className="footer-email">contact@ribell.com</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 RIBELL. All rights reserved. | <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a></p>
      </div>
    </footer>
  );
};

export default Footer;
