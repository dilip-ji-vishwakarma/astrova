import React from "react";
import LinkCommon from "../../commonComp/LinkCommon";
import { getImageUrl } from "../../../utils/getImageUrl";

const PoojaBookingCard = ({ title, rate, image, description }) => {
  return (
    <div className="blog-card pooja_card">
      <img src={getImageUrl(image)} alt={title} className="blog-image" />
      <div className="blog-content">
        <h3 className="blog-title">{title}</h3>
        <p className="blog-desc">{rate}</p>
        <p className="truncate" style={{fontSize : "15px"}}>{description}</p>
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
