import React from "react";
import { Link } from "react-router-dom";
import { fakeShoppingData } from "./callHistoryData";

const ShoppingCard = () => {
  return (
    <div className="history-list history_product_card">
      {fakeShoppingData?.map((item) => (
        <Link to={`/product-detail/${item.id}`} state={{ product: item }}>
          <div key={item.id} className="history-card ">
            <div className="details">
              <div>
                <h4 className="order_id">Order ID: #101010101010</h4>

                <h5>{item.productName}</h5>
                <p>{item?.date}</p>
                <p>Price : {item?.price}</p>
                {/* <div
                  className={`status-tag ${
                    item.status === "Completed" ||
                    item.status === "Success" ||
                    item.status === "Delivered"
                      ? "green"
                      : "red"
                  }`}
                >
                  {item.status}
                </div> */}
                <div
                  className={`status-tag status-${item.status.toLowerCase()}`}
                >
                  {item.status}
                </div>
              </div>
            </div>
            <div className="status_side">
              <img src={item.image} alt={item.name} className="avatar" />
            </div>
            {/* <Link to="/" className="history_Card_help">
              HELP
            </Link> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ShoppingCard;
