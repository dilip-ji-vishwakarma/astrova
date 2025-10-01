import React from "react";
import { Link } from "react-router-dom";

const CategoriesCard = () => {
  const categories = [
    { id: 1, name: "Relationship", icon: "/assets/image/icon/heart.svg" },
    { id: 2, name: "Career & Job", icon: "/assets/image/icon/briefcase.svg" },
    { id: 3, name: "Finance", icon: "/assets/image/icon/finance.svg" },
    { id: 4, name: "Education", icon: "/assets/image/icon/graduation-cap.svg" },
    { id: 5, name: "Numerology", icon: "/assets/image/icon/astrology.svg" },
    { id: 6, name: "Business", icon: "/assets/image/icon/business.svg" },
    { id: 7, name: "Lal Kitab", icon: "/assets/image/icon/book.svg" },
    { id: 8, name: "Health", icon: "/assets/image/icon/health.svg" },
  ];
  return (
    <div className="row">
      <div className="container">
        <div className="row">
          {categories.map((category) => (
            <div className="col-6 col-lg-3 col-md-4 col-sm-6 mb-4" key={category.id}>
              <Link className="categories_card_main">
                <div className="icon_circle">
                  <div className="icon-wrapper">
                    <img src={category.icon} alt={category.name} />
                  </div>                  
                </div>
                <h5 className="mb-0">{category.name}</h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
