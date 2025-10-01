import React, { useState } from "react";
import SectionHeader from "../../commonComp/SectionHeader";
import { FaArrowRight } from "react-icons/fa";

const WhatAstrova = () => {
  const [showFull, setShowFull] = useState(false);

  const fullText = `Astrolova predictions are based on the position and movements of planets and celestial bodies in the Universe that impact our life quality. This can be studied by creating an offline or online horoscope of individuals. This affects not only the people but also controls the occurrence of certain events happening in the sublunar world. Some may call it pseudo-science, and others call it predictive science. The science that is Astrology inspires people to know the various aspects of their life and take it in the right direction. From making life predictions on the basis of a detailed Kundali or telling you about the near future through daily, weekly and monthly horoscopes, Astrology is the medium through which you can get a glimpse of what the future will bring for you...`;

  const shortText = fullText.slice(0, 400); // Adjust slice length as needed

  return (
    <div className="container what_astro">
      <div className="cate_header">
        <SectionHeader title="What is Astrova?" />
        <p className="section-subtitle">
          Astrova Is The Language Of The Universe
        </p>

        <div className="content">
          <p className="common_para">
            {showFull ? fullText : shortText}
            {!showFull && "..."}
          </p>
          <button
            className="read-more "
            onClick={() => setShowFull(!showFull)}
            style={{ color: "#E25016", cursor: "pointer" }}
          >
            {showFull ? "Read Less" : "Read More..."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatAstrova;
