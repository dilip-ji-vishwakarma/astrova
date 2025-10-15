import React from "react";
import AstrologerCard from "./AstrologerCard";
import SectionHeader from "../commonComp/SectionHeader";
import { FaArrowRight } from "react-icons/fa";

const AstrologersMain = () => {
  return (
    <>
      <div className="astro_main_Section section_space">
        <div className="container ">
          <SectionHeader
            title="Astrologers"
            linkText="View All"
            linkTo="/all-astrologer?isChatAvailable=true"
            Icon={FaArrowRight}
          />
          <AstrologerCard />
        </div>
      </div>
    </>
  );
};

export default AstrologersMain;
