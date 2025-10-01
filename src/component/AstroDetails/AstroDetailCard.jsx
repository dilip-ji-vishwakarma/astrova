import React from "react";
import { FaPlus } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { IoVideocam } from "react-icons/io5";
import { MdCall, MdShare, MdStar } from "react-icons/md";
import { Link } from "react-router-dom";
import CommonButton from "../commonComp/CommonButton";
import LinkCommon from "../commonComp/LinkCommon";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSolidMessageRounded } from "react-icons/bi";

const AstroDetailCard = () => {
  return (
    <div className="astro-profile">
      <div className="astro_details_card_profile_side">
        <div className="astro_details_card_profile">
          <img
            src="../assets/image/astro.png"
            className="img-fluid profile"
            alt="profile"
          />
          <div className="rating">
            <h3>
              4.5{" "}
              <img
                src="../assets/image/icon/star.png"
                alt="star"
                className="img-fluid star"
              />
            </h3>
          </div>
        </div>
        <div className="astro_details_card_profile_content">
          <h4>
            Manish Sharma{" "}
            <img
              src="../assets/image/icon/check.png"
              className="img-fluid check"
              alt="verify"
            />
          </h4>
          <p>Psychologist</p>
          <p>English, Hindi</p>
          <p>Experience : 5 Years</p>
          <div className="astro_charge_rate">
            <p>₹ 10/min</p> <p>₹ 20/Min</p>
          </div>
        </div>
      </div>
      <div className="astro_details_card_btn_side">
        {/* <button className="follow_btn">
          <FaPlus className="icon" /> Follow
        </button> */}
        <div className="astro_share_btn_main">
          <CommonButton
            text="Follow"
            iconLeft={AiOutlinePlus}
            className="follow_btn btn-cmn"
          />
          <button className="astro_share_btn btn-cmn">
            {" "}
            <MdShare className="icon" />{" "}
          </button>
        </div>

        <div className="chat_btn_main">
          <LinkCommon
            to="/booking-appointment"
            text="Chat"
            icon={BiSolidMessageRounded}
            className="follow_btn chat_btn"
          />

          <LinkCommon
            to="/booking-appointment"
            text="Audio"
            icon={MdCall}
            className="follow_btn chat_btn"
          />
          <LinkCommon
            to="/booking-appointment"
            text="Video"
            icon={IoVideocam}
            className="follow_btn chat_btn"
          />

          {/* <Link className="follow_btn chat_btn" to="/booking-appointment">
            <MdCall className="icon" />
            Audio
          </Link>

          <Link className="follow_btn chat_btn" to="/booking-appointment">
            <IoVideocam className="icon" />
            Video
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default AstroDetailCard;
