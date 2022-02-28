import React from "react";
import "./style.css";
// import blog from "@assets/images/portfolio.png";
import card from "@assets/images/card.jpg";
import blog from "@assets/images/card1img.jpg";
import blog1 from "@assets/images/cardimg2.jpg";
import blog2 from "@assets/images/nemoimg.jpg";
import blog4 from "@assets/images/cardimg2.jpg";

const index = () => {
  return (
    <>
      <section className="At__blogssection">
        <div className="At__blogs">
          <h6 data-aos="fade-up">Lastest News</h6>
          <h1 data-aos="fade-up">Our Blog & News</h1>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            commodo est iaculis, <br /> accumsan libero eu, imperdiet elit.
          </p>
          <div
            className="row mx-0 card___div"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="col-md-3 card">
              <figure className="mb-0">
                <img src={card} className="card-img-top card___img" alt="..." />
              </figure>
              <div className="card-body">
                <h2>Sed perspiciatis undomn nase ferror sit voluptatem</h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content Sed perspiciatis undomn nase
                  ferror sit voluptatem.... <a href="#">Read More</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 card">
              <figure className="mb-0">
                <img src={blog} className="card-img-top card___img" alt="..." />
              </figure>
              <div className="card-body">
                <h2>Sed perspiciatis undomn nase ferror sit voluptatem</h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content Sed perspiciatis undomn nase
                  ferror sit voluptatem... <a href="#">Read More</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 card">
              <figure className="mb-0">
                <img
                  src={blog1}
                  className="card-img-top card___img"
                  alt="..."
                />
              </figure>
              <div className="card-body">
                <h2>Sed perspiciatis undomn nase ferror sit voluptatem</h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content Sed perspiciatis undomn nase
                  ferror sit voluptatem.... <a href="#">Read More</a>
                </p>
              </div>
            </div>
          </div>
          <div
            className="row mx-0 card___div"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="col-md-3 card">
              <figure className="mb-0">
                <img
                  src={blog2}
                  className="card-img-top card___img"
                  alt="..."
                />
              </figure>
              <div className="card-body">
                <h2>Sed perspiciatis undomn nase ferror sit voluptatem</h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content Sed perspiciatis undomn nase
                  ferror sit voluptatem.... <a href="#">Read More</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 card">
              <figure className="mb-0">
                <img src={card} className="card-img-top card___img" alt="..." />
              </figure>
              <div className="card-body">
                <h2>Sed perspiciatis undomn nase ferror sit voluptatem</h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content Sed perspiciatis undomn nase
                  ferror sit voluptatem... <a href="#">Read More</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 card">
              <figure className="mb-0">
                <img
                  src={blog4}
                  className="card-img-top card___img"
                  alt="..."
                />
              </figure>
              <div className="card-body">
                <h2>Sed perspiciatis undomn nase ferror sit voluptatem</h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content Sed perspiciatis undomn nase
                  ferror sit voluptatem.... <a href="#">Read More</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
