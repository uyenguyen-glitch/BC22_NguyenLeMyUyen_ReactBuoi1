import React from "react";
import "./Carousel.css";

export default function Carousel() {
  return (
    <div id="demo" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="./assets/img/slide_1.jpg"
            alt="Los Angeles"
            width="100%"
            height="500"
          />
        </div>
        <div className="carousel-item">
          <img
            src="./assets/img/slide_2.jpg"
            alt="Chicago"
            width="100%"
            height="500"
          />
        </div>
        <div className="carousel-item">
          <img
            src="./assets/img/slide_3.jpg"
            alt="New York"
            width="100%"
            height="500"
          />
        </div>
      </div>

      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  );
}
