import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CommonButton from "../../commonComp/CommonButton";
import { FaPlus } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

const astrologers = [
  {
    id: 1,
    name: "Mukesh",
    profession: "Psychologist",
    image: "../assets/image/astro-avatar.png",
    isLive: true,
  },
  {
    id: 2,
    name: "Ritika",
    profession: "Numerologist",
    image: "../assets/image/astro-avatar.png",
    isLive: true,
  },
  {
    id: 3,
    name: "Ankit",
    profession: "Vedic Astrologer",
    image: "../assets/image/astro-avatar.png",
    isLive: true,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3, // show 2.5 cards on desktop
    slidesToSlide: 1, // move 1 card at a time
  },
  tablet: {
    breakpoint: { max: 1024, min: 500 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const LiveAstrologersCard = () => {
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        pauseOnHover={false} // stop sliding on mouse hover
        keyBoardControl
        swipeable
        draggable
        arrows={false} // optional: remove arrows if you want a cleaner UI
      >
        {astrologers.map((astro) => (
          <div className="live_Astro_card_main_outer" key={astro.id}>
            <div className="live_Astro_card_main">
              <div className="live_Astro_card_bg">
                {astro.isLive && (
                  <div className="astro_live_batch">
                    <p></p> Live
                  </div>
                )}
                <img src={astro.image} alt={astro.name} className="img-fluid" />
                <h3>{astro.name}</h3>
                <h5>{astro.profession}</h5>
                {/* <button className="astro_follow_btn">+ Follow</button> */}
                <CommonButton
                  text="Follow"
                  iconLeft={AiOutlinePlus}
                  className=""
                />
              </div>
              <div className="astro_Watch_Now_div">
                <Link to="/">Watch Now</Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default LiveAstrologersCard;
