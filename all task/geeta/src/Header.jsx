import React from "react";
import Banner from "./Banner";
import { useState } from "react";
``;

const Header = ({ chapterInfo, selectchapter }) => {
  return (
    <>
      <style>
        {`div{
          color: #7E3D0E;
          // background-color: #B59969;
        }
        input,select{
          border-radius: 10px;
          padding: 10px 20px;
          border:2px solid #7E3D0E;
          color: #7E3D0E;
         
          transition: all 0.5s ease;
        }
          select option:hover{
            background-color: #7E3D0E;
            
          }
         
        input::placeholder{
          color: #7E3D0E;
          transition: all 0.5s ease;
        }
        ul li select option:hover{
            background-color: #7E3D0E;
          }
        
        `}
      </style>
      <div className="container">
        <div className="row all align-items-center justify-content-between">
          <div className="col-2 img">
            <img
              src="/public/img/logo.png"
              alt=""
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
          <div className="col-8">
            <ul className="list-unstyled align-items-center d-flex justify-content-between m-0">
              <li>
                <select
                
                  onChange={(e) => {
                    selectchapter(e.target.value);
                  }}
                >
                  <option>--Select Chapter--</option>
                  {chapterInfo &&
                    chapterInfo.map((chapter) => (
                      <option
                      value={chapter.id}
                        key={chapter.id}
                        onClick={() => selectchapter(chapter.id)}
                      >
                        {chapter.slug}
                      </option>
                    ))}
                </select>
              </li>
              <li>Quotes</li>
              <li>About Gita</li>
              <li>Gita AI</li>
              <li>
                <input type="text" placeholder="Search Gita" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
