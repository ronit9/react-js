import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FiFeather } from "react-icons/fi";
const Headers = ({ chapterInfo, selectlanguage, selectlang,getselectChapter  }) => {
 
  
  const show = (e) => {
    const subMenu = e.target.querySelector(".sub-menu");
    if (subMenu) {
      subMenu.style.visibility = "visible";
    }
    window.addEventListener("click", (event) => {
      if (event.target !== subMenu && event.target !== e.target) {
        subMenu.style.visibility = "hidden";
      }
    });
  };

  return (
    <section className="head p-2 ">
      <div className="container">
        <div className="row align-items-center justify-content-between ">
          <div className="img col-sm-1">
            <img src="/public/img/logo.png" alt="" />
          </div>
          <div className="menu col-sm-10">
            <ul className="d-flex justify-content-between list-unstyled m-0 position-relative">
              <li onClick={(e) => show(e)}>
                {selectlanguage === "hindi" ? "अध्याय" : "chapter"}
                <FaCaretDown className="mx-1" />
                <ul className=" sub-menu list-unstyled position-absolute">
                  {chapterInfo &&
                    chapterInfo.map((chapter) => (
                      <li
                        onClick={() => getselectChapter(chapter)}
                        key={chapter.id}
                      >
                        <FiFeather className="m-2" />
                        {selectlanguage === "hindi"
                          ? chapter.name
                          : chapter.name_meaning}
                      </li>
                    ))}
                </ul>
              </li>
              <li>{selectlanguage === "hindi" ? "उद्धरण" : "quotes"} </li>
              <li>
                {selectlanguage === "hindi"
                  ? "भगवत गीता के बारे में"
                  : "about gita"}
              </li>
              <li>{selectlanguage === "hindi" ? "गीता एआई" : "gita AI"}</li>
              <li className="d-flex align-items-center">
                <div className="position-relative   d-flex align-items-center">
                  <input type="text" placeholder="  search" />
                  <FaSearch className="position-absolute search m-2" />
                </div>
              </li>
              <li onClick={(e) => show(e)} className="position-relative">
                {selectlanguage === "hindi" ? (
                  <img
                    src="/public/img/hi.svg"
                    alt=""
                    style={{ width: "30px", marginRight: "10px" }}
                  />
                ) : (
                  <img
                    src="/public/img/en.svg"
                    alt=""
                    style={{ width: "30px", marginRight: "10px" }}
                  />
                )}{" "}
                <FaCaretDown className="mx-1" />
                <ul className=" sub-menu list-unstyled position-absolute">
                  <li
                    className="d-flex align-items-center"
                    onClick={() => selectlang("hindi")}
                  >
                    <img
                      src="/public/img/hi.svg"
                      alt=""
                      style={{ width: "30px", marginRight: "10px" }}
                    />
                    <span className="fs-6">हिन्दी</span>
                  </li>
                  <li
                    className="d-flex align-items-center my-2"
                    onClick={() => selectlang("english")}
                  >
                    <img
                      src="/public/img/en.svg"
                      alt=""
                      style={{ width: "30px", marginRight: "10px" }}
                    />
                    <span className="fs-6">english</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headers;
