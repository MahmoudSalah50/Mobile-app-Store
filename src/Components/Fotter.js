// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 ">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>About Us</h5>
            <p>
              We offer the latest iPhone models and accessories. Explore our store for the best deals and service.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/product" className="text-white">Product</Link></li>
              <li><Link to="/contact" className="text-white">Contact Us</Link></li>
              <li><Link to="/about" className="text-white">About</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="bi bi-telephone"></i> 015 50 740 490</li>
              <li><i className="bi bi-envelope"></i> mahmoudsalah20012001@gmail.com</li>
              <li><i className="bi bi-geo-alt"></i> 123 Apple St, Mansoura, Egypt</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <Link to="https://www.facebook.com" className="text-white me-2" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link to="https://twitter.com" className="text-white me-2" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </Link>
            <Link to="https://www.instagram.com" className="text-white me-2" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </Link>
            <Link to="https://www.linkedin.com" className="text-white" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </Link>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">© 2024 iPhone Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
