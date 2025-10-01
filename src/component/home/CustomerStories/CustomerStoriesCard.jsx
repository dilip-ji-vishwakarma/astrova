import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const reviews = [
  {
    id: 1,
    name: "Rashmi Desai",
    image: "/assets/image/cutomer.png",
    rating: 5,
    review:
      "My astrologer gave me peace of mind I didn’t know I needed. Will definitely book again!",
  },
  {
    id: 2,
    name: "Rashmi Desai",
    image: "/assets/image/cutomer.png",
    rating: 5,
    review:
      "My astrologer gave me peace of mind I didn’t know I needed. Will definitely book again!",
  },
  {
    id: 3,
    name: "Rashmi Desai",
    image: "/assets/image/cutomer.png",
    rating: 5,
    review:
      "My astrologer gave me peace of mind I didn’t know I needed. Will definitely book again!",
  },
];

const CustomerStoriesCard = () => {
  return (
    <div className="customer-section">
      <p className="section-subtitle">
        What Our Customers Say About Their Spiritual Journey
      </p>
      <Carousel responsive={responsive} infinite autoPlay={true}>
        {reviews.map((r) => (
          <div className="review-card" key={r.id}>
            <img src={r.image} alt={r.name} className="avatar" />
            <h3>{r.name}</h3>
            <div className="stars">
              {Array(r.rating)
                .fill()
                .map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
            </div>
            <p className="review-text">{r.review}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomerStoriesCard;
