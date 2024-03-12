import React from "react";
import logo from "../../../assets/icon.png";

const Free = () => {
  return (
    <div className="free" id="about">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="free-text">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <h1 className="title">Free Ai for this month</h1>
            <p className="description">
              Sign Today you will get all update of Ai
            </p>
          </div>
          <div className="cards">
            <div className="card1"></div>
            <div className="card2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Free;
