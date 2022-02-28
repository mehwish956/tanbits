import React from "react";
import logo from "@assets/images/logoimg.png";
import Scrollspy from "react-scrollspy";
import "./style.css";
const Header = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <>
      <header className="At___header">
        <Scrollspy
          items={[
            "At__homescetion",
            "At___servicescetion",
            "At__aboutscetion",
            "At__Profolioscetion",
            "At__Blogsscetion",
          ]}
          currentClassName="is-current"
        >
          <div>
            <div
              className={click ? "main-container" : ""}
              onClick={() => Close()}
            />
            <nav className="navbar" onClick={(e) => e.stopPropagation()}>
              <div className="nav-container">
                <a href="#" className="nav-logo">
                  <div className="Header_logo">
                    <img src={logo} alt="" />
                  </div>
                </a>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                    <a
                      href="#At__homescetion"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#At___servicescetion"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      Service
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#At__aboutscetion"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#At__Profolioscetion"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      Work
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#At__Blogsscetion"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      Work
                    </a>
                  </li>
                </ul>
                <div className="nav-icon" onClick={handleClick}>
                  <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                </div>
              </div>
            </nav>
          </div>
        </Scrollspy>
      </header>
    </>
  );
};
export default Header;
