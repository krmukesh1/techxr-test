import React from "react";
import "./style.css"
import Logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";



export const Navbar = () => {
  return (
    
    <>
   
      <div className="main-nav">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
          <Link className="navbar-brand" to="#">
          <img src={Logo} className="nav-logo" alt="logo" />
        </Link>
            <button
              className="navbar-toggler"
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
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link to="/">HOME</Link></li>
                <li className="nav-item"><Link to="/about">HACKATHON RESULTS</Link></li>
                <li className="nav-item"><Link to="/contact">IHUB @ IITR COURSE</Link></li>
                <li className="nav-item">TECHXR LEARN</li>
                <li className="nav-item"> FAQ'S</li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container logo">
        <div className="col-md-12">
        <img src={Logo} alt="logo" />
        </div>
        </div>
      </div>
    </>
  );
};
