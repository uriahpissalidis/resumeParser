import React from 'react'

function Contact() {
  return (
    <div>
      <section class="container pb-5 mb-2 mb-md-4 mb-lg-5">
        <div class="position-relative bg-secondary rounded-3 py-5 mb-2">
          <div class="row pb-2 py-md-3 py-lg-5 px-4 px-lg-0 position-relative zindex-3">
            <div class="col-xl-3 col-lg-4 col-md-5 offset-lg-1">
              <p class="lead mb-2 mb-md-3">Ready to get started?</p>
              <h2 class="h1 pb-3">Dont Hesitate to Contact Us</h2>
            </div>
            <form class="col-lg-6 col-md-7 offset-xl-1 needs-validation" >
              <div class="row">
                <div class="col-sm-6 mb-4">
                  <label for="name" class="form-label fs-base">Full name</label>
                  <input type="text" id="name" class="form-control form-control-lg" required=""/>
                  <div class="invalid-feedback">Please enter your name!</div>
                </div>



                <div class="col-sm-6 mb-4">
                  <label for="email" class="form-label fs-base">Email</label>
                  <input type="email" id="email" class="form-control form-control-lg" required=""/>
                  <div class="invalid-feedback">Please provide a valid email address!</div>
                </div>
                <div class="col-12 pb-2 mb-4">
                  <label for="message" class="form-label fs-base">Message</label>
                  <textarea id="message" class="form-control form-control-lg" rows="4" required=""></textarea>
                  <div class="invalid-feedback">Please enter your message!</div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary shadow-primary btn-lg">Send request</button>
            </form>
          </div>

          
          
        </div>
      </section>



    </div>
  )
}

export default Contact
