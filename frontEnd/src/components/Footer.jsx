import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 pt-5">
      <div className="container">

        <div className="row g-4">

          {/* Brand Info */}
       <div className="col-md-4">
  <div className="footer-bg-image p-4 rounded">
    <h5 className="fw-bold mb-3 text-white">PowerFit Gym</h5>
    <p className="text-light">
      PowerFit Gym is dedicated to helping you achieve strength,
      confidence, and a healthier lifestyle through professional
      training and modern equipment.
    </p>
  </div>
</div>


          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <NavLink to="/" className="text-decoration-none text-secondary">
                  Home
                </NavLink>
              </li>
        
              <li className="mb-2">
                <NavLink to="/about" className="text-decoration-none text-secondary">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-decoration-none text-secondary">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Contact</h5>
            <p className="text-secondary mb-2">📍 Deep Bungalow Chowk, Pune</p>
            <p className="text-secondary mb-2">📞 +91 98765 43210</p>
            <p className="text-secondary mb-2">✉️ powerfitgym@gmail.com</p>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        {/* Bottom Bar */}
        <div className="text-center pb-3">
          <p className="mb-0 text-secondary">
            © {new Date().getFullYear()} PowerFit Gym. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
