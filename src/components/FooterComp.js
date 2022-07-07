import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className="py-8 py-md-11 bg-dark text-center text-white page-footer font-small blue pt-4">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3">
          <h5 className="text-uppercase">ResConnect</h5>
          <p className="text-gray-700 mb-2">
            Here with our resume parser you can find jobs and connect with
            recruiters. Increase your chances of getting that job and gain
            confidence now.
          </p>

          <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
            <li className="list-inline-item list-social-item me-3">
              <a href="#!" className="text-decoration-none">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="list-inline-item list-social-item me-3">
              <a href="#!" className="text-decoration-none">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="list-inline-item list-social-item me-3">
              <a href="#!" className="text-decoration-none">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="list-inline-item list-social-item">
              <a href="#!" className="text-decoration-none">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <h6 className="fw-bold text-uppercase text-gray-700">Products</h6>

          <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
            <li className="mb-3">
              <a href="#!" className="text-reset">
                About
              </a>
            </li>
            <li className="mb-3">
              <a href="#!" className="text-reset">
                Features
              </a>
            </li>
            <li className="mb-3">
              <a href="#!" className="text-reset">
                Pricing
              </a>
            </li>
            <li className="mb-3">
              <a href="#!" className="text-reset">
                Documentation
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <h6 className="fw-bold text-uppercase text-gray-700">Services</h6>

          <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
            <li className="mb-3">
              <a href="#!" className="text-reset">
                Consultation
              </a>
            </li>
            <li className="mb-3">
              <a href="#!" className="text-reset">
                Behavioral
              </a>
            </li>
            <li className="mb-3">
              <a href="#!" className="text-reset">
                Technical
              </a>
            </li>
            <li>
              <a href="#!" className="text-reset">
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
          <h6 className="fw-bold text-uppercase text-gray-700">Connect</h6>

          <ul className="list-unstyled text-muted mb-0">
            <li className="mb-3">
              <a href="#!" className="text-reset">
                Partners
              </a>
            </li>
            <li className="mb-3">
              <a href="#!" className="text-reset">
                Resources
              </a>
            </li>
            <li className="mb-3">
              <a href="#!" className="text-reset">
                Community
              </a>
            </li>
            <li className="mb-3">
              <a href="#!" className="text-reset">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <h6 className="fw-bold text-uppercase text-gray-700">Legal</h6>

          <ul className="list-unstyled text-muted mb-0">
            <li className="mb-3">
              <a href="#!" className="text-reset">
                Documentation
              </a>
            </li>
            <li className="mb-3">
              <a href="#!" className="text-reset">
                Terms
              </a>
            </li>
            <li>
              <a href="#!" className="text-reset">
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
