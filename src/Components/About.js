import React from "react";
import { Link } from "react-router-dom";
import img from "../images/img.jpg";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-1">
        <div className="row">
          <div className="col-md-6 ">
            <h1 className="text-dark fw-bold mb-4">About Us</h1>
            <p className="lead mb-4 text-dark">
              Welcome to our iPhone Store, your premier destination for
              cutting-edge mobile technology. We specialize in offering the
              latest and most innovative iPhone models, ensuring you have access
              to top-of-the-line devices that fit your lifestyle. Our store is
              dedicated to providing a seamless shopping experience with a wide
              range of iPhones, each equipped with the latest features and
              advancements. At our store, it's not just about purchasing a new
              phone—it's about experiencing exceptional customer service and
              comprehensive technical support. We are committed to making your
              buying journey smooth and enjoyable, offering personalized advice
              to help you select the perfect device. We pride ourselves on
              bringing technology to your fingertips and delivering the highest
              quality products and services to ensure your complete
              satisfaction. Thank you for choosing us; we look forward to
              serving your mobile needs.
            </p>
            <Link to="/contact" className="btn btn-outline-dark px-3">
              Contact Us
            </Link>
          </div>
          <div className="col-md-6 mt-5 ">
            <img src={img} alt="img" height="400px" width="640px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
