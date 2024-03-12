// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file
import CarouselComponent from './CarouselComponent';
const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Wipro Comnet</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/unveil-digital-potential">Unveil Your Digital Potential</Link></li>
          <li><Link to="/get-custom-strategy">Get Your Custom Strategy</Link></li>
          <li><Link to="/explore-our-services">Explore Our Services</Link></li>
        </ul>
      </nav>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Transforming Business Landscapes: From Strategy to Execution</h1>
          <p>Drive Growth, Efficiency, and Innovation with Wipro Comnet's Holistic IT Solutions</p>
          <div className="cta-buttons">
            <Link to="/unveil-digital-potential" className="primary-button">Unveil Your Digital Potential</Link>
            <Link to="/get-custom-strategy" className="primary-button">Get Your Custom Strategy</Link>
            <Link to="/explore-our-services" className="primary-button">View Our Services</Link>
          </div>
        </div>
        <div className="hero-image">
          {/* Include your supporting image here */}
        </div>
      </section>
      <section className="value-propositions">
        <h2>Value Propositions</h2>
        <div className="value-prop">
          <h3>Comprehensive Digital Strategy Development</h3>
          <p>Crafting tailor-made digital strategies that align with your business goals to enhance market reach and increase sales.</p>
        </div>
        <div className="value-prop">
          <h3>Operational Efficiency and Productivity Enhancement</h3>
          <p>Leveraging the latest in technology and process improvement to streamline operations, thereby increasing efficiency and productivity.</p>
        </div>
        <div className="value-prop">
          <h3>Technology Implementation and Management</h3>
          <p>Offering end-to-end services from technology selection and implementation to ongoing management, ensuring that digital solutions are effectively integrated into your business operations.</p>
        </div>
      </section>
      <CarouselComponent/>
      <section className="social-proof">
        <h2>Social Proof</h2>
        <div className="testimonial">
          <p>"Thanks to Wipro Comnet, our digital transformation journey has not only increased our operational efficiency but also significantly boosted our sales and market reach. Their strategic insight and execution excellence were game-changers." - Testimonial from Kaizon Immigration Inc.</p>
        </div>
      </section>
      <footer className="footer">
        <Link to="/explore-our-services" className="secondary-button">Explore Our Services</Link>
      </footer>
    </div>
  );
}

export default Home;
