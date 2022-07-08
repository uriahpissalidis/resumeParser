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
                Mi semper risus ultricies orci pulvinar in at enim orci. Quis
                facilisis nunc pellentesque in ullamcorper sit. Lorem blandit
                arcu sapien, senectus libero, amet dapibus cursus quam. Eget
                pellentesque eu purus volutpat adipiscing malesuada. Purus nisi,
                tortor vel lacus. Donec diam molestie ultrices vitae eget
                pulvinar fames. Velit lacus mi purus velit justo, amet. Nascetur
                lobortis diam, duis orci. Vitae nibh amet lorem pellentesque.
              </p>
            </div>
            <div className="col-md-6">
              <p className="fs-lg ps-lg-4 mb-1 mb-lg-4">
                Ac at sed sit senectus massa. Massa ante amet ultrices magna
                porta tempor. Aliquet diam in et magna ultricies mi at. Lectus
                enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus
                laoreet aliquam pellentesque sed aliquet integer massa. Orci leo
                tortor ornare id mattis auctor aliquam volutpat aliquet. Odio
                lectus viverra eu blandit nunc malesuada vitae eleifend
                pulvinar. In ac fermentum sit in orci.
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
