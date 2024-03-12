// GetCustomStrategy.js

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component
import './GetCustomStrategy.css'; // Import your CSS file
import CarouselComponent from './CarouselComponent';

const GetCustomStrategy = () => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="gcs-container">
        <h1>Tailored Strategies for Digital Excellence</h1>
        <div className="content">
          <p>Every business is unique, and so should be its path to digital transformation. At Wipro Comnet, we specialize in crafting customized digital strategies that align with your specific business goals and challenges.</p>
          <div className="approach">
            <h2>Our Approach</h2>
            <ul>
              <li><strong>Understanding Your Vision:</strong> We start by listening to your aspirations and understanding your business landscape.</li>
              <li><strong>Strategic Blueprinting:</strong> Leveraging our expertise, we design a strategic roadmap tailored just for you, outlining the technologies, processes, and methodologies that will drive your digital transformation.</li>
              <li><strong>Partnership for Success:</strong> Consider us an extension of your team, guiding you through implementation and beyond to ensure your strategy delivers the results you need.</li>
            </ul>
          </div>
          <CarouselComponent />
          <div className="cta">
            <p>Your Next Step: Ready for a strategy that reflects your business's uniqueness? Book a session now and set the foundation for a digital-first future.</p>
            <Link to="/book-session" className="primary-button">Book a Session</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetCustomStrategy;
