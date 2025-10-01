import React from "react";
import LinkCommon from "../../commonComp/LinkCommon";

const PoojaBookingCard = ({ title, rate, image }) => {
  return (
    <div className="blog-card pooja_card">
      <img src={image} alt={title} className="blog-image" />
      <div className="blog-content">
        <h3 className="blog-title">{title}</h3>
        <p className="blog-desc">{rate}</p>
        <LinkCommon
          text="Book Pooja"
          className="read-more"
          to="/puja-booking"
        />
      </div>
    </div>
  );
};

export default PoojaBookingCard;
