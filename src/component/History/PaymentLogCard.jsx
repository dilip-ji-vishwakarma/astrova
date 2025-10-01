import React from "react";
import { MdPending } from "react-icons/md";

const PaymentLogCard = () => {
  return (
    <>
    <div className="row mb-5">
      <div className="col-md-4">
      <div className="payement_card_main payment-log">
        <div>
          <h3>Recharge</h3>
          <p>23 July 2025, 11:01 PM</p>
        </div>
        <div className="payement_card__last_col">
          <h3>₹ 150</h3>
          <p className="payement_card_status">
            <span className="pending">
              <MdPending /> Pending
            </span>{" "}
            |<span>GST : 0%</span>
          </p>
        </div>
      </div></div>{" "}
      <div className="col-md-4">
      <div className="payement_card_main payment-log">
        <div>
          <h3>Recharge</h3>
          <p>23 July 2025, 11:01 PM</p>
        </div>
        <div className="payement_card__last_col">
          <h3>₹ 150</h3>
          <p className="payement_card_status">
            <span className="pending">
              <MdPending /> Pending
            </span>{" "}
            |<span>GST : 0%</span>
          </p>
        </div>
      </div>
      </div>
      <div className="col-md-4">
      <div className="payement_card_main payment-log ">
        <div>
          <h3>Recharge</h3>
          <p>23 July 2025, 11:01 PM</p>
        </div>
        <div className="payement_card__last_col">
          <h3>₹ 150</h3>
          <p className="payement_card_status">
            <span className="pending">
              <MdPending /> Pending
            </span>{" "}
            |<span>GST : 0%</span>
          </p>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default PaymentLogCard;
