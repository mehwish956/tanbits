import React from "react";
import "./style.css";
import logo from "@assets/images/logoimg.png";
import Facebook from "@assets/images/Facebook Icon.svg";
import Twitter from "@assets/images/Twitter Icon.svg";
import Linkedin from "@assets/images/Linkedin Icon.svg";

const Footer = () => {
  return (
    <>
      <section className="At___footersection">
        <div className="row mx-0 At____Footer">
          <div className="col-md-3 Logo__footer">
            <ul>
              <li></li>
              <li>
                <p>
                  <span>
                    <img src={logo} alt="" />
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  eu ipsum nunc. Nunc est ipsum, aliquet at gravida sit amet,
                  bibendum a enim. Aliquam erat volutpat. Nulla lacinia dictum
                  fringilla. Ut efficitur tortor a purus maximus facilisis.
                  Maecenas pretium enim eget auctor convallis. Pellentesque
                  tincidunt venenatis erat sodales porta. Suspendisse nec
                  tristique leo. Phasellus facilisis auctor tortor, nec
                  hendrerit urna aliquam quis.
                </p>
              </li>
            </ul>
          </div>

          <div className="col-md-3 Logo__footer">
            <h4>Navigation</h4>
            <ul>
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">about us</a>
              </li>
              <li>
                <a href="">work</a>
              </li>
              <li>
                <a href="">contact us</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 Logo__footer">
            <ul>
              <h4>legal</h4>
              <ul>
                <li>
                  <a href="">general info</a>
                </li>
                <li>
                  <a href="">privacy policy</a>
                </li>
                <li>
                  <a href="">terms of service</a>
                </li>
                <li>
                  <a href="">legal policy</a>
                </li>
              </ul>
            </ul>
          </div>

          <div className="col-md-3 Logo__footer">
            <ul>
              <h4>contact us</h4>
              <ul>
                <li>
                  <a href="" className="info">
                    info@example.com
                  </a>
                </li>
                <li>
                  <a href="" className="info">
                    + 1 (307) 555-0133
                  </a>
                </li>
                <li>
                  <a href="" className="info">
                    3891 ranchview dr. richardson california
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>

        {/* icons */}
        <div className="icon___div">
          <a href="" className="icon___text">
            &copy; 2021 saqib s. all right reserved.
          </a>
          <ul>
            <li>
              <img src={Facebook} alt="Facebook" className="Facebook" />
            </li>
            <li>
              <img src={Twitter} alt="Twitter" className="Twitter" />
            </li>
            <li>
              <img src={Linkedin} alt="Linkedin" className="Linkedin" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default Footer;
