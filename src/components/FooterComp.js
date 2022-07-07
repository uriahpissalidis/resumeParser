import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer class="py-8 py-md-11 bg-dark text-center text-white page-footer font-small blue pt-4" >
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 col-lg-3">
          <p class="text-gray-700 mb-2">
            Here with our resume parser you can find jobs and connect with
            recruiters. Increase your chances of getting that job and gain
            confidence now.
          </p>

          <ul class="list-unstyled list-inline list-social mb-6 mb-md-0">
            <li class="list-inline-item list-social-item me-3">
              <Link as={Link} class="text-decoration-none" to="/parse">
                Check Resume
              </Link>
            </li>
            <li class="list-inline-item list-social-item me-3">
              <Link as={Link} class="text-decoration-none" to="/parse">
                Check Resume
              </Link>
            </li>
            <li class="list-inline-item list-social-item me-3">
              <Link as={Link} class="text-decoration-none" to="/parse">
                Check Resume
              </Link>
            </li>
            <li class="list-inline-item list-social-item">
              <Link as={Link} class="text-decoration-none" to="/parse">
                Check Resume
              </Link>
            </li>
          </ul>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <h6 class="fw-bold text-uppercase text-gray-700">Products</h6>

          <ul class="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
            <li class="mb-3">
              <a href="#!" class="text-reset">
                Page Builder
              </a>
            </li>
            <li class="mb-3">
              <a href="#!" class="text-reset">
                UI Kit
              </a>
            </li>
            <li class="mb-3">
              <a href="#!" class="text-reset">
                Styleguide
              </a>
            </li>
            <li class="mb-3">
              <a href="#!" class="text-reset">
                Documentation
              </a>
            </li>
          </ul>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <h6 class="fw-bold text-uppercase text-gray-700">Services</h6>

          <ul class="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
            <li class="mb-3">
              <a href="#!" class="text-reset">
                Documentation
              </a>
            </li>
            <li class="mb-3">
              <a href="#!" class="text-reset">
                Changelog
              </a>
            </li>
            <li class="mb-3">
              <a href="#!" class="text-reset">
                Pagebuilder
              </a>
            </li>
            <li>
              <a href="#!" class="text-reset">
                UI Kit
              </a>
            </li>
          </ul>
        </div>
        <div class="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
          <h6 class="fw-bold text-uppercase text-gray-700">Connect</h6>

          <ul class="list-unstyled text-muted mb-0">
            <li class="mb-3">
              <a href="#!" class="text-reset">
                Page Builder
              </a>
            </li>
            <li class="mb-3">
              <a href="#!" class="text-reset">
                UI Kit
              </a>
            </li>
            <li class="mb-3">
              <a href="#!" class="text-reset">
                Styleguide
              </a>
            </li>
            <li class="mb-3">
              <a href="#!" class="text-reset">
                Documentation
              </a>
            </li>
          </ul>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <h6 class="fw-bold text-uppercase text-gray-700">Legal</h6>

          <ul class="list-unstyled text-muted mb-0">
            <li class="mb-3">
              <a href="#!" class="text-reset">
                Documentation
              </a>
            </li>
            <li class="mb-3">
              <a href="#!" class="text-reset">
                Changelog
              </a>
            </li>
            <li>
              <a href="#!" class="text-reset">
                Pagebuilder
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
