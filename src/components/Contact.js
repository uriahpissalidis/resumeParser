import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <main className="page-wrapper">
      <section className="container pb-5 mb-2 mb-md-4 mb-lg-5">
        <div className="card rounded-3 py-5 mb-2">
          <div className="row pb-2 py-md-3 py-lg-5 px-4 px-lg-0 position-relative zindex-3">
            <div className="col-xl-3 col-lg-4 col-md-5 offset-lg-1">
              <p className="lead mb-2 mb-md-3">Ready to get started?</p>
              <h2 className="h1 pb-3">Don't Hesitate to Contact Us</h2>
            </div>
            <form className="col-lg-6 col-md-7 offset-xl-1 needs-validation">
              <div className="row">
                <div className="col-sm-6 mb-4">
                  <label htmlFor="name" className="form-label fs-base">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control form-control-lg"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter your name!
                  </div>
                </div>

                <div className="col-sm-6 mb-4">
                  <label htmlFor="email" className="form-label fs-base">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please provide a valid email address!
                  </div>
                </div>
                <div className="col-12 pb-2 mb-4">
                  <label htmlFor="message" className="form-label fs-base">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control form-control-lg"
                    rows="4"
                    required=""
                  ></textarea>
                  <div className="invalid-feedback">
                    Please enter your message!
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary shadow-primary btn-lg"
              >
                Send request
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
