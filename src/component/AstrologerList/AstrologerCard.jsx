
import ChatButtons from "./ChatButtons";
import { FaPlus } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { IoVideocam } from "react-icons/io5";
import { MdCall, MdStar } from "react-icons/md";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const AstrologerCard = ({ data, type }) => {
  const ratingsData = {
    averageRating: 4.5,
    totalOrders: 8,
    starCounts: {
      5: 6,
      4: 2,
      3: 0,
      2: 0,
      1: 0,
    },
  };

  return (
      <div className="col-md-4">
        <div className="astro_details_card_main ">
        <div className="astro_details_card_profile_side">
          <div className="astro_details_card_profile">
            <div className="astro_details_card_profile_inner">
              <img
                src={data.image}
                alt={data.name}
                className="img-fluid profile"
              />
              {data?.status === "online" ? (
                <span className="astro_profile"></span>
              ) : (
                <span className="astro_profile offline"></span>
              )}
            </div>
            <StarRatings
              rating={ratingsData.averageRating}
              starRatedColor="#f69a0e"
              numberOfStars={5}
              starDimension="16px"
              starSpacing="1px"
            />
            <p style={{ marginTop: "6px", fontSize: "14px", color: "#666" }}>
              {ratingsData.totalOrders} Orders
            </p>
          </div>
          <div className="astro_details_card_profile_content">
            <h4>
              {data.name}
              <img
                src="../assets/image/icon/check.png"
                className="img-fluid check"
                alt="verify"
              />
            </h4>
            <p>{data.role}</p>
            <p>{data.languages.join(", ")}</p>
            <p>Experience : {data.experience} Years</p>
            <div className="astro_charge_rate">
              <p>₹ {data.rate}</p> <p>₹ 20/Min</p>
            </div>
          </div>
        </div>
        <div className="astro_details_card_btn_side">
          <div className="chat_btn_main">
            <ChatButtons type={type} />
          </div>
        </div>
        </div>
    </div>
  );
};
export default AstrologerCard;
