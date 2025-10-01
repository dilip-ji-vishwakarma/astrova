import React, { useState } from "react";
import OngoingLiveGrid from "./OngoingLiveGrid";
import UpcomingLiveList from "./UpcomingLiveList";
import HeaderBreadcrumb from "../HeaderBreadcrumb";

const LiveTabsComponent = () => {
  const [selectedTab, setSelectedTab] = useState("ongoing");

  return (
    <>
      <HeaderBreadcrumb />
      <div className="container">
        <div className="live_tabs_main">
          <div className="live_tabs_buttons astro_filter_cat_main mb-2">
            <button
              className={selectedTab === "ongoing" ? "active" : ""}
              onClick={() => setSelectedTab("ongoing")}
            >
              Ongoing
            </button>
            <button
              className={selectedTab === "upcoming" ? "active" : ""}
              onClick={() => setSelectedTab("upcoming")}
            >
              Upcoming
            </button>
          </div>

          <div className="live_tab_content">
            {selectedTab === "ongoing" ? (
              <OngoingLiveGrid />
            ) : (
              <UpcomingLiveList />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveTabsComponent;
