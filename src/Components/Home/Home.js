import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import web from "../../images/web.png";


const Home = () => {
  return (
    <>
      <section id="header" className="d-flex">
        <div className=" container-fluid nav_bg">
          <div className="row">
            <div className="col-md-10 mx-auto ">
              <div className="row pb-5">
                <div className="col-md-6 pt-5 mt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Grow Your Business With
                    <strong className="brand-name"> KitsWare Technology</strong>
                  </h1>
                  <h4 className="my-3">
                    We are a team of talented developers Making
                    <br /> Web Applications and Hardware Project Solution.
                  </h4>
                  <div className="mt-4 ">
                    <Link to="/service" className="btn-started">
                      Get Started
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 order-1 order-lg-2 img-header mb-5">
                  <img
                    src={web}
                    alt="home-img"
                    className="home-img img-fluid "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
