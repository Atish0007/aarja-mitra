import {useState,useEffect} from "react";

import { Carousel, Row, Col, Container } from "react-bootstrap";
import "../../assets/css/MojaniGallery.css";
import one from "../../assets/images/gallery/one.jpg";
import two from "../../assets/images/gallery/two.jpg";
import three from "../../assets/images/gallery/three.jpg";
import four from "../../assets/images/gallery/four.jpg";
import five from "../../assets/images/gallery/five.jpg";
import six from "../../assets/images/gallery/six.jpeg";
import seven from "../../assets/images/gallery/seven.jpg";
import eight from "../../assets/images/gallery/eight.jpg";
import nine from "../../assets/images/gallery/nine.jpg";

const images = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine
];

export default function MojaniGallery() {

    const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 576) {
        setItemsPerSlide(1); // Mobile
      } else if (window.innerWidth < 992) {
        setItemsPerSlide(2); // Tablet
      } else {
        setItemsPerSlide(3); // Desktop
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);

    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // Group images dynamically
  const groupedImages = [];
  for (let i = 0; i < images.length; i += itemsPerSlide) {
    groupedImages.push(images.slice(i, i + itemsPerSlide));
  }
  return (
    <section className="responsive-gallery py-3 pt-3">
      <Container>
        <h3 className="MainHeading cstEngFont text-center">मोजणी फोटो</h3>
        <div className="bar mb-4 mb-md-3">
            <div className="bar-fill"></div>
        </div>

        <Carousel interval={5000} indicators={false}>
          {groupedImages.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {group.map((img, idx) => (
                  <Col key={idx} xs={12} sm={6} md={6} lg={4}>
                    <img
                      src={img}
                      alt="gallery"
                      className="gallery-img"
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
