import React from "react";
import { FaStar, FaComments } from "react-icons/fa";
import { MdMessage, MdOutlineAddIcCall, MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CommonButton from "../commonComp/CommonButton";
import { getImageUrl } from "../../utils/getImageUrl";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};
export const AstrologerCards = ({ astrologers }) => {
  return (
    <div className="container">
      <Carousel responsive={responsive} infinite autoPlay={true}>
        {astrologers.map((astro) => (
          <div className="" key={astro.id}>
            <div className="astro_card ">
              <Link to={`/astrologer/${astro.id}`}>
                <div className="astro_card_inner">
                  <div className="">
                    <div className="position-relative">
                      <img
                        src={getImageUrl(astro.avatarUrl)}
                        alt={astro.firstName}
                        className="astro_img"
                      />
                    </div>
                  </div>
                  <div className="astro_card_content_side ">
                    <div className="" style={{ position: "relative" }}>
                      {astro.isOnline && (
                        <span className=" online_btn">
                          <div></div> Online
                        </span>
                      )}
                      <h6 className="">
                        {astro.firstName} {astro.lastName}
                        {astro.isCertified ? (
                          <img
                            src="../assets/image/icon/check.png"
                            className="img-fluid check"
                            alt="verify"
                          />
                        ) : null}
                      </h6>
                    </div>
                    <p className="mb-1 small text-secondary">
                      <strong>Exp:</strong> {astro.experienceYrs} yrs |{" "}
                      <strong>Lang:</strong> {astro.languages?.join(", ")}
                    </p>
                    <div className="mt-2">
                      <div className="d-flex justify-content-between small fw-semibold">
                        <span>🎙 Voice ₹{astro.voiceCallRate}/min</span>
                        <span>🎥 Video ₹{astro.videoCallRate}/min</span>
                      </div>
                    </div>
                    <div className="btn-setting">
                      {astro.isChatAvailable && (
<button className="round_Shap_btn"><IoChatbubbleEllipsesOutline /> chat</button>
                      )}
                       {astro.isCallAvailable && (
<button className="round_Shap_btn"><MdOutlineAddIcCall /> Call</button>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
