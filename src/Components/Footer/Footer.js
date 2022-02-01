import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faAddressBook,
  faMapMarker,
  faEnvelope,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_div">
      <div className=" container ">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="row">
              <div className="col-md-3 col-10 mx-auto">
                <div>
                  <h3 className=" pt-3">About Us</h3>
                </div>
                <p className="footer_para">
                  KitsWare Technology & Engineering is consisted of a group of
                  experienced designers, developers, strategists and
                  technologists who are focused on to fulfill the intrinsic
                  nature and indispensable quality of your desire.
                </p>
                <a
                  className="footer_a"
                  href="https://www.facebook.com/kitsware"
                >
                  Read more
                </a>
              </div>
              <div className="col-md-3 col-10 mx-auto">
                <div>
                  <h3 className="mx-4 pt-3">Contact Us</h3>
                  <div>
                    <ul>
                      <li>
                        <FontAwesomeIcon
                          className="footer_icon"
                          icon={faPhone}
                        />
                        +8801521-438070
                      </li>
                      <li>
                        <FontAwesomeIcon
                          className="footer_icon"
                          icon={faEnvelope}
                        />
                        info@kitsware.com
                      </li>

                      <li>
                        <FontAwesomeIcon
                          className="footer_icon"
                          icon={faAddressBook}
                        />
                        shop #131, 1st floor, Bikrampur plaza market, Jurain
                        railgate, Dhaka 1204
                      </li>
                      <li>
                        <FontAwesomeIcon
                          className="footer_icon"
                          icon={faMapMarker}
                        />
                        <a
                          className="footer_link"
                          href="https://www.google.com/maps/dir/23.7726202,90.3477458/Kitsware+Technology/@23.733525,90.356937,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3755b927c5c07565:0xa44f878d1d57fa3!2m2!1d90.4353727!2d23.6932068"
                        >
                          Get Direction
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          className="footer_icon"
                          icon={faFacebook}
                        />
                        <a
                          className="footer_link"
                          href="https://www.facebook.com/kitsware"
                        >
                          FB Page
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-10 mx-auto">
                <div>
                  <h3 className="mx-4 pt-3">Services</h3>
                  <div className="service_list">
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} /> Web Development
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} /> Mobile
                        Development
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        Software Development
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        IOT & Wireless Sensor Solution
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        ELectronics and Hardware Solution
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        Digital Marketing
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        3D Printing
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        AI Solution
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        AR & VR Solution
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-10 mx-auto">
                <div>
                  <h3 className="mx-4 pt-3">More Info</h3>
                  <div className="service_list">
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        Privacy Policy
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        Refund and Return
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        Terms and Conditions
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        Wishlist
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center pt-5 copy_right">
        © COPYRIGHT {new Date().getFullYear()} ALL RIGHTS RESERVED
      </p>
    </div>
  );
};

export default Footer;
