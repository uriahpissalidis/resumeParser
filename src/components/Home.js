import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="left-content">
                  <div className="row">
                    <div className="col-lg-12">
                      <h6>ResConnect Network</h6>
                      <h2>Have Confidence In Your Resume</h2>
                      <p>
                        The job searching stage can be overwhelming and scary. That is why ResConnect
                        was created! We created this software so that it can analyze and review your resume so that
                        you can gain confidence in your resume. What are you waiting for? Start now and get ahead of the game!
                      
                      
                      </p>
                    </div>
                    <div className="col-lg-12">
                      <div className="border-first-button">
                        <Link as={Link} to="/parse">Check Resume</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-image">
                  <img src={"/images/job.svg"} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
