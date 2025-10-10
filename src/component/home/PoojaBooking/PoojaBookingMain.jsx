import React from "react";
import SectionHeader from "../../commonComp/SectionHeader";
import LinkCommon from "../../commonComp/LinkCommon";
import PoojaBookingCard from "./PoojaBookingCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
  },
};

const PoojaBookingMain = ({data}) => {
  return (
    <div className="pooja_booking_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="cate_header">
              <SectionHeader title="Book Online Puja & Anusthan" />
              <p className="section-subtitle">
                Bring Peace, Prosperity, And Positivity Into Your Life!
              </p>
            </div>
            <p className="pooja_side_content">
              Explore our diverse range of online Pujas and Anushthans to find
              the perfect spiritual ritual that resonates with your goals and
              aspirations. Let us guide you through this sacred journey, helping
              you connect with the divine and experience the transformative
              benefits of these ancient practices. We are here to ensure that
              your spiritual endeavors are accessible, affordable, and
              completely personalized!
            </p>
            <LinkCommon
              to="/puja"
              text="Browse All Puja"
              className="read-more"
            />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="PoojaBookingCardcol">
              <Carousel responsive={responsive} infinite autoPlay>
                {data.map((item) => (
                  <PoojaBookingCard
                    key={item.id}
                    title={item.title}
                    rate={item.basePrice}
                    image={item.imageUrl}
                    description={item.description}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoojaBookingMain;
