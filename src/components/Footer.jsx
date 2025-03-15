import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-neutral-content p-10 mt-auto">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/about-us" className="link link-hover">
          About us
        </Link>
        <Link to="/contact-us" className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Terms and Policies</h6>
        <Link to="/terms-of-service" className="link link-hover">
          Terms of Service
        </Link>
        <Link to="/privacy-policy" className="link link-hover">
          Privacy policy
        </Link>
        <Link to="/refund" className="link link-hover">
          Refund policy
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
