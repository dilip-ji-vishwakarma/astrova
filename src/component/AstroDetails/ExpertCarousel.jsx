import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaCheckCircle } from "react-icons/fa";

const expertData = [
  {
    id: 1,
    name: "Mahesh",
    verified: true,
    role: "Psychologist",
    languages: "English, Hindi",
    experience: "5 Years",
    price: "₹ 10/min",
    image: "/assets/image/astro-avatar.png", // Replace with actual path
  },
  {
    id: 2,
    name: "Mahesh",
    verified: true,
    role: "Psychologist",
    languages: "English, Hindi",
    experience: "5 Years",
    price: "₹ 10/min",
    image: "/assets/image/astro-avatar.png",
  },
  {
    id: 3,
    name: "Mahesh",
    verified: true,
    role: "Psychologist",
    languages: "English, Hindi",
    experience: "5 Years",
    price: "₹ 10/min",
    image: "/assets/image/astro-avatar.png",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
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

const ExpertCarousel = () => {
  return (
    <div className="expert_astro_card">
      <Carousel
        responsive={responsive}
        infinite
        //  autoPlay={true}
      >
        {expertData.map((expert) => (
          <div
            key={expert.id}
            // style={{
            //   textAlign: "center",
            //   padding: "20px",
            //   borderRadius: "15px",
            //   background: "#fff",
            //   margin: "0 10px",
            //   boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
            // }}
            className="expert_astro_card_inner"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="expert_astro_card_img"
              // style={{
              //   width: "100px",
              //   height: "100px",
              //   borderRadius: "50%",
              //   objectFit: "cover",
              //   marginBottom: "10px",
              // }}
            />
            <h4>
              {expert.name}{" "}
              {expert.verified && <img src="/assets/image/icon/check.png" />}
            </h4>
            <p>{expert.role}</p>
            <p>{expert.languages}</p>
            <p>Experience : {expert.experience}</p>
            <p className="price">{expert.price}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ExpertCarousel;
