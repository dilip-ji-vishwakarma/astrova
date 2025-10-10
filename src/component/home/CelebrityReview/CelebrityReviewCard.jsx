import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getImageUrl } from "../../../utils/getImageUrl";

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

const CelebrityReviewCard = ({celebrities = []}) => {
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
                  src={getImageUrl(celeb.badgeUrl)}
                  alt="badge"
                  className="img-fluid cele_logo"
                />
                <img src={getImageUrl(celeb.photoUrl)} alt={celeb.name} />
             
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
