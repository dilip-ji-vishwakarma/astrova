import React from "react";
import { Link } from "react-router-dom";

const CallHistoryCard = ({ data }) => {
  return (
    <div className="history-list">
      {data.map((item) => (
        <div key={item.id} className="history-card">
          <div className="details">
            <div>
              <h4 className="order_id">Order ID: #101010101010</h4>

              <h5>
                {item.name}{" "}
                <img src="assets/image/icon/check.png" className="img-fluid" />{" "}
              </h5>
              <p className="date">{item?.HistoryType}</p>
              <p>{item.time}</p>
              <p>Rate : {item.rate}</p>
              <p>Duration : {item.duration}</p>
              <p>Deduction : {item.deduction}</p>
            </div>
          </div>
          <div className="status_side">
            <img src={item.image} alt={item.name} className="avatar" />
            <span
              className={`status-tag ${
                item.status === "Completed" ||
                item.status === "Success" ||
                item.status === "Delivered"
                  ? "green"
                  : "red"
              }`}
            >
              {item.status}
            </span>
          </div>
          <Link to="/" className="history_Card_help">
            HELP
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CallHistoryCard;
