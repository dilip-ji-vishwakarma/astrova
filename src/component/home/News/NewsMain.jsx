import React from "react";
import NewsCard from "./NewsCard";
import SectionHeader from "../../commonComp/SectionHeader";

const NewsMain = ({data}) => {
  return (
    <div className="  news_sectionMain categories_main_Section bg-light py-md-5 py-4 my-md-5 my-4 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 m-auto">
                  <div className="cate_header">
                    <SectionHeader title="News" />
                  </div>
                  <NewsCard News={data}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsMain;
