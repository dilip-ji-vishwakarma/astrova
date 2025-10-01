import React, { useState } from "react";
import FilterTabs from "./FilterTabs";
import StatusFilters from "./StatusFilters";
import AstrologerCard from "./AstrologerCard";
import astrologers from "./data/FakeData";
import HeaderBreadcrumb from "../HeaderBreadcrumb";

const AstrologerListPage = ({ type }) => {
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

          
    <div className="Astrologer_list_main_section row">
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

export default AstrologerListPage;
