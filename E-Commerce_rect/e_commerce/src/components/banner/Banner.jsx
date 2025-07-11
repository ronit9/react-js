import { Col, Container, Row } from "react-bootstrap";
import "./banner.css";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
 
import Signin from "../allbuttons/button/Signin";
import Checkbox from "../allbuttons/like/Checkbox";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useRef } from "react";
import { useState } from "react";
import { ADD_TO_CART } from "../../redux/action/AuthAction";
import { useDispatch } from "react-redux";
import Cartbtn from "../allbuttons/button/Cartbtn";
const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const [bannerproduct, setbannerproduct] = useState([
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      image: "../../public/img/eye-liner.jpeg",
      details:
        "This mascara delivers dramatic volume and sculpted lashes without clumps. Ideal for all-day wear with a smudge-proof formula.",
      price: 256,
      gender: "unisex",
      features: [
        "Smudge-proof and long-lasting formula",
        "No clumps or flaking",
        "Dramatic volume and curl",
        "Ideal for sensitive eyes",
        "Easy to remove with makeup remover",
      ],
      bgcolor: "#EDFCF5",
      cardbg: "#f7fffe",
      aroowcolor: "#89A294",
      oldprice: 500,
      reviews: `⭐⭐⭐ 3.5 (1.2k)`,
    },
    {
      id: 2,
      title: "Maybelline Fit Me Foundation",
      image: "../../public/img/fit-face.jpeg",
      details:
        "A lightweight foundation with matte finish that fits skin tone and texture. Ideal for normal to oily skin and provides buildable coverage.",
      price: 126,
      gender: "unisex",
      features: [
        "Matte and poreless finish",
        "Lightweight and blendable formula",
        "Buildable medium coverage",
        "Ideal for normal to oily skin",
        "Available in multiple shades",
      ],
      bgcolor: "#F5ECE3",
      cardbg: "#EBE5D7",
      aroowcolor: "#B49F86",
      oldprice: 500,
      reviews: [
        {
          rating: 3,
          comment: "Smooth finish",
          date: "2025-01-05",
          reviewerName: "Riya",
        },
        {
          rating: 4,
          comment: "Blends easily",
          date: "2025-01-08",
          reviewerName: "Tina",
        },
        {
          rating: 3,
          comment: "Needs re-application",
          date: "2025-01-11",
          reviewerName: "Diya",
        },
      ],
      qty: 1,
      finalTotal: 126,
      category: "cosmetics",
    },
    {
      id: 7,
      title: "Beardo Beard Oil",
      image: "../../public/img/beardo-oil.jpeg",
      details:
        "Specially formulated to promote beard growth, moisturize skin beneath, and leave a healthy, soft beard with a great fragrance.",
      price: 600,
      gender: "male",
      features: [
        "Promotes beard growth",
        "Moisturizes skin beneath",
        "Leaves beard soft and healthy",
        "Pleasant fragrance",
        "Suitable for all beard types",
      ],
      bgcolor: "#21211E",
      cardbg: "ffffff",
      aroowcolor: "#CBAF99",
      oldprice: 800,
      reviews: [
        {
          rating: 5,
          comment: "Really helped my beard",
          date: "2025-02-01",
          reviewerName: "Ravi",
        },
        {
          rating: 4,
          comment: "Smells good",
          date: "2025-02-03",
          reviewerName: "Jay",
        },
        {
          rating: 4,
          comment: "Worth the price",
          date: "2025-02-05",
          reviewerName: "Yash",
        },
      ],
      qty: 1,
      finalTotal: 600,
      category: "grooming",
    },
    {
      id: 13,
      title: "Nike Sports Shoes",
      image: "../../public/img/nike-shoose.jpeg",
      details:
        "Durable and breathable running shoes with cushioned sole, ideal for sports and everyday wear.",
      price: 2999,
      gender: "male",
      features: [
        "Breathable mesh upper",
        "Durable rubber sole",
        "Cushioned insole for comfort",
        "Perfect for sports & daily wear",
        "Stylish design with Nike logo",
      ],
      bgcolor: "#E9F1FB",
      cardbg: "#F8FBFF",
      aroowcolor: "#6DA7E0",
      oldprice: 3999,
      reviews: [
        {
          rating: 5,
          comment: "Very comfortable",
          date: "2025-03-01",
          reviewerName: "Aman",
        },
        {
          rating: 4,
          comment: "Stylish look",
          date: "2025-03-03",
          reviewerName: "Raj",
        },
        {
          rating: 3,
          comment: "Average sole grip",
          date: "2025-03-05",
          reviewerName: "Kunal",
        },
      ],
      qty: 1,
      finalTotal: 2999,
      category: "clothing",
    },
    {
      id: 14,
      title: "Boat Rockerz 255 Pro+",
      image: "../../public/img/earband.jpeg",
      details:
        "Bluetooth wireless neckband with deep bass, fast charging, and 40-hour battery life.",
      price: 1299,
      gender: "unisex",
      features: [
        "Bluetooth wireless neckband",
        "40-hour battery life",
        "Fast charging support",
        "Deep bass sound",
        "Sweat and water resistant",
      ],
      bgcolor: "#E9FAF3",
      cardbg: "#F6FFFB",
      aroowcolor: "#5CC7A4",
      oldprice: 1999,
      reviews: [
        {
          rating: 5,
          comment: "Sound quality is awesome",
          date: "2025-01-19",
          reviewerName: "Deep",
        },
        {
          rating: 4,
          comment: "Battery life good",
          date: "2025-01-22",
          reviewerName: "Hiten",
        },
        {
          rating: 4,
          comment: "Nice fit",
          date: "2025-01-24",
          reviewerName: "Bhavik",
        },
      ],
      qty: 1,
      finalTotal: 1299,
      category: "electronics",
    },
    {
      id: 21,
      title: "Asus VivoBook 15",
      image: "../../public/img/asus-laptop.jpeg",
      details:
        "Sleek 15.6-inch laptop with Ryzen 5 processor, 8GB RAM, and 512GB SSD. Ideal for students and professionals.",
      price: 45990,
      gender: "unisex",
      features: [
        "15.6-inch Full HD display",
        "AMD Ryzen 5 processor",
        "8GB RAM and 512GB SSD",
        "Lightweight and stylish design",
        "Perfect for work and study",
      ],
      bgcolor: "#3A444D",
      cardbg: "#A9BAC1",
      aroowcolor: "#1E222D",
      oldprice: 55990,
      reviews: [
        {
          rating: 5,
          comment: "Super fast",
          date: "2025-03-01",
          reviewerName: "Mihir",
        },
        {
          rating: 4,
          comment: "Battery is decent",
          date: "2025-03-08",
          reviewerName: "Siddharth",
        },
        {
          rating: 5,
          comment: "Great for students",
          date: "2025-03-10",
          reviewerName: "Aayush",
        },
      ],
      qty: 1,
      finalTotal: 45990,
      category: "technology",
    },
    {
      id: 23,
      title: "JBL Flip 5 Speaker",
      image: "../../public/img/jbl.jpeg",
      details:
        "Portable waterproof Bluetooth speaker with powerful bass and up to 12 hours of playtime.",
      price: 8499,
      gender: "unisex",
      features: [
        "Portable Bluetooth speaker",
        "Powerful deep bass sound",
        "IPX7 waterproof design",
        "Up to 12 hours playtime",
        "Compact and travel-friendly",
      ],
      bgcolor: "#1A2630",
      cardbg: "#D3EFFA",
      aroowcolor: "#4B83D1",
      oldprice: 9999,
      reviews: [
        {
          rating: 5,
          comment: "Great sound",
          date: "2025-02-11",
          reviewerName: "Sameer",
        },
        {
          rating: 4,
          comment: "Battery lasts long",
          date: "2025-02-14",
          reviewerName: "Viral",
        },
        {
          rating: 4,
          comment: "Very handy",
          date: "2025-02-20",
          reviewerName: "Alok",
        },
      ],
      qty: 1,
      finalTotal: 8499,
      category: "electronics",
    },
    {
      id: 24,
      title: "RayBan Aviator Sunglasses",
      image: "../../public/img/rayben.jpeg",
      details:
        "Classic metal-frame aviator sunglasses with UV protection, stylish and comfortable for everyday use.",
      price: 6290,
      gender: "male",
      features: [
        "Classic metal-frame design",
        "UV protection lenses",
        "Comfortable for all-day wear",
        "Authentic RayBan style",
        "Comes with protective case",
      ],
      bgcolor: "#FDF7F2",
      cardbg: "#FFFFFF",
      aroowcolor: "#C9A987",
      oldprice: 7490,
      reviews: [
        {
          rating: 5,
          comment: "Stylish and comfy",
          date: "2025-03-04",
          reviewerName: "Jatin",
        },
        {
          rating: 5,
          comment: "Authentic quality",
          date: "2025-03-05",
          reviewerName: "Parth",
        },
        {
          rating: 4,
          comment: "Packaging was nice",
          date: "2025-03-06",
          reviewerName: "Manish",
        },
      ],
      qty: 1,
      finalTotal: 6290,
      category: "accessories",
    },
  ]);
  localStorage.setItem("bannerproduct", JSON.stringify(bannerproduct));
  // Refs for multiple items
  const cardRefs = useRef([]);
  const imgRefs = useRef([]);
  const containerRefs = useRef([]);

  // 3D Tilt for Image
  const imgMouseMove = (e, index) => {
    const container = containerRefs.current[index];
    const image = imgRefs.current[index];
    if (!container || !image) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const imgMouseLeave = (index) => {
    const image = imgRefs.current[index];
    if (image) {
      image.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  // 3D Tilt for Card
  const handleMouseMove = (e, index) => {
    const cardWrapper = cardRefs.current[index];
    if (!cardWrapper) return;

    const card = cardWrapper.querySelector(".card");
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.transition = "transform 0.1s ease";
  };

  const handleMouseLeave = (index) => {
    const cardWrapper = cardRefs.current[index];
    if (!cardWrapper) return;

    const card = cardWrapper.querySelector(".card");
    if (card) {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  };
  const addtocart = (id) => {
    dispatch(ADD_TO_CART(id));
  };
  return (
    <>
      <section
        className="banner p-5 d-flex align-items-center  "
        style={{
          backgroundColor: bannerproduct[activeIndex]?.bgcolor,
          boxShadow: "0 20px 40px rgba(228, 22, 22, 0.2) inset 0 -20px",
        }}
      >
        <Container fluid>
          <Carousel
            activeIndex={activeIndex}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
          >
            {bannerproduct.map((val, index) => {
              return (
                <Carousel.Item key={val.id} interval={2000}>
                  <Row className="d-flex align-items-center ">
                    <Col
                      className="floating-container"
                      ref={(el) => (containerRefs.current[index] = el)}
                      onMouseMove={(e) => imgMouseMove(e, index)}
                      onMouseLeave={() => imgMouseLeave(index)}
                    >
                      <Image
                        ref={(el) => (imgRefs.current[index] = el)}
                        className="floating-img"
                        src={val.image}
                        alt="Floating Product"
                      />
                    </Col>
                    <Col
                      ref={(el) => (cardRefs.current[index] = el)}
                      style={{ perspective: "1000px", overflow: "visible" }}
                      onMouseMove={(e) => handleMouseMove(e, index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                    >
                      <Card
                        className="p-2 card"
                        style={{
                          width: "90%",
                          height: "500px",
                          backgroundColor: val.cardbg,
                        }}
                      >
                        <Card.Body
                          className="d-flex flex-column justify-content-between"
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <Card.Subtitle
                            className="text-muted"
                            style={{ transform: "translateZ(15px)" }}
                          >
                            New Release
                          </Card.Subtitle>

                          <Card.Title style={{ transform: "translateZ(30px)" }}>
                            <h2 className="m-0">{val.title}</h2>
                          </Card.Title>

                          <Card.Text style={{ transform: "translateZ(20px)" }}>
                            <p className="opacity-50 fw-semibold m-0">
                              {val.details}
                            </p>
                          </Card.Text>

                          <Card.Text
                            className="d-flex align-items-end"
                            style={{ transform: "translateZ(25px)" }}
                          >
                            <h1 className="me-3 my-0">₹{val.price}</h1>
                            <h6 className="text-decoration-line-through opacity-50 m-0">
                              ₹{val.oldprice}
                            </h6>
                          </Card.Text>

                          {/* <Card.Text style={{ transform: "translateZ(20px)" }}>
                            <div className="fw-semibold m-0">{val.reviews}</div>
                          </Card.Text> */}

                          <Card.Text style={{ transform: "translateZ(15px)" }}>
                            {val.features.map((fe, index) => (
                              <li
                                key={index}
                                className="d-flex align-items-center "
                              >
                                <FaAngleDoubleRight
                                  style={{ color: val.aroowcolor }}
                                  className="me-2"
                                />
                                {fe}
                              </li>
                            ))}
                          </Card.Text>

                          <Col
                            md={9}
                            className="d-flex align-items-center justify-content-between"
                            style={{ transform: "translateZ(15px)" }}
                          >
                            <button onClick={() => addtocart(val.id)}>
                              <Cartbtn />
                            </button>
                            <Checkbox />
                          </Col>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Container>
      </section>
    </>
  );
};
export default Banner;
