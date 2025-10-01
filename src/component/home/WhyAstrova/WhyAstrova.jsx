import React from "react";
import SectionHeader from "../../commonComp/SectionHeader";
import { FaArrowRight } from "react-icons/fa";
import WhyAstrovaCard from "./WhyAstrovaCard";

const WhyAstrova = () => {
  return (
    <div className="container why_astrova_main">
      <div className="cate_header">
        <div className="cate_header">
          <SectionHeader title="Why Astrova?" />
        </div>

        <p className="section-subtitle">
          One of the best online Astrova platforms to connect with experienced
          and verified Astrologers
        </p>
        <div className="content">
          <WhyAstrovaCard />
        </div>
      </div>
    </div>
  );
};

export default WhyAstrova;
