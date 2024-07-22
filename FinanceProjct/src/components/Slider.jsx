import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS dosyasını dahil edin

export default function Slider() {
  return (
    <Carousel
      autoPlay
      interval={3000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
    >
      <div style={{ position: "relative" }}>
        <img src="img/slide1.jpg" alt="Slide 1" />
        <div className="slider-overlay"></div>
        <div className="slider-wrapper" style={sliderWrapperStyle}>
          <div className="slider-text">
            <div className="slider-caption" style={sliderCaptionStyle}>
              <h1>We are the right person for your financial service</h1>
              <p>
                Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis.
                Vitae sit felis donec, suscipit tortor et sapien donec ac nec.
                Nam vel eu amet.
              </p>
              <div style={buttonContainerStyle}>
                <a href="about.html" className="btn btn-primary">Learn more</a>
                <a href="contact.html" className="btn btn-secondary">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img src="img/slide2.jpg" alt="Slide 2" />
        <div className="slider-overlay"></div>
        <div className="slider-wrapper" style={sliderWrapperStyle}>
          <div className="slider-text">
            <div className="slider-caption" style={sliderCaptionStyle}>
              <h1>We have the most experienced financial staff</h1>
              <p>
                Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis.
                Vitae sit felis donec, suscipit tortor et sapien donec ac nec.
                Nam vel eu amet.
              </p>
              <div style={buttonContainerStyle}>
                <a href="about.html" className="btn btn-primary">Read more</a>
                <a href="contact.html" className="btn btn-secondary">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

const sliderWrapperStyle = {
  position: "absolute",
  top: "79%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "#fff",
};

const sliderCaptionStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "20px",
  borderRadius: "10px",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginTop: "20px",
};
