import React, { useState } from "react";
import Home1 from "../assets/images/h-img01.svg";
import Home2 from "../assets/images/h-img02.svg";
import Wave from "../assets/images/c-wave-bg.svg";
import Home4 from "../assets/images/h-img04.svg";
import Home3 from "../assets/images/h-img03.svg";
import Line from "../assets/images/line-des.svg";
import Arrow from "../assets/images/blue-arrow.svg";
import { Link } from "react-router-dom";

import "./style.css";
import { Review, Video } from "..";
export const Home = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${name} ${email} ${number}`)
  };
  return (
    <div className="banner_main">
      <div className="banner">
        <div className="banner-area">
          <img src={Line} className="line-des" alt="Line" />
          <div className="container">
            <div className="row inner-banner align-items-center">
              <div className="col-md-6">
                <div className="head-content">
                  <h1>
                    Making Quality AR-VR Learning Easy - Affordable - Accessible
                  </h1>
                  <p className="para">
                    Join Our AR-VR Certification Program in Association with
                    iHub DivyaSampark @ IIT Roorkee
                  </p>
                </div>
              </div>
              <div className="col-md-6 ">
                <form
                onSubmit={formSubmit}
                  className="head-form c-card"
                  id="myform"
                >
                  <h4 className="head text-center mb-5">Explore Courses</h4>
                  <div className="form-group">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      title="Please enter a valid email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      placeholder="Mobile"
                      id="contact"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      title="Please enter a valid number"
                    />
                  </div>
                 <button className="main-btn" type="submit">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-sec-container">
        <section className="h-sec pt-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="h-img">
                  <img src={Home1} alt="Home1" />
                </div>
              </div>
              <div className="col-lg-6  col-md-6 col-12">
                <div className="h-con offset-lg-1">
                  <h3 className="sec-head">OUR FLAGSHIP PROGRAM</h3>
                  <p className="para d-none">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <ul className="pp-list">
                    <li>6 Week Bootcamp</li>
                    <li>15000 INR</li>
                    <li>Limited Seats</li>
                  </ul>
                  <Link
                    to="https://storage.googleapis.com/platform-media-bucket/media/Course%20Brochure%206Weeks.pdf"
                    className="main-btn link-btn with-ico"
                    target="blank"
                  >
                    <span>Download Brochure</span>
                    <img src={Arrow} alt="Arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-sec">
          <img src={Wave} alt="Wave" />
          <div className="container">
            <div className="row align-items-center flex-md-row-reverse">
              <div className="col-lg-5 offset-lg-2 col-md-12 col-12">
                <div className="h-img">
                  <img src={Home2} alt="Home2" />
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-12">
                <div className="h-con">
                  <h3 className="sec-head">COURSE STRUCTURE</h3>
                  <p className="para d-none">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <ul className="pp-list">
                    <li>Create your first Unity 3D application</li>
                    <li>Create your first AR application</li>
                    <li>Learn important 3D development skills/practices</li>
                    <li>
                      Upgrade your AR application and make it 360 degree
                      rotatable
                    </li>
                    <li>Create your first VR application</li>
                    <li>
                      Create first-person-shooter VR game for six degree of
                      freedom (6 DoF) controllers, such as Oculus, HTC Vive,
                      etc.
                    </li>
                  </ul>
                  <a href="courses" className="main-btn link-btn with-ico">
                    <span>Know More</span>
                    <img src={Arrow} alt="Arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-sec pt-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12 col-12">
                <div className="h-img">
                  <img src={Home4} alt="Home4" />
                </div>
              </div>
              <div className="col-lg-5 offset-lg-2 col-md-12 col-12">
                <div className="h-con">
                  <h3 className="sec-head">WHY US ?</h3>
                  <p className="para d-none">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <ul className="pp-list">
                    <li>
                      We are subject matter experts. We hold a patent on our
                      soon-to-be-launched indigenous 6 DoF Techxr controller.
                    </li>
                    <li>
                      We guarantee significant learning for 100% of the
                      participants completing the course.
                    </li>
                    <li>
                      We Designed &amp; Delivered similar course for NIFT
                      regular curriculum.
                    </li>
                    <li>
                      The Course designed by a team of IITians and vetted by IIT
                      Roorkee Computer Science faculty.
                    </li>
                    <li>
                      We enable hands-on learning with our 6 DoF developer kit.
                      No need for costly hardware such as Oculus, HTC Vive, etc.
                    </li>
                    <li>
                      We provide doubt solving support, both offline and live
                      sessions.
                    </li>
                    <li>We train students to create demonstrable MVP.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-sec ">
          <img src={Wave} alt="Wave" />
          <div className="container">
            <div className="row align-items-center flex-md-row-reverse">
              <div className="col-lg-5 offset-lg-2 col-md-12 col-12">
                <div className="h-img">
                  <img src={Home3} alt="Home3" />
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-12">
                <div className="h-con">
                  <h3 className="sec-head">AFTER SUCCESSFUL COMPLETION</h3>
                  <p className="para d-none">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <ul className="pp-list">
                    <li>
                      All candidates get Certificate by TechXR and iHUB IIT
                      Roorkee
                    </li>
                    <li>
                      All candidates would have completed one VR and two AR
                      Minimum Viable Project
                    </li>
                    <li>All candidates get limited placement assistance</li>
                    <li>
                      Top submissions get showcased on the Techxr Developer
                      Portal
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Video />
      <Review />
    </div>
  );
};
