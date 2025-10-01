import React, { useState } from "react";
import BoyDetails from "./Details";
import Details from "./Details";

const KundaliMatchingTabs = () => {
  const [selectedTab, setSelectedTab] = useState("New Matching");
  return (
    <>
      <div className="container">
        <div className="live_tabs_main">
          <div className="live_tabs_buttons astro_filter_cat_main">
            <button
              className={selectedTab === "Open Kundli" ? "active" : ""}
              onClick={() => setSelectedTab("Open Kundli")}
            >
              Open Kundli
            </button>
            <button
              className={selectedTab === "New Matching" ? "active" : ""}
              onClick={() => setSelectedTab("New Matching")}
            >
              New Matching
            </button>
          </div>

          <div className="live_tab_content">
            {selectedTab === "Open Kundli" ? <h1>Pending </h1> : <Details />}
          </div>
        </div>
      </div>
    </>
  );
};

export default KundaliMatchingTabs;
