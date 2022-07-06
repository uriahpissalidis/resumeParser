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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                      tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas 
                      integer eget aliquet. Sit amet porttitor eget dolor morbi non arcu risus. 
                      Mauris vitae ultricies leo integer malesuada nunc vel. Sed risus pretium 
                      quam vulputate dignissim suspendisse in. Vulputate ut pharetra sit amet 
                      aliquam id diam maecenas ultricies. Vel quam elementum pulvinar etiam. 
                      Suspendisse interdum consectetur libero id faucibus 
                      
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
