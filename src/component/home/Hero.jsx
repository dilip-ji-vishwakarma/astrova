import React from "react";
import { Link } from "react-router-dom";
import LinkCommon from "../commonComp/LinkCommon";
import { FaHome } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="hero_section_main position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="hero_content position-relative">
              <h2>
                Discover the Power <br />
                of Your Zodiac
              </h2>
              <p>Unlock the Secrets of the Stars and Planets</p>
              <div className="hero_section_btns">
                <LinkCommon
                  to="/chat-with-astrologer"
                  text="Chat with Astrologer"
                  icon={MdOutlineMessage}
                  className="rounded-5 btn btn-white py-3 me-3"
                />
                <LinkCommon
                  to="/talk-with-astrologer"
                  text="Call with Astrologer"
                  icon={IoCallOutline}
                  className="rounded-5 btn btn-blue py-3 me-3"
                />
                {/* <Link to="/chat-with-astrologer" className="common_btn">
                  <img
                    src="/assets/image/icon/msg.png"
                    alt="message"
                    className="img-fluid"
                  />
                  Chat with Astrologer
                </Link>

                <Link to="/talk-with-astrologer" className=" common_btn">
                  <img
                    src="/assets/image/icon/phone.png"
                    alt="message"
                    className="img-fluid"
                  />
                  Call with Astrologer
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-0 col-sm-12">
            <div className="hero_img position-relative">
              <img
                src="/assets/image/hero-section-astro.png"
                className="img-fluid"
                alt="hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
