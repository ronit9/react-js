import React, { use, useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { getverse } from "../redux/action/geetaaction";
import { useParams } from "react-router";
import { Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
const RandomRead = () => {
  const dispach = useDispatch();
  const randomvchapter = useSelector((state) => state.getgeeta.randomverse);
  const allverse = useSelector((state) => state.getgeeta.allverse);
  const lang = useSelector((state) => state.getgeeta.lang);
  useEffect(() => {
    if (randomvchapter) {
      dispach(getverse(randomvchapter));
    }
  }, [randomvchapter]);
 
  useEffect(() => {
    const dotsContainer = document.getElementById("dots-container");
    for (let i = 0; i < 20; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.animationDelay = `${Math.random() * 15}s`;
      dot.style.width = `${3 + Math.random() * 4}px`;
      dot.style.height = dot.style.width;

      dotsContainer.appendChild(dot);
    }
  }, []);
  return (
    <>
      <Header />
      <section className="randomread py-5 ">
        <Container>
          {lang === "hindi"
            ? randomvchapter?.map((val, index) => {
                const { id, name, chapter_summary_hindi } = val;
                return (
                  <Row className="justify-content-center text-center text-white mb-5">
                    <Col
                      md={10}
                      lg={8}
                      className="shadow p-4 rounded glass-card"
                    >
                      <div className="floating-dots" id="dots-container"></div>
                      <h5 className="mb-3 fs-4">
                        <span>अध्याय:</span> {id}
                      </h5>
                      <h1 className="mb-4 text-color">{name}</h1>
                      <p className="fs-5">{chapter_summary_hindi}</p>
                      <div className="d-flex justify-content-center mt-4">
                        <img
                          src="../public/pngwing.com.png"
                          alt="Divider"
                          className="img-fluid"
                          style={{ maxHeight: "120px" }}
                        />
                      </div>
                    </Col>
                  </Row>
                );
              })
            : randomvchapter?.map((val, index) => {
                const { id, name_translated, chapter_summary } = val;
                return (
                  <Row className="justify-content-center text-center text-white mb-5">
                    <Col
                      md={10}
                      lg={8}
                      className="shadow p-4 rounded glass-card"
                    >
                      <div className="floating-dots" id="dots-container"></div>
                      <h5 className="mb-3 fs-4">
                        <span>verse:</span> {id}
                      </h5>
                      <h1 className="mb-4 text-color">{name_translated}</h1>
                      <p className="fs-5">{chapter_summary}</p>
                      <div className="d-flex justify-content-center mt-4">
                        <img
                          src="../public/pngwing.com.png"
                          alt="Divider"
                          className="img-fluid"
                          style={{ maxHeight: "120px" }}
                        />
                      </div>
                    </Col>
                  </Row>
                );
              })}
        </Container>
      </section>

      <section className="list py-4 ">
        <Container>
          <Row className="align-items-center  ">
            {lang === "hindi"
              ? randomvchapter?.map((val, index) => {
                  const { verses_count } = val;
                  return (
                    <>
                      <Col key={index} className=" py-3 ">
                        <div className=" p-3  ">
                          <h5 className="mb-0">श्लोक: {verses_count}</h5>
                        </div>
                      </Col>
                    </>
                  );
                })
              : randomvchapter?.map((val, index) => {
                  const { verses_count } = val;
                  return (
                    <>
                      <Col key={index} className=" py-3 ">
                        <div className=" p-3  ">
                          <h5 className="mb-0">Verses: {verses_count}</h5>
                        </div>
                      </Col>
                    </>
                  );
                })}
            <Col md={4}>
              <Form>
                <Form.Control
                  className="p-3 fs-4  rounded-0"
                  type="search"
                  placeholder={lang === "hindi" ? "खोज..." : "Search..."}
                  aria-label="Search"
                />
              </Form>
            </Col>
          </Row>
          <Row>
            {lang === "hindi"
              ? allverse?.map((val, index) => {
                  const { verse_number, text } = val;

                  const delay = `${index * 0.3}s`;

                  return (
                    <Col md={4} key={index}>
                      <Card
                        className="verse-card bounce-in-top"
                        style={{ animationDelay: delay }}
                      >
                        <Card.Body className="d-flex flex-column">
                          <Card.Title className="verse-title fs-5 fw-semibold ">
                            श्लोक {verse_number}
                          </Card.Title>
                          <Card.Text className="fs-6 mt-2">{text}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
              : allverse?.map((val, index) => {
                console.log(val);
                
                  const { verse_number, transliteration } = val;

                  const delay = `${index * 0.3}s`;

                  return (
                    <Col md={4} key={index}>
                      <Card
                        className="verse-card bounce-in-top "
                        style={{ animationDelay: delay,height:"200px" }}
                      >
                        <Card.Body className="d-flex flex-column justify-content-center">
                          <Card.Title className="verse-title fs-5 fw-semibold ">
                            verse {verse_number}
                          </Card.Title>
                          <Card.Text className="fs-6 mt-2">{transliteration}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RandomRead;
