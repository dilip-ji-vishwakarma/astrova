import React from "react";
import CategoriesCard from "./CategoriesCard";
import SectionHeader from "../../commonComp/SectionHeader";
import { FaArrowRight } from "react-icons/fa";

const CategoriesMain = ({data}) => {
  
  return (
    <>
      <div className="categories_main_Section bg-light py-md-5 py-4">
        <div className="container">
          <div className="cate_header">
            <SectionHeader
              title="Categories"
              linkText="View All"
              linkTo="/"
              Icon={FaArrowRight}
            />
          </div>
          <CategoriesCard categories={data}/>
        </div>
      </div>
    </>
  );
};

export default CategoriesMain;
