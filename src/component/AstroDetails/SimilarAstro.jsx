import React from "react";
import { MdInfo } from "react-icons/md";
import ExpertCarousel from "./ExpertCarousel";

const SimilarAstro = () => {
  return (
    <div className="similar_Astro_main my-4">
      <div className="astro_about_section_main border-0">
        <h3>Check Similar Astrologer</h3>
        <button className="astro_info_btn">
          <MdInfo className="icon" />
        </button>
      </div>
      <ExpertCarousel />
    </div>
  );
};

export default SimilarAstro;
