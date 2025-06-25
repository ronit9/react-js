import React, { useEffect } from "react";
import { Card, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router";
import { getrandomverse } from "../redux/action/geetaaction";

const GeetaBanner = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();
  const lang = useSelector((state) => state.getgeeta.lang);
  const verse = useSelector((state) => state.getgeeta.verse);
  const randomverse = useSelector((state) => state.getgeeta.randomverse);


  useEffect(() => {
    dispach(getrandomverse(verse));
  }, [verse]);
  const gorandom = () => {
    navigate(`/RandomRead`);
  };

  return (
    <>
      <section className="banner p-5 ">
        <Container>
          <Col className="d-flex justify-content-center banner-img">
            <img src="../public/banner2.webp" alt="" className="rounded-3 " />
          </Col>
          <Col className=" img-content">
            {lang === "hindi" ? (
              <>
                <h1>
                  भगवत गीता का अनुभव करें <span>कहीं भी कभी भी</span>
                </h1>
                <button
                  className="img-btn"
                  onClick={() => gorandom(randomverse?.map((val) => val.id))}
                >
                  अधिक जानें
                </button>
              </>
            ) : (
              <>
                <h1>
                  Experience the Gita <span> Anywhere, Anytime</span>
                </h1>
                <button
                  className="img-btn"
                  onClick={() => gorandom(randomverse?.map((val) => val.id))}
                >
                  Learn More
                </button>
              </>
            )}
          </Col>

          <Col className="d-flex align-items-center p-5 flex-column">
            <Card className="randomcard p-4">
              {lang === "hindi"
                ? randomverse?.map((val, index) => {
                    const { id, name, chapter_summary_hindi } = val;
                    return (
                      <div key={index}>
                        <Col className="d-flex justify-content-between border-bottom p-2">
                          <span>आज का अध्याय</span>
                          <span className="">
                            ||&nbsp;{id}&nbsp;||&nbsp; {name}✨
                          </span>
                        </Col>
                        <p>{chapter_summary_hindi}</p>

                        <button onClick={() => gorandom(id)}>
                          "Learn More"
                        </button>
                      </div>
                    );
                  })
                : randomverse?.map((val, index) => {
                    const { id, name_translated, chapter_summary } = val;
                    return (
                      <div key={index}>
                        <Col className="d-flex justify-content-between border-bottom p-2">
                          <span>Chapter of the day</span>
                          <span className="">
                            ||&nbsp;{id}&nbsp;||&nbsp; {name_translated}✨
                          </span>
                        </Col>
                        <p>{chapter_summary}</p>

                        <button onClick={() => gorandom(id)}>
                          "Learn More"
                        </button>
                      </div>
                    );
                  })}
            </Card>
          </Col>
        </Container>
      </section>
    </>
  );
};

export default GeetaBanner;
