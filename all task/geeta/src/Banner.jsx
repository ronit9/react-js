import React from "react";
import { useState } from "react";
import Header from "./Header";

const Banner = ({ chapterInfo, verses, selectedChapter }) => {
  // console.log(chapterInfo);
  console.log(verses);
  // console.log(selectedChapter);
  const [info, setInfo] = useState();

  return (
    <>
      <style>
        {`
        .img2 img{
          border-radius: 10px;
        }
        `}
      </style>
    
      <div className="container">
        <div className="row">
          <div className="col-12 img2">
            <img
              src="/public/img/banner2.webp"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-12 text-center">
            <h1 className="m-3">
              chapter:-{chapterInfo && chapterInfo[selectedChapter]?.name}
            </h1>
            <p>
              <b>info:-</b>
              {chapterInfo &&
                chapterInfo[selectedChapter]?.chapter_summary_hindi}
            </p>

            <hr />
            <h3>total verse:-{verses.length}</h3>
            <hr />

            {verses.map((verse, index) => (
              <div key={index}
                onClick={(e, index) => {
                  if (e.id === index) {
                    setInfo(verse.id);
                    console.log(verse.id);
                  }
                }}
                className="d-flex justify-content-between"
              >
                <span>verse:-{++index}</span>
                <p className="text-center">{verse.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
