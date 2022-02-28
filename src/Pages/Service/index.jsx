import React from "react";
import "./style.css";
import web from "@assets/images/carbonapplication-web.svg";
import software from "@assets/images/carboncontainer-software.svg";
import mobile from "@assets/images/carbonapplication-mobile.svg";
import teacher from "@assets/images/lachalkboard-teacher.svg";

const Service = () => {
  return (
    <>
      <section className="At___servicesection">
        <div className="At__service">
          <h6 data-aos="fade-up"> our services</h6>
          <h1 data-aos="fade-up">
            solving complex digital product challeenges
          </h1>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            commodo est iaculis, <br /> accumsan libero eu, imperdiet elit.
          </p>

          {/* At__servicediv */}
          <div className="At__servicediv">
            <div className="row mx-0">
              <div className="col-lg-6" data-aos="fade-up">
                <div className="servicediv">
                  <div className="d-flex">
                    <div className="webimg">
                      <img src={web} alt="" />
                    </div>
                    <div className="website___div">
                      <h1>website development</h1>
                      <ul>
                        <li>introductory static website</li>
                        <li>corporate level website</li>
                        <li>E-commerce solutions</li>
                        <li>product page</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* servicediv1 */}
              <div className="col-lg-6" data-aos="fade-up">
                <div className="servicediv1">
                  <div className="d-flex">
                    <div className="webimg">
                      <img src={software} alt="" />
                    </div>
                    <div className="website___div">
                      <h1>Software development</h1>
                      <ul>
                        <li>introductory static website</li>
                        <li>corporate level website</li>
                        <li>E-commerce solutions</li>
                        <li>product page</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* servicediv */}
            <div className="row mx-0">
              <div className="col-lg-6" data-aos="fade-up">
                <div className="servicediv">
                  <div className="d-flex">
                    <div className="webimg">
                      <img src={mobile} alt="" />
                    </div>
                    <div className="website___div">
                      <h1>website development</h1>
                      <ul>
                        <li>introductory static website</li>
                        <li>corporate level website</li>
                        <li>E-commerce solutions</li>
                        <li>product page</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* servicediv1 */}
              <div className="col-lg-6" data-aos="fade-up">
                <div className="servicediv1">
                  <div className="d-flex">
                    <div className="webimg">
                      <img src={teacher} alt="" />
                    </div>
                    <div className="website___div">
                      <h1>website development</h1>
                      <ul>
                        <li>introductory static website</li>
                        <li>corporate level website</li>
                        <li>E-commerce solutions</li>
                        <li>product page</li>
                      </ul>
                    </div>
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
export default Service;
