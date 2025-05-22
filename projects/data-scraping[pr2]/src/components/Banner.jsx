import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram,FaPlay   } from "react-icons/fa";
const Banner = ({ mainbanner }) => {
  // console.log(mainbanner);
  return (
    <section className="banner">
      <div className="container">
        <div className="row ">
          <div className="col-6    ">
            <div className="content  text-light ">
              {mainbanner.map((i, index) => {
                // const {id,title}=i
                return index == 0 ? (
                  <p style={{ color: "#BA9657" }}  key={index} className="m-0 fs-4">
                    {i.title}
                  </p>
                ) : null;
              })}
              {mainbanner.map((i, index) => {
                return index == 1 ? (
                  <h1 className="fw-bold my-3 " key={index} style={{ fontSize: "65px" }}>
                    {i.title}
                  </h1>
                ) : null;
              })}
              {mainbanner.map((i, index) => {
                return index == 2 ? <p key={index}>{i.title}</p> : null;
              })}
            </div>
            <div className="icon  col-6 d-flex gap-4 text-white fs-3">
              <FaFacebook className="border border-white rounded-circle p-2 fs-1" />
              <FaTwitter className="border border-white rounded-circle p-2 fs-1" />
              <FaLinkedin className="border border-white rounded-circle p-2 fs-1" />
              <FaInstagram className="border border-white rounded-circle p-2 fs-1" />
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div className="play-icon ">
              <FaPlay  className=" p-2 fs-1 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
