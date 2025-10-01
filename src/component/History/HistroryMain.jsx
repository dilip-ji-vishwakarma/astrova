import React, { useState } from "react";
import HeaderBreadcrumb from "../HeaderBreadcrumb";
import HistoryTabFilter from "./HistoryTabFilter";
import CallHistoryCard from "./CallHistoryCard";
import { fakeHistoryData } from "./callHistoryData";
import ShoppingCard from "./ShoppingCard";
import WalletHistoryMain from "./WalletHistoryMain";

const HistroryMain = () => {
  const [selectedTab, setSelectedTab] = useState("wallet");

  const filteredData = fakeHistoryData.filter(
    (item) => item.type === selectedTab
  );
  const renderTabComponent = () => {
    switch (selectedTab) {
      case "shopping":
        return <ShoppingCard data={filteredData} />;
      case "wallet":
        return <WalletHistoryMain />;
      case "report":
        return <div> Report</div>;
      default:
        return <CallHistoryCard data={filteredData} />;
    }
  };

  return (
    <>
      <HeaderBreadcrumb />
      <div className="container">
        <HistoryTabFilter selected={selectedTab} onSelect={setSelectedTab} />
        {renderTabComponent()}
      </div>
    </>
  );
};

export default HistroryMain;
