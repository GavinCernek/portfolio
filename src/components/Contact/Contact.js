
import React from 'react';
import './Contact.css';

const Contact = () => {
  
  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Me</h1>
      </div>

      <div className="contact-info">
        <h1>Email</h1>
        <p>gcernek@gmail.com</p>

        <div className="github-link">
          <a href="https://github.com/GavinCernek">View GitHub Profile</a>
        </div>

        <div className="linkedin-link">
          <a href="https://www.linkedin.com/in/gavin-cernek/">View LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;