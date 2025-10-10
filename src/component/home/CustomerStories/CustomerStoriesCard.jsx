import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getImageUrl } from "../../../utils/getImageUrl";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    // partialVisibilityGutter: 40,
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

const CustomerStoriesCard = ({customerStories = []}) => {
  return (
    <div className="customer-section">
      <p className="section-subtitle">
        What Our Customers Say About Their Spiritual Journey
      </p>
      <Carousel responsive={responsive} infinite autoPlay={true}>
        {customerStories.map((r) => (
          <div className="review-card" key={r.id}>
            <img src={getImageUrl(r.user.avatarUrl)} alt={r.user.user} className="avatar" />
            <h3>{r.user.firstName} {r.user.lastName}</h3>
            <div className="stars">
              {Array(r.rating)
                .fill()
                .map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
            </div>
            <p className="review-text">{r.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomerStoriesCard;
