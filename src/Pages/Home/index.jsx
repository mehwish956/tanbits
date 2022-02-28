import React from "react";
import Header from "@Pages/Header/index";
import Homebtn from "@comp/Homebtn";
import Service from "@Pages/Service/index";
import About from "@Pages/About/index";
import Profolio from "@Pages/Profolio/index";
import Reviews from "@Pages/Reviews/index";
import Blogs from "@Pages/Blogs/index";
import Footer from "@Pages/Footer/index";
import img from "@assets/images/Frame.svg";
import "./style.css";

const Home = () => {
  return (
    <>
      <Header />

      <section className="At___layout">
        {/* Home section start */}
        <div className="row mx-0 At___homescetion" id="At__homescetion">
          <div className="col-md-6 At___homediv" data-aos="fade-up">
            <h1>Helping Companies to Build Better Products</h1>
            <p>
              Create solutions For All your needs. got an idea? we can make it
              digital reality.
            </p>
            <Homebtn />
          </div>
          <div className="col-md-6 At___homediv1" data-aos="fade-up">
            <img src={img} alt="fram" />
          </div>
        </div>
        {/* home section end */}

        {/* service section is start */}
        <section id="At___servicescetion">
          <Service />
        </section>
        {/* service section end */}

        {/* About section is start */}
        <section id="At__aboutscetion">
          <About />
        </section>
        {/* About section end */}

        {/* Profolio section is start */}
        <section id="At__Profolioscetion">
          <Profolio />
        </section>
        {/* Profolio section end */}

        {/* reviews section start */}
        <section>
          <Reviews />
        </section>
        {/* review section end */}

        {/* Profolio section is start */}
        <section id="At__Blogsscetion">
          <Blogs />
        </section>
        {/* Profolio section end */}

        {/* footer section start */}
        <section>
          <Footer />
        </section>
        {/* footer section end */}
      </section>
    </>
  );
};
export default Home;
