import React from "react";
import HeaderBreadcrumb from "../../HeaderBreadcrumb";
import TextInputField from "../../commonComp/TextInputField";
import { FaUser } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import CommonButton from "../../commonComp/CommonButton";
import { RiCoupon4Line } from "react-icons/ri";

const Checkout = () => {
  return (
    <>
      <HeaderBreadcrumb />
      <div className="puja_booking_details_main checkout_page">
        <div className="container">
          <div className="row">
            {/* Left: User Info */}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="user-info">
                <h3>Enter Your Details</h3>
                <form>
                  <TextInputField
                    label=" First Name"
                    placeholder=" First Name"
                    icon={<FaUser />}
                  />

                  <TextInputField
                    label=" Last Name"
                    placeholder=" Last Name"
                    icon={<FaUser />}
                  />

                  <TextInputField
                    label="Phone Number"
                    placeholder="+91 ..........."
                    type="tel"
                    icon={<MdPhone />}
                  />

                  <TextInputField
                    label="Email"
                    placeholder="Email"
                    type="email"
                    icon={<MdPhone />}
                  />
                </form>
              </div>

              {/* Order Summary (Sticky Footer Optional or Side Card) */}
              <div className="order-summary-card">
                <h3>Order Summary</h3>
                <div className="order-item">
                  <img
                    src="/assets/image/puja1.png"
                    alt="Angarak Yog Shanti Puja"
                  />
                  <div>
                    <p>Angarak Yog Shanti Puja</p>
                    <p className="price">₹21,000.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              {/* Right: Coupon + Payment */}

              <div className="order-summary-card coupon-box">
                <h3>Coupon Code</h3>
                <TextInputField
                  placeholder=" Enter Coupon Code"
                  icon={<RiCoupon4Line />}
                />
                <div className="coupon-box_apply_btn">
                  <CommonButton text="Apply Now" />
                </div>
              </div>

              <div className="order-summary-card checkout-summary ">
                <div className="payment-details">
                  <h3>Payment Details</h3>
                  <div className="summary-line">
                    Item(s) <span>1</span>
                  </div>
                  <div className="summary-line">
                    Subtotal <span>₹21,000.00</span>
                  </div>
                  <div className="summary-line">
                    Fees & Taxes <span>₹3,780.00</span>
                  </div>
                  <hr />
                  <div className="summary-line total">
                    <strong>Total</strong> <strong>₹24,780.00</strong>
                  </div>
                  <div className="coupon-box_apply_btn">
                    <CommonButton text="Pay Now" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
