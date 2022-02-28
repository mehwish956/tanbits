import React from "react";
import "./style.css";
import empimg from "@assets/images/empimg.svg";
import plane from "@assets/images/fontistopaper-plane-1.svg";
import star from "@assets/images/fontistopaper-star.svg";

const About = () => {
  return (
    <>
      <section className="At___Aboutsection">
        <div className="row mx-0">
          <div
            className="col-lg-6 At__about order-2 order-lg-1"
            data-aos="fade-up"
          >
            <img src={empimg} alt="" />
          </div>
          <div
            className="col-lg-6 At__about1 order-1 order-lg-2"
            data-aos="fade-up"
          >
            <div className="At___Empowering">
              <h6> Our priority is to unlock value faster</h6>
              <h1>Empowering Digital</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum eget lacinia erat. Donec ac metus in quam condimentum
                vehicula quis sit amet sapien.
              </p>
            </div>
            <div className="row mx-0 justify-content-between">
              <div className="col-lg-6 At__aboutCustomer">
                <img src={plane} alt="" />
                <p className="mb-0">20+ Year</p>
              </div>
              <div className="col-lg-6 At__aboutCustomer">
                <img src={star} alt="" />
                <p className="mb-0">12k+ Satisfied Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
