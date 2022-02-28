import React from "react";
import "./style.css";
import Tabsbtn from "@comp/Tabsbtn";
import portfolio from "@assets/images/portfolio.svg";
import portfolio1 from "@assets/images/Mask Group.svg";
import portfolio2 from "@assets/images/portfolio1.svg";
import portfolio3 from "@assets/images/portfolio2.svg";
import portfolio4 from "@assets/images/portfolio3.svg";
import portfolio5 from "@assets/images/Rectangle.svg";

const Profolio = () => {
  return (
    <>
      <section className="At___Profoliosection">
        <div className="At__Profolio">
          <h6 data-aos="fade-up">Our Protfolio</h6>
          <h1 data-aos="fade-up">Some Featured</h1>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            commodo est iaculis, <br /> accumsan libero eu, imperdiet elit.
          </p>
        </div>
        <Tabsbtn />
        <div className="row mx-0 Tab__img" data-aos="fade-up">
          <div className="col-md-4">
            <img src={portfolio1} alt="" />
          </div>
          <div className="col-md-4">
            <img src={portfolio} alt="" />
          </div>
          <div className="col-md-4">
            <img src={portfolio3} alt="" />
          </div>
        </div>
        <div className="row mx-0 Tab__img" data-aos="fade-up">
          <div className="col-md-4">
            <img src={portfolio5} alt="" />
          </div>
          <div className="col-md-4">
            <img src={portfolio2} alt="" />
          </div>
          <div className="col-md-4">
            <img src={portfolio4} alt="" />
          </div>
        </div>
        <div className="Explore___div">
          <button className="Explore___btn">Explore More</button>
        </div>
      </section>
    </>
  );
};
export default Profolio;
