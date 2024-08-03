import React from "react";
import Carousel from "react-multi-carousel";
import NewsLetter from "../components/home/NewsLetter";
import OurNews from "../components/home/OurNews";

const Home: React.FC = () => {
  return (
    <div>
      {/* <Carousel /> */}
      <OurNews />
      <NewsLetter />
    </div>
  );
};

export default Home;
