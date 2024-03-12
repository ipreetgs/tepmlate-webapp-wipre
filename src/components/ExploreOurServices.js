// ExploreOurServices.js

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component
import './ExploreOurServices.css'; // Import your CSS file
import CarouselComponent from './CarouselComponent';

const ExploreOurServices = () => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="eos-container">
        <h1>Comprehensive IT Consultancy Services</h1>
        <div className="content">
          <p>At Wipro Comnet, we offer a wide range of IT consultancy services designed to address every aspect of your digital transformation journey. From strategic planning to implementation and management, we're here to guide you every step of the way.</p>
          <div className="services">
            <h2>Our Services Include:</h2>
            <ul>
              <li><strong>Strategic IT Consulting:</strong> Aligning your IT strategy with your business objectives to drive growth and innovation.</li>
              <li><strong>Digital Transformation:</strong> Leveraging digital technologies to transform your business operations, customer experience, and competitive advantage.</li>
              <li><strong>Technology Optimization:</strong> Enhancing the efficiency and effectiveness of your technology investments for better business outcomes.</li>
              <li><strong>Cybersecurity and Compliance:</strong> Ensuring your digital assets are protected and compliant with relevant regulations and standards.</li>
            </ul>
          </div>
          <CarouselComponent/>
          <div className="cta">
            <p>Find Your Solution: Not sure where to start? Book a session with our experts to discover our services more in-depth and learn how we can tailor our offerings to meet your specific needs.</p>
            <Link to="/book-session" className="primary-button">Book a Session</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreOurServices;
