// UnveilDigitalPotential.js

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component
import './UnveilDigitalPotential.css'; // Import your CSS file

const UnveilDigitalPotential = () => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="udp-container">
        <h1>Unlock Your Digital Future</h1>
        <div className="content">
          <p>Welcome to the threshold of transformation. At Wipro Comnet, we believe every business holds untapped digital potential that can redefine its future. Our mission is to unlock this potential, paving the way for unprecedented growth, innovation, and efficiency.</p>
          <div className="possibilities">
            <h2>Discover the Possibilities</h2>
            <ul>
              <li><strong>Innovation Beyond Boundaries:</strong> Explore how digital technologies can introduce new products, services, and business models to your portfolio.</li>
              <li><strong>Operational Excellence:</strong> Learn how automation, AI, and other digital tools can streamline your operations, reduce costs, and enhance productivity.</li>
              <li><strong>Market Expansion:</strong> Uncover the digital pathways that lead to new markets and customer segments, broadening your reach and influence.</li>
            </ul>
          </div>
          <div className="testimonials">
            <h2>Hear from Businesses Like Yours</h2>
            <p>Here are some testimonials from businesses who have journeyed with us from potential to actualization:</p>
            {/* Add testimonials here */}
          </div>
          <div className="cta">
            <p>Begin Your Journey: Let's explore what your digital future could look like. Book a session with our experts today.</p>
            <Link to="/book-session" className="primary-button">Book a Session</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnveilDigitalPotential;
