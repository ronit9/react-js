import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://facon-1.myshopify.com/cdn/shop/files/homepage_testimonial_image_bg.jpg?v=1735499278"
            alt=""
          />
          <Carousel.Caption>
            <h3>What our Clients say</h3>
            <p>Best designer around</p>
            <p>Code, template and others are very good. The support has served me immediately and solved my problems when I need help. Are to be congratulated. Att Renan Andrade ..</p>
            <i class="fa fa-quote-right fa-2x"></i>
            <span>Dewey Tetzlaff</span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://facon-1.myshopify.com/cdn/shop/files/homepage_testimonial_image_bg.jpg?v=1735499278"
            alt=""
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://facon-1.myshopify.com/cdn/shop/files/homepage_testimonial_image_bg.jpg?v=1735499278"
            alt=""
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
