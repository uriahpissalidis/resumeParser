import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <main className="page-wrapper">
        <section class="container pb-5 mb-md-2 mb-lg-4">
          <h1 class="border-bottom pb-4">Who We Are</h1>
          <div class="row pt-2 pt-md-3">
            <div class="col-md-6">
              <p class="fs-lg pe-lg-4 mb-1 mb-lg-4">
                Mi semper risus ultricies orci pulvinar in at enim orci. Quis
                facilisis nunc pellentesque in ullamcorper sit. Lorem blandit
                arcu sapien, senectus libero, amet dapibus cursus quam. Eget
                pellentesque eu purus volutpat adipiscing malesuada. Purus nisi,
                tortor vel lacus. Donec diam molestie ultrices vitae eget
                pulvinar fames. Velit lacus mi purus velit justo, amet. Nascetur
                lobortis diam, duis orci. Vitae nibh amet lorem pellentesque.
              </p>
            </div>
            <div class="col-md-6">
              <p class="fs-lg ps-lg-4 mb-1 mb-lg-4">
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
        <section class="container pb-5 mb-2 mb-md-4 mb-lg-5">
        <div class="bg-secondary rounded-3 py-5 px-3 px-md-0">
          <div class="row justify-content-center mb-2 py-md-2 py-lg-4">
            <div class="col-lg-10 col-md-11">
              <h2 class="pb-3">Overpass by Numbers</h2>
              <div class="row row-cols-1 row-cols-md-2 g-4">

                
                <div class="col">
                  <div class="card h-100 border-0 shadow-sm p-md-2 p-lg-4">
                    <div class="card-body d-flex align-items-center">
                      <div class="bg-primary shadow-primary rounded-3 flex-shrink-0 p-3">
                        <img src="/images/job.svg" class="d-block m-1" width="40" alt="Icon"/>
                      </div>
                      <div class="ps-4 ms-lg-3">
                        <h3 class="display-5 mb-1">2,480</h3>
                        <p class="mb-0"><span class="fw-semibold">Remote</span> Professionals</p>
                      </div>
                    </div>
                  </div>
                </div>

                
                <div class="col">
                  <div class="card h-100 border-0 shadow-sm p-md-2 p-lg-4">
                    <div class="card-body d-flex align-items-center">
                      <div class="bg-primary shadow-primary rounded-3 flex-shrink-0 p-3">
                        <img src="/images/job.svg" class="d-block m-1" width="40" alt="Icon"/>
                      </div>
                      <div class="ps-4 ms-lg-3">
                        <h3 class="display-5 mb-1">1,200</h3>
                        <p class="mb-0"><span class="fw-semibold">Requests</span> per Week</p>
                      </div>
                    </div>
                  </div>
                </div>

                
                <div class="col">
                  <div class="card h-100 border-0 shadow-sm p-md-2 p-lg-4">
                    <div class="card-body d-flex align-items-center">
                      <div class="bg-primary shadow-primary rounded-3 flex-shrink-0 p-3">
                        <img src="/images/job.svg" class="d-block m-1" width="40" alt="Icon"/>
                      </div>
                      <div class="ps-4 ms-lg-3">
                        <h3 class="display-5 mb-1">760</h3>
                        <p class="mb-0"><span class="fw-semibold">New Clients</span> per Month</p>
                      </div>
                    </div>
                  </div>
                </div>

                
                <div class="col">
                  <div class="card h-100 border-0 shadow-sm p-md-2 p-lg-4">
                    <div class="card-body d-flex align-items-center">
                      <div class="bg-primary shadow-primary rounded-3 flex-shrink-0 p-3">
                        <img src="/images/job.svg" class="d-block m-1" width="40" alt="Icon"/>
                      </div>
                      <div class="ps-4 ms-lg-3">
                        <h3 class="display-5 mb-1">58</h3>
                        <p class="mb-0"><span class="fw-semibold">Countries</span> Using Our Product</p>
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
