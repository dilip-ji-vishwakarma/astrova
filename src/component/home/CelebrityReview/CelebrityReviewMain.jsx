import React from "react";
import CelebrityReviewCard from "./CelebrityReviewCard";
import SectionHeader from "../../commonComp/SectionHeader";

const CelebrityReviewMain = () => {
  return (
    <>
      <div className="categories_main_Section celebrity_main_Section">
        <div className="container">
          <div className="cate_header">
            <SectionHeader title="Trusted by Celebrities" />
          </div>
          <CelebrityReviewCard />
        </div>
      </div>
    </>
  );
};

export default CelebrityReviewMain;
