import React from 'react';
import HeroBanner from '../components/HeroBanner';
import FeaturedProducts from '../components/FeaturedProducts';
import CategorySection from '../components/CategorySection';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroBanner />
      <CategorySection />
      <FeaturedProducts />
      
      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get exclusive offers and new arrivals delivered to your inbox</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
