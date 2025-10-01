import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import PaymentLogCard from "./PaymentLogCard";
import WalletTxn from "./WalletTxn";

const WalletHistoryMain = () => {
  const [selectedTab, setSelectedTab] = useState("Payment Logs");

  return (
    <div className="history-list">
      <div className="wallet_info_card_main">
        <div>
          <h5>Available Balance</h5>
          <h2>₹ 7550</h2>
        </div>
        <button className="common_btn">
          <FaPlus className="icon" /> Recharge
        </button>
      </div>

      <div className="live_tabs_main">
        <div className="live_tabs_buttons astro_filter_cat_main">
          <button
            className={selectedTab === "Wallet Transaction" ? "active" : ""}
            onClick={() => setSelectedTab("Wallet Transaction")}
          >
            Wallet Transaction
          </button>
          <button
            className={selectedTab === "Payment Logs" ? "active" : ""}
            onClick={() => setSelectedTab("Payment Logs")}
          >
            Payment Logs
          </button>
        </div>

        <div className="live_tab_content">
          {selectedTab === "Wallet Transaction" ? (
            <WalletTxn />
          ) : (
            <PaymentLogCard />
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletHistoryMain;
