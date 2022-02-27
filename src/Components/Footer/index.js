import React from "react";
import "./style.css";
import Footer_logo from "../assets/images/ft-logo.png";

export const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <a href="index" className="ft-logo">
                <img src={Footer_logo} alt="Footer_logo" />
              </a>
              <p className="ft-para">
                We are on a mission to democratize the access to emerging
                technologies, like Augmented, Virtual and Mixed Reality, where
                the main barrier to entry is the high cost of hardware and
                practically zero access for people with limited resources.
              </p>
            </div>
            <div className="col-lg-3 offset-lg-1 col-md-6 col-12">
              <h3 className="ft-head">Information</h3>
              <ul className="ft-list">
                <li>
                  <a href="index">Home</a>
                </li>
                <li>
                  <a href="hackathon-results">Hackathon Results</a>
                </li>
                <li>
                  <a href="courses">iHUB @ IITR Course</a>
                </li>
                <li className="nav-item">
                  <a href="https://learn.techxr.co/s/store">Techxr Learn</a>
                </li>
                <li>
                  <a href="faq">FAQ's</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h3 className="ft-head">Important</h3>
              <ul className="ft-list">
                <li>
                  <a href="privacy_policy">Policies</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3  col-md-6 col-12">
              <h3 className="ft-head">Contact Us</h3>
              <p className="para">
                contact@techxr.co <br />
                +91 9109167374
                <br />
                Bhopal
              </p>
              <ul className="so-list">
                <li>
                  <a href="https://www.facebook.com/TechXRinnovations/">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/techxrinnovations">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/techxr/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
              <a
                style={{ color: "#2CABE1" }}
                className="para"
                href="https://discord.com/invite/rdJ2aHqHSF"
              >
                Join Discord From Here
              </a>
            </div>
          </div>
        </div>
        <div className="ft-btm">
          <div className="container">
            <p>Copyright 2022 TechXR Innovations Private Limited</p>
          </div>
        </div>
      </footer>
    </>
  );
};
