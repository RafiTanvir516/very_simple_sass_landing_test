import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import Free from "./Free/Free";
import IntialRelease from "./IntialRelease/IntialRelease";
import image from "../../assets/release1.png";
import image2 from "../../assets/release2.png";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Free></Free>
      <IntialRelease>{image}</IntialRelease>
      <IntialRelease>{image2}</IntialRelease>
    </div>
  );
};

export default Home;
