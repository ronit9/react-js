import React from "react";
import { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { gsap } from 'gsap';
import { TimelineLite, TweenLite } from 'gsap';
const Header = ({ mainheader, icon }) => {
  const rmenu=useRef();
  // const timeline = gsap.TimelineLite();
  

  

  return (
    <>
      <section className="header p-2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="img col-2">
              <img
                src="https://kit.bagigambar.net/tayla/wp-content/uploads/sites/26/2021/08/logo_Asset-1_4.png"
                alt=""
                width={150}
              />
            </div>
            <div className="menu col-8" ref={rmenu}>
              <ul className="d-flex m-0 justify-content-between">
                {mainheader.map((i) => {
                  const { id, title } = i;
                  return (
                    <li key={id}>
                      <a href="#">{title}</a>
                      {title == "services" ? (
                        <ul className="list-unstyled ">
                          {i.services.map((j) => {
                            const { id, title } = j;
                            return (
                              <li className="mb-1" key={id}>
                                <a href="#">{title}</a>
                              </li>
                            );
                          })}
                        </ul>
                      ) : null}
                      {title == "pages" ? (
                        <ul className=" ">
                          {i.pages.map((p) => {
                            const { id, title } = p;
                            return (
                              <li className="mb-1" key={id}>
                                <a href="">{title}</a>
                              </li>
                            );
                          })}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="search col-2  ">
             <div className="d-flex justify-content-end">
             <span className="icon text-white fs-3">{icon}</span>
             </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
