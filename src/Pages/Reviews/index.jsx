import React from "react";
import "./style.css";
import elquote from "@assets/images/elquote-right-alt.svg";
import profile from "@assets/images/profile.svg";
import profile1 from "@assets/images/profile1.svg";

const Reviews = () => {
  return (
    <>
      <section className="At__reviewsection">
        <div className="At__reviews">
          <h6 data-aos="fade-up">Client Reviews</h6>
          <h1 data-aos="fade-up">What Our Client Say About us</h1>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            commodo est iaculis, <br /> accumsan libero eu, imperdiet elit.
          </p>
          <div className="row At__clientreview">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="client__review">
                <div className="profile__img">
                  <img src={profile} alt="" />
                  <div className="one">
                    <div className="d-flex justify-content-between align-items-start justify-items-start">
                      <h1>
                        Mark stanely
                        <br />
                        <span>CEO - tanbits</span>
                      </h1>
                      <img src={elquote} alt="" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla commodo est iaculis, accumsan libero eu, imperdiet
                      elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <div className="client__review1">
                <div className="profile__img">
                  <img src={profile1} alt="" />
                  <div className="one">
                    <div className="d-flex justify-content-between align-items-start justify-items-start">
                      <h1>
                        Emma Stone
                        <br />
                        <span>CEO - Magnetic Solution</span>
                      </h1>
                      <img src={elquote} alt="" />
                    </div>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla commodo est iaculis, accumsan libero eu, imperdiet
                      elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
