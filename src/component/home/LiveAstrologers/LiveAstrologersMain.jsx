import React from "react";
import LiveAstrologersCard from "./LiveAstrologersCard";
import { FaArrowRight } from "react-icons/fa";
import SectionHeader from "../../commonComp/SectionHeader";

const LiveAstrologersMain = ({data}) => {
  return (
    <div className="container">
      <SectionHeader
        title="Live Astrologers"
        linkText="View All"
        linkTo="/all-astrologer"
        Icon={FaArrowRight}
      />
      <LiveAstrologersCard  data={data}/>
    </div>
  );
};

export default LiveAstrologersMain;
