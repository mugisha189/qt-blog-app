import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const responsive = {
  mobile: {
    breakpoint: { max: 200000, min: 0 },
    items: 1,
  },
};

interface Slide {
  id: number;
  media: string;
  title: string;
  body: string;
}

const CarouselElement: React.FC<{ slides: Slide[] }> = ({ slides }) => {
  return (
    <div className="relative z-10">
      <Carousel
        responsive={responsive}
        autoPlay
        infinite
        showDots
        autoPlaySpeed={4000}
      >
        {slides?.map((slide, i) => (
          <div
            key={i}
            className=" flex  flex-col justify-center text-left  px-[7%] lg:px-20 w-full h-full py-32 "
            style={{
              backgroundImage: `url(${slide.media})`,
              backgroundSize: "cover",
            }}
          >
            <p className="font-bold text-4xl md:text-5xl lg:text-6xl mb-5   font-outline-2 !text-transparent w-full lg:w-[70%]">
              {slide.title}
            </p>
            <p className="font-medium text-xl text-white mb-5 w-full lg:w-[80%]">
              {slide.body}
            </p>
            <Link to={`/blogs/${slide.id}`}>
              <div className="px-10 py-2 rounded-lg bg-primary  text-white  w-fit">
                Read Article
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselElement;
