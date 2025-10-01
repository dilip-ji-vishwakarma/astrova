import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const celebrities = [
  {
    id: 1,
    name: "Priyanka Chopra",
    image: "/assets/image/cele1.png",
    message: "Priyanka Chopra has message for You!",
  },
  {
    id: 2,
    name: "Kajol",
    image: "/assets/image/cele1.png",
    message: "Kajol has message for You!",
  },
  {
    id: 3,
    name: "Priyanka Chopra",
    image: "/assets/image/cele1.png",
    message: "Priyanka Chopra has message for You!",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 500 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
};

const CelebrityReviewCard = () => {
  return (
    <>
      <div className="">
        <Carousel
          responsive={responsive}
          infinite
          // autoPlay={true}
        >
          {celebrities?.map((celeb) => (
            <div key={celeb?.id} className="celeb-card">
              <div className="card-image">
                <img
                  src="/assets/image/logo.png"
                  alt="logo"
                  className="img-fluid cele_logo"
                />
                <img src={celeb.image} alt={celeb.name} />
                <img
                  src="/assets/images/badge.png"
                  alt="badge"
                  className="badge"
                />
              </div>
              <div className="card-text">{celeb.message}</div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CelebrityReviewCard;
