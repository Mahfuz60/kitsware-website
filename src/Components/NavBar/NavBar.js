import React from "react";
import "./NavBar.css";
import logoImg from "../../images/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" container-fluid nav_bg">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <nav className="navbar navbar-expand-lg ">
            <div className="logo  container-fluid">
              <img src={logoImg} alt="logo" />
              <Link exact to="/" className="navbar-brand">
                KitsWare Technology
              </Link>
              <button
                className="navbar-toggler navbar-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link ">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/service" className="nav-link ">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/footer" className="nav-link ">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link ">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item dropdown ">
                    <Link
                      className="nav-link dropdown-toggle "
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Courses
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item">
                          Hardware and IOT Project
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item">Web Development</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item">
                          Mobile App Development
                        </Link>
                      </li>

                      <li>
                        <Link className="dropdown-item">Graphics Design</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item">Digital Marketing</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
