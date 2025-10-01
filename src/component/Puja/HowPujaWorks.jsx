import React from "react";
import { FaFireAlt, FaThumbsUp, FaBell } from "react-icons/fa";

const HowPujaWorks = () => {
  return (
    <div className="how-it-works-section">
      <div className="container">
        <div className="how-it-works-content row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="left-section">
              <h2 className="section-title">How Astrova Puja Works</h2>
              <p className="description">
                Booking an online Puja session with Astrova is just a few clicks
                away. Simply visit our website, browse through our Puja
                services, select the one that resonates with your requirements,
                and immerse yourself in the spiritual vibrations of the Puja.
              </p>

              <div className="steps">
                <div className="step">
                  <div className="icon_div">
                    <FaFireAlt className="icon " />
                  </div>
                  <div>
                    <h4>STEP1: Select a Puja</h4>
                    <p>Select a Puja along with the package of your choice.</p>
                  </div>
                </div>

                <div className="step">
                  <div className="icon_div">
                    <FaThumbsUp className="icon " />
                  </div>
                  <div>
                    <h4>STEP2: Get Your Confirmation</h4>
                    <p>
                      Book with advance payment and get a confirmed booking.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <div className="icon_div">
                    <FaBell className="icon " />
                  </div>
                  <div>
                    <h4>STEP3: Get Frequent updates</h4>
                    <p>
                      All details are shared with you on email, SMS and
                      WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="right-section">
              <img
                src="/assets/image/hero-section-astro.png"
                alt="Puja"
                className="how-image img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowPujaWorks;
