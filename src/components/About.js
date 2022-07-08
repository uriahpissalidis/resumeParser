import React, { Component } from "react";
import "../styles/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faMagnifyingGlass,
  faSuitcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default class About extends Component {
  render() {
    return (
      <main className="page-wrapper">
        <section className="container pb-5 mb-md-2 mb-lg-4">
          <h1 className="border-bottom pb-4">Who We Are</h1>
          <div className="row pt-2 pt-md-3">
            <div className="col-md-6">
              <p className="fs-lg pe-lg-4 mb-1 mb-lg-4">
                We are a passionate group of developers who want to help you get connected to recruiters and
                land a job. ResConnect has connections to many company partners that are willing to read your
                resume and look for employees. Our goal is to create a software that we wish we had when we were in our very own job 
                search. We believe everyone should have access to affordable and trustworthy software that 
                will give you the confidence to show off your resume. 
              </p>
            </div>
            <div className="col-md-6">
              <p className="fs-lg ps-lg-4 mb-1 mb-lg-4">
                Started in a college students dorm, ResConnect has grown into one of the top resume parsers to this date.
                It has first started as a google company case project, but over 3 years of development a team has been
                created to bring you software that will help you get your dream job. ResConnect has 15 employees all
                from different professional backgrounds. Ranging from software developers, data scientist, human resources
                and job recruiters. 
              </p>
            </div>
          </div>
        </section>
        <section className="container pb-5 mb-2 mb-md-4 mb-lg-5">
          <div className="container rounded-3 py-5 px-3 px-md-0">
            <div className="row justify-content-center mb-2 py-md-2 py-lg-4">
              <div className="col-lg-10 col-md-11">
                <h2 className="pb-3">ResConnect by Numbers</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  <div className="col">
                    <div className="card h-100 border-0 shadow-sm p-md-2 p-lg-4">
                      <div className="card-body d-flex align-items-center">
                        <div className="card rounded-3 flex-shrink-0 p-3 pb-0 pt-2">
                          <p className="image">
                            <FontAwesomeIcon icon={faUser} />
                          </p>
                        </div>
                        <div className="ps-4 ms-lg-3">
                          <h3 className="display-5 mb-1">5,140</h3>
                          <p className="mb-0">
                            <span className="fw-semibold">Daily</span> Users
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-100 border-0 shadow-sm p-md-2 p-lg-4">
                      <div className="card-body d-flex align-items-center">
                        <div className="card rounded-3 flex-shrink-0 p-3 pb-0 pt-2">
                          <p className="image">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                          </p>
                        </div>
                        <div className="ps-4 ms-lg-3">
                          <h3 className="display-5 mb-1">1,500</h3>
                          <p className="mb-0">
                            <span className="fw-semibold">Resumes Parsed</span>{" "}
                            per Week
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-100 border-0 shadow-sm p-md-2 p-lg-4">
                      <div className="card-body d-flex align-items-center">
                        <div className="card rounded-3 flex-shrink-0 p-3 pb-0 pt-2 ">
                          <p className="image">
                            <FontAwesomeIcon icon={faSuitcase} />
                          </p>
                        </div>
                        <div className="ps-4 ms-lg-3">
                          <h3 className="display-5 mb-1">760</h3>
                          <p className="mb-0">
                            <span className="fw-semibold">Jobs </span>
                            Secured
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card h-100 border-0 shadow-sm p-md-2 p-lg-4">
                      <div className="card-body d-flex align-items-center">
                        <div className="card rounded-3 flex-shrink-0 p-4 pb-0 pt-2">
                          <p className="image">
                            <FontAwesomeIcon icon={faBuilding} />
                          </p>
                        </div>
                        <div className="ps-4 ms-lg-3">
                          <h3 className="display-5 mb-1">30</h3>
                          <p className="mb-0">
                            <span className="fw-semibold">Company</span>{" "}
                            Partners
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
