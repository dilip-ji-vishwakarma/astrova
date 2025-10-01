import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const WalletTxn = () => {
  return (
    <div className="wallet_txn_card_main">
      <div className="payement_card_main">
        <div className="wallet_txn_first_col">
          <div className="wallet_deducation_box">
            <FaArrowDown className="icon" />
          </div>
          <div>
            <h3>Chat with Mahesh for ...</h3>
            <p>23 July 2025, 11:01 PM</p>
          </div>
        </div>
        <p className="payement_add payement_cut "> + 6.0</p>
      </div>

      <div className="payement_card_main">
        <div className="wallet_txn_first_col">
          <div className="wallet_deducation_box wallet_add_box">
            <FaArrowUp className="icon" />
          </div>
          <div>
            <h3>Chat with Mahesh for ...</h3>
            <p>23 July 2025, 11:01 PM</p>
          </div>
        </div>
        <p className="payement_add"> + 6.0</p>
      </div>
    </div>
  );
};

export default WalletTxn;
