// HistoryTabs.jsx
import React from "react";

const tabs = ["Wallet", "Call", "Chat", "Shopping", "Report"];

const HistoryTabFilter = ({ selected, onSelect }) => {
  return (
    <div className="tabs">
      <div className="live_tabs_main">
        <div className="live_tabs_buttons astro_filter_cat_main">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${
                selected === tab.toLowerCase() ? "active" : ""
              }`}
              onClick={() => onSelect(tab.toLowerCase())}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryTabFilter;
