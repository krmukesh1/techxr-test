import React from "react";
// import Video_1 from "../assets/images/video-1.mp4";
// import Video_2 from "../assets/images/video-2.mp4";
// import Video_3 from "../assets/images/video-3.mp4";
import COMPANY_DATA from "../Data";
import "./style.css";
export const Video = () => {
  return (
    <>
    <section className="projects-sec">
    <div className="container">
      <div className="row">
        <h3 className="sec-head text-center">FEATURED PROJECTS</h3>
        <p className="sub-head blue text-center">Projects By Our Students</p>
        {COMPANY_DATA.map((item, index) => {
          return (
            <div className="col-md-4  my-2" key={index}>
              <div className="card  h-100 border-0">
                <div className="pr-vid-wrap">
                  <video width="100%" controls>
                    <source src={item.video} type="video/mp4" />
                  </video>
                </div>
                <div className="pr-det">
                  <h4>{item.title}</h4>
                  <h6>{item.content}</h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
    </>
  );
};
