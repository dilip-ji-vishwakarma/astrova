import React from "react";
import {
  FaCommentDots,
  FaCalendarAlt,
  FaGift,
  FaUserPlus,
  FaPlus,
} from "react-icons/fa";
import { MdCheck } from "react-icons/md";
import CommonButton from "../commonComp/CommonButton";
import { BiSolidMessageRounded } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const ActionSection = () => {
  return (
    <div className="astro_action_button mb-4">
      {/* Action Buttons */}
      <div className="astro_action_buttons row d-none">
        <ActionButton
          link="/send-gift"
          icon={<BiSolidMessageRounded />}
          label="Chat with Assistant"
        >
          Chat with Assistant
        </ActionButton>
        <ActionButton icon={<FaCalendarAlt />} label="Availability" />
        <ActionButton icon={<FaGift />} label="Send Gift to Mahesh" />
      </div>

      {/* Follow Section */}
      <div className="follow_section d-none">
        <div className="">
          <h3>Follow Mahesh</h3>
          <p>
            Follow Mahesh to get notified when they go live, come or run an
            offers!
          </p>
        </div>
        <div className="astro_follow_button_main">
          <CommonButton
            text="Follow"
            iconLeft={AiOutlinePlus}
            className="follow_btn btn-cmn"
          />
        </div>
      </div>
    </div>
  );
};

// Reusable Button
const ActionButton = ({ icon, label, link }) => {
  return (
    <div className="col-md-4 px-md-4">
    <Link to={link} className="astro_details_action_btn">
      <span className="icon">{icon}</span>
      {label}
    </Link>
    </div>
  );
};

export default ActionSection;
