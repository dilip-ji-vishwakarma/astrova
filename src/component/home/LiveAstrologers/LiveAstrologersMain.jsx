import React from "react";
import LiveAstrologersCard from "./LiveAstrologersCard";
import { FaArrowRight } from "react-icons/fa";
import SectionHeader from "../../commonComp/SectionHeader";

const LiveAstrologersMain = () => {
  return (
    <div className="container">
      <SectionHeader
        title="Live Astrologers"
        linkText="View All"
        linkTo="/live-astrologers"
        Icon={FaArrowRight}
      />
      <LiveAstrologersCard />
    </div>
  );
};

export default LiveAstrologersMain;
