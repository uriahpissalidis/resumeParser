import React from "react";
import "../styles/Footer.css";

const Footer = () => (
  <footer className="bg-dark text-center text-white page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">ResConnect</h5>
          <p>
            Here with our resume parser you can find jobs and connect with
            recruiters. Increase your chances of getting that job and gain
            confidence now.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Website</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Apps</a>
            </li>
            <li>
              <a href="#!">Site Stats</a>
            </li>
            <li>
              <a href="#!">Recommendations</a>
            </li>
            <li>
              <a href="#!">API</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Company</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!">Contact</a>
            </li>
            <li>
              <a href="#!">Jobs</a>
            </li>
            <li>
              <a href="#!">Sponsors</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    

    <div className="footer-copyright text-center py-3">
      © 2022 Copyright:
      <p>Josh Miranda</p>
    </div>
  </footer>
);

export default Footer;
