import React from "react";
import Reviews from "../assets/images/ft-des.svg";
import Star from "../assets/images/r-star.svg";
import Nakul from "../assets/images/nakul.png";
import Sakshi from "../assets/images/sakshi.png";
import Jyoti from "../assets/images/jyoti.png";
import "./style.css";
export const Review = () => {
  return (
    <>
      <section className="test-sec">
        <img src={Reviews} alt="Review" />
        <div className="container">
          <div className="row">
            <h3 className="sec-head text-center mb-5">Student's Reviews</h3>

            <div className="col-md-4  my-2">
              <div className="card test-wrap h-100 border-0">
                <img src={Star} className="card-img-top" alt="Star" />
                <div className="card-body">
                  <div className="card-content">
                    <p className="card-text pt-3">
                      "The course overall was a very good and amazing learning
                      experience. I wanna thank team TechXR for all the
                      hard-work and hours they put in with us."
                    </p>
                  </div>
                </div>
                <div className="test-det-wrap mb-5">
                  <img src={Nakul} alt="Nakul" />
                  <div className="test-con">
                    <h4>Nakul Juneja</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4  my-2">
              <div className="card test-wrap h-100 border-0">
                <img src={Star} className="card-img-top" alt="Star" />
                <div className="card-body">
                  <div className="card-content">
                    <p className="card-text pt-3">
                      "The course was very comprehensive and TechXR made it
                      easier for us to create Augmented and Virtual Reality
                      experience."
                    </p>
                  </div>
                </div>
                <div className="test-det-wrap mb-5">
                  <img src={Jyoti} alt="Jyoti" />
                  <div className="test-con">
                    <h4>Jyoti Rawal</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4  my-2">
              <div className="card test-wrap h-100 border-0">
                <img src={Star} className="card-img-top" alt="Star" />
                <div className="card-body">
                  <div className="card-content">
                    <p className="card-text pt-3">
                      "It was good! The TechXR team was very supportive. Learned
                      the basics of unity and developed experiences out of it."
                    </p>
                  </div>
                </div>
                <div className="test-det-wrap mb-5">
                  <img src={Sakshi} alt="Sakshi" />
                  <div className="test-con">
                    <h4>Sakshi Singh</h4>
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
