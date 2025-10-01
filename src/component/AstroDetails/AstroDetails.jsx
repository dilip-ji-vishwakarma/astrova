import React from "react";
import HeaderBreadcrumb from "../HeaderBreadcrumb";
import AstroDetailCard from "./AstroDetailCard";
import AboutSection from "./AboutSection";
import RatingsSection from "./RatingsSection";
import SimilarAstro from "./SimilarAstro";
import ActionSection from "./ActionSection";

const AstroDetails = () => {
  return (
    <>
      <HeaderBreadcrumb />
      <div className="container">
        <AstroDetailCard />
        <AboutSection />
        <RatingsSection />
        <SimilarAstro />
        <ActionSection />
      </div>
    </>
  );
};

export default AstroDetails;
