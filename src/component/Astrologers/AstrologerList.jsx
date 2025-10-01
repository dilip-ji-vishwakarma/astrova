import React, { useState } from "react";
import astrologers from "../AstrologerList/data/FakeData";
import HeaderBreadcrumb from "../HeaderBreadcrumb";
import FilterTabs from "../AstrologerList/FilterTabs";
import StatusFilters from "../AstrologerList/StatusFilters";
import AstrologerCard from "../AstrologerList/AstrologerCard";

const AstrologerList = ({ type }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredAstrologers = astrologers.filter((astro) => {
    return (
      (selectedCategory === "All" || astro.category === selectedCategory) &&
      (statusFilter === "all" || astro.status === statusFilter)
    );
  });

  return (
    <>
      <HeaderBreadcrumb />
      <div className="">
        <div className="container">
          <FilterTabs
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <StatusFilters selected={statusFilter} onSelect={setStatusFilter} />

          <div className="">
            {/* {filteredAstrologers.map((astro) => (
              <AstrologerCard key={astro.id} data={astro} type={type} />
            ))} */}
            {filteredAstrologers.length === 0 ? (
              <div className="no_data_found">No astrologers found</div>
            ) : (
              filteredAstrologers.map((astro, index) => (
                <AstrologerCard key={index} data={astro} type={type} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AstrologerList;
