import React, { useState } from "react";
import HeaderBreadcrumb from "../HeaderBreadcrumb";
import HistoryTabFilter from "./HistoryTabFilter";
import { fakeHistoryData } from "./callHistoryData";
import { useLocation } from "react-router-dom";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import { MdOutlineDownload } from "react-icons/md";

const HistoryProductDetails = () => {
  const { state } = useLocation();
  const { product } = state || {}; // destructure product data
  const [selectedTab, setSelectedTab] = React.useState("shopping");

  if (!product) return <div>No data found.</div>;

  return (
    <>
      <HeaderBreadcrumb />
      {/* <HistoryTabFilter selected={selectedTab} onSelect={setSelectedTab} /> */}
      <div className="container">
        <HistoryTabFilter selected="shopping" onSelect={() => {}} />
        <div className="History_Product_cards_main">
          {/* Product Detail Section */}
          <div className="History_Product_card">
            <h2>Product Detail</h2>
            <div className="product_detail">
              <div className="product_detail_inner">
                <img
                  src={product.image}
                  alt={product.productName}
                  className="img-fluid"
                />
                <div>
                  <h4>{product.productName}</h4>
                  <p>Price: ₹ {product.price}</p>
                </div>
              </div>
              <button className="buy_again_btn">Buy Again</button>
            </div>
          </div>
          <div className="History_Product_card">
            {/* Order Information */}
            <div className="order_info">
              <h2>Order Information</h2>
              <p>
                <span>Order ID:</span> <span> {product.orderId}</span>
              </p>
              <p>
                <span>Date:</span> <span> {product.date} </span>
              </p>
              <p>
                <span>Status:</span>{" "}
                <span className={`status ${product.status.toLowerCase()}`}>
                  {product.status}
                </span>
              </p>
              <p>
                <span>Order Type:</span> <span> Astrova Mall</span>
              </p>
              <p>
                <span>Payment Status:</span> <span> Paid</span>
              </p>
            </div>
          </div>

          {/* Payment */}
          <div className="History_Product_card ">
            <div className="order_info">
              <h2>Payment Details</h2>
              <p>
                <span> Product Amount:</span>{" "}
                <span style={{ fontWeight: "600", color: "#000" }}>
                  {" "}
                  ₹ {product.price}{" "}
                </span>{" "}
              </p>
              <p>
                {" "}
                <span> GST:</span>{" "}
                <span style={{ color: "#E25016" }}> ₹ 15 </span>
              </p>
              <div className="line_divider"></div>
              <p>
                {" "}
                <span> Total Amount: </span>{" "}
                <span style={{ fontWeight: "600", color: "#E25016" }}>
                  {" "}
                  ₹ {product.price + 15}{" "}
                </span>
              </p>
            </div>
          </div>

          {/* Note */}
          <div className="wallet_note">
            <IoIosInformationCircleOutline className="icon" /> Note: 1 Rupee = 1
            Coin for wallet transactions.
          </div>

          {/* Shipping */}
          <div className="History_Product_card ">
            <div className="order_info">
              <h2>Shipping Address</h2>
              <p>
                <span>Name:</span>{" "}
                <span style={{ fontWeight: "600", color: "#000" }}>
                  {" "}
                  Mahesh Raykar
                </span>
              </p>
              <p>
                <span>Phone:</span> <span> 9579217810 </span>
              </p>
              <p>
                <span>Address:</span>{" "}
                <span style={{ fontWeight: "600", color: "#000" }}>
                  {" "}
                  Takalimiyra, Tal-Rahuri, Dist- A.Nagar Maharashtra-413716
                </span>
              </p>
            </div>
          </div>
          <button className="common_btn download_invoice_btn">
            <MdOutlineDownload className="icon" /> Download Invoice
          </button>
        </div>
      </div>
    </>
  );
};

export default HistoryProductDetails;
