import React from "react";
import image from "../../../assets/home.png";
const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="container">
        <div className="banner-text">
          <p className="subtitle">Launching In Ramadan</p>
          <h1 className="title">An Ai Like ChatGPT</h1>
          <p className="description">
            Don't miss out on the release of new Ai. Follow Our Website to
            recieve future update when we go live.
          </p>
          <button>SignUp</button>
        </div>
        <div className="banner-image">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
