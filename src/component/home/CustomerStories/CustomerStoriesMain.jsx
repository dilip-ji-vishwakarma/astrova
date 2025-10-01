import React from "react";
import CustomerStoriesCard from "./CustomerStoriesCard";
import SectionHeader from "../../commonComp/SectionHeader";

const CustomerStoriesMain = () => {
  return (
    <>
      <div className="astro_main_Section customer_stories_main">
        <div className="container">
          <div className="cate_header">
            <SectionHeader title="Customer Stories" />
          </div>
          <CustomerStoriesCard />
        </div>
      </div>
    </>
  );
};

export default CustomerStoriesMain;
