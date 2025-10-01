import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    // partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 500 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 2,
  },
};

const News = [
  {
    id: 1,
    image: "/assets/image/logo01.png",
  },
  {
    id: 2,
    image: "/assets/image/logo02.png",
  },
  {
    id: 3,
    image: "/assets/image/logo03.png",
  },

  {
    id: 4,
    image: "/assets/image/logo04.png",
  },
  {
    id: 5,
    image: "/assets/image/logo03.png",
  },
];

const NewsCard = () => {
  return (
    <>
      <div className="">
        <Carousel responsive={responsive} infinite autoPlay={true}>
          {News?.map((News) => (
            <div key={News?.id} className="News_card">
              <div className="News_card_image">
                <img src={News.image} alt={News.image} className="img-fluid" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default NewsCard;
