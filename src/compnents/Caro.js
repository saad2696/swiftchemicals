import React from "react";
import img1 from "../images/carousel/felxo-inks.jpg";
import img2 from "../images/carousel/reg-cylinder.jpg";
import img3 from "../images/carousel/pic1.jpeg";
import opener from "../images/printer.jpeg";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
const Styles = styled.div`
.carousel {

  height:350px;
  
  }
  
  .carousel-inner &gt; .item &gt; img {
  
  height:350px;

  
  object-fit: cover;
  
  }
`;

export const Caro = () => (
  <Styles>
    <Carousel style={{}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={opener}
          alt="First slide"
          style={{ width: 50 }}
          class="d-block w-100"
          style={{ opacity: 0.7 }}
        />
        <Carousel.Caption style={{ top: 30, paddingTop: 80, color: "black" }}>
          <h3
            style={{
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "black",
              fontfamily: "Garamond",
              fontSize: 50,
              color: "#ffffff",
            }}
          >
            <strong>
              <i>
                <q>We Believe In Services That Provide Solutions!</q>
              </i>
            </strong>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={{ width: 50 }}
          class="d-block w-100"
          style={{ opacity: 0.7 }}
        />
        <Carousel.Caption style={{ top: 30, paddingTop: 80, color: "black" }}>
          <h3
            style={{
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "black",
              fontfamily: "Garamond",
              fontSize: 45,
              color: "#ffffff",
            }}
          >
            <strong>
              <i>
                <q>
                  Cost Effective Ink Diluent, Machine Cleaning Solvents and
                  Adhesives!
                </q>
              </i>
            </strong>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
          style={{ width: 50 }}
          class="d-block w-100"
          style={{ opacity: 0.7 }}
        />

        <Carousel.Caption style={{ top: 30, paddingTop: 80, color: "black" }}>
          <h3
            style={{
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "black",
              fontfamily: "Garamond",
              fontSize: 50,
              color: "#ffffff",
            }}
          >
            <strong>
              <i>
                <q>Sourcing Offset Printing Inks Local or Imported!</q>
              </i>
            </strong>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
          style={{ width: 50 }}
          class="d-block w-100"
          style={{ opacity: 0.6 }}
        />

        <Carousel.Caption style={{ top: 30, paddingTop: 80, color: "black" }}>
          <h3
            style={{
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "black",
              fontfamily: "Garamond",
              fontSize: 45,
              color: "#ffffff",
            }}
          >
            <strong>
              <i>
                <q>
                  Sourcing Highest Quailty of Felxo, Roto Inks and Rotogravune
                  Cylinders!
                </q>
              </i>
            </strong>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Styles>
);
