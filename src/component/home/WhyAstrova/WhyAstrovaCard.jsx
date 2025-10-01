import React from "react";
import { FaUser } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
const whyData = [
  {
    id: 1,
    title: "Verified Astrologers",
    description:
      "Anytime Astro helps you connect with the best online Astrologers in India who will guide you through all the problems of your life and provide answers to all your queries through accurate Astrology predictions.",
    image: "/assets/image/icon/verified.png",
  },
  {
    id: 2,
    title: "Ask an Astrologer Via  Multiple Ways",
    description:
      "We offer Online Astrology consultation, through which you can connect with our Astrologers LIVE through a one-on-one chat or a call session. ",
    image: "/assets/image/icon/communication.png",
  },
  {
    id: 3,
    title: "100% Privacy Guaranteed",
    description:
      "Anytime Astro helps you connect with the best online Astrologers in India who will guide you through all the problems of your life and provide answers to all your queries through accurate Astrology predictions.",
    image: "/assets/image/icon/privacy.png",
  },
];

const WhyAstrovaCard = () => {
  return (
    <>
      <div className="row">
        {whyData.map((item) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
            <div className="why_astrova_card">
              <div className="image_icon">
                <img src={item.image} alt={item.title} className="" />
              </div>
              <h3 className="">{item.title}</h3>
              <p className="">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhyAstrovaCard;
