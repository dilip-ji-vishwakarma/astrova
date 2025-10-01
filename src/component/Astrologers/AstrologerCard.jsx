import React from "react";
import { FaStar, FaComments } from "react-icons/fa";
import { MdMessage, MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CommonButton from "../commonComp/CommonButton";
const astrologers = [
  {
    id: 1,
    name: "Astro Sant",
    rating: 4.5,
    image: "../assets/image/astrologer.png",
    expertise: "Vedic, Prashna, Past Life",
    experience: "14 Years",
    language: "Hindi",
    rate: 25,
    freeCall: true,
    isOnline: true,
  },
  {
    id: 2,
    name: "Guru Raj",
    rating: 4.8,
    image: "../assets/image/astrologer.png",

    expertise: "Tarot, Vastu",
    experience: "10 Years",
    language: "English, Hindi",
    rate: 30,
    freeCall: true,
    isOnline: true,
  },

  {
    id: 3,
    name: "Guru Raj",
    rating: 4.8,
    image: "../assets/image/astrologer.png",

    expertise: "Tarot, Vastu",
    experience: "10 Years",
    language: "English, Hindi",
    rate: 30,
    freeCall: true,
    isOnline: true,
  },

  {
    id: 4,
    name: "Guru Raj",
    rating: 4.8,
    image: "../assets/image/astrologer.png",

    expertise: "Tarot, Vastu",
    experience: "10 Years",
    language: "English, Hindi",
    rate: 30,
    freeCall: true,
    isOnline: true,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};
const AstrologerCard = () => {
  return (
    <div className="container">
      <Carousel
        responsive={responsive}
        infinite
        // autoPlay={true}
      >
        {astrologers.map((astro) => (
          <div className="" key={astro.id}>
            <div className="astro_card ">
              <Link to="/astro-details">
                <div className="astro_card_inner">
                  <div className="">
                    <div className="position-relative">
                      <img
                        src={astro.image}
                        alt={astro.name}
                        className="astro_img"
                      />
                      <div className="rating_badge">
                        {astro.rating} <FaStar size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="astro_card_content_side ">
                    <div className="" style={{ position: "relative" }}>
                      {astro.isOnline && (
                        <span className=" online_btn">
                          <div></div> Online
                        </span>
                      )}
                      <h6 className="">
                        {astro.name}
                        <img
                          src="../assets/image/icon/check.png"
                          className="img-fluid check"
                          alt="verify"
                        />
                      </h6>
                    </div>
                    <p className="astro_expertise">{astro.expertise}</p>
                    <p className=" astro_exp">
                      Exp: {astro.experience} | Lang: {astro.language}
                    </p>
                    <p className="astro_rate">₹{astro.rate}/min</p>
                    {astro.freeCall && (
                      <p className="astro_free_Call">Free Call</p>
                    )}
                    {/* <button className="Chat_btn">
                      <MdMessage className="icons" />
                      Chat
                    </button> */}
                    <CommonButton
                      text="Chat"
                      className="Chat_btn"
                      iconLeft={MdMessage}
                      // onClick={() => alert("Item Added!")}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AstrologerCard;
