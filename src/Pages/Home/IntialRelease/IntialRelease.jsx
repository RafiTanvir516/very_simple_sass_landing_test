import React from "react";
import { FaArrowRight } from "react-icons/fa";

const IntialRelease = ({ children }) => {
  return (
    <div className="intial" id="launch">
      <div className="container">
        <div className="content">
          <h1 className="title">Initial Realese 4/11</h1>
          <p className="description">
            We have released our limited auditon Ai.Which can be bid on our
            facebook page
          </p>
          <p className="description">There will be only limited auditon Ai</p>
          <p className="description">50% off on pro Ai Feature</p>
          <p className="click">
            Check our Ai <FaArrowRight></FaArrowRight>
          </p>
        </div>
        <div className="image">
          <img src={children} alt="" />
        </div>
      </div>
    </div>
  );
};

export default IntialRelease;
