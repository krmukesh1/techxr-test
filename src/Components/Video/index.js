import React from "react";
import Video_1 from "../assets/images/video-1.mp4";
import Video_2 from "../assets/images/video-2.mp4";
import Video_3 from "../assets/images/video-3.mp4";
import "./style.css";
export const Video = () => {
  return (
    <>
      <section className="projects-sec">
        <div className="container">
          <div className="row">
            <h3 className="sec-head text-center">FEATURED PROJECTS</h3>
            <p className="sub-head blue text-center">Projects By Our Students</p>
            <div className="col-md-4  my-2">
              <div className="card  h-100 border-0">
                <div className="pr-vid-wrap">
                  <video width="100%" controls>
                    <source src={Video_1} type="video/mp4" />
                  </video>
                </div>
                <div className="pr-det">
                  <h4>Maze Runner</h4>
                  <h6>Kshitija Rajput</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4  my-2">
              <div className="card  h-100 border-0">
                <div className="pr-vid-wrap">
                  <video width="100%" controls>
                    <source src={Video_2} type="video/mp4" />
                  </video>
                </div>
                <div className="pr-det">
                  <h4>AR Living Room</h4>
                  <h6>Shruti Agarwal</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4  my-2">
              <div className="card  h-100 border-0">
                <div className="pr-vid-wrap">
                  <video width="100%" controls>
                    <source src={Video_3} type="video/mp4" />
                  </video>
                </div>
                <div className="pr-det">
                  <h4>Virtual Fashion Gallery</h4>
                  <h6>Yakshi Bhardwaj</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
