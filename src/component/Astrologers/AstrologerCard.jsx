import StarRatings from "react-star-ratings";
import { getImageUrl } from "../../utils/getImageUrl";
import { FaCommentDots, FaPhoneAlt, FaVideo } from "react-icons/fa";

const AstrologerCard = ({ data }) => {
  if (!data) return null;

  const {
    firstName,
    lastName,
    avatarUrl,
    experienceYrs,
    languages,
    primarySkills,
    chatRate,
    voiceCallRate,
    videoCallRate,
    totalBookings,
    isChatAvailable,
    isCallAvailable,
    isLive,
  } = data;

  return (
    <div className="astro_details_card_main shadow-sm p-3 rounded-3 d-flex justify-content-between align-items-start flex-wrap" style={{width: "48.5%"}}>
      <div className="astro_details_card_profile_side d-flex align-items-center gap-3">
        <div className="astro_details_card_profile text-center">
          <div className="astro_details_card_profile_inner position-relative">
            <img
              src={getImageUrl(avatarUrl)}
              alt={`${firstName} ${lastName}`}
              className="img-fluid profile rounded-circle"
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
            <span
              className={`astro_profile position-absolute bottom-0 end-0 border border-white rounded-circle ${
                isLive ? "bg-success" : "bg-secondary"
              }`}
              style={{ width: "14px", height: "14px" }}
            ></span>
          </div>

          {/* Rating + Orders */}
          <div className="mt-2 text-center">
            <StarRatings
              rating={4.5}
              starRatedColor="#f69a0e"
              numberOfStars={5}
              starDimension="16px"
              starSpacing="2px"
              name="rating"
            />
            <p style={{ marginTop: "6px", fontSize: "14px", color: "#666" }}>
              {totalBookings} Orders
            </p>
          </div>
        </div>

        {/* Profile Content */}
        <div className="astro_details_card_profile_content">
          <h5 className="mb-1 d-flex align-items-center gap-1">
            {firstName} {lastName}
            <img
              src="../assets/image/icon/check.png"
              alt="verify"
              className="img-fluid"
              style={{ width: "16px", height: "16px" }}
            />
          </h5>
          <p className="mb-1 text-muted">
            {primarySkills?.join(", ") || "Astrologer"}
          </p>

          <p className="mb-1">{languages?.join(", ")}</p>
          <p className="mb-1">Experience: {experienceYrs} Years</p>

          <div className="astro_charge_rate d-flex align-items-center gap-2 mt-1">
            <p className="m-0 fw-bold text-success">
              ₹ {chatRate || voiceCallRate || videoCallRate || 0}
            </p>
            <p className="m-0 ">/Min</p>
          </div>
          <div className="astro_details_card_btn_side mt-3 mt-md-0">
        <div className="chat_btn_main d-flex gap-2 flex-wrap justify-content-end">
          {isChatAvailable && (
            <button className="Astro_call_video_btn Astro_chat_btn btn btn-warning text-white rounded-pill align-items-center gap-1">
              <FaCommentDots />
            </button>
          )}
          {isCallAvailable && (
            <button className="Astro_call_video_btn btn btn-outline-warning rounded-pill align-items-center gap-1">
              <FaPhoneAlt />
            </button>
          )}
          {isLive && (
            <button className="Astro_call_video_btn btn btn-outline-primary rounded-pill align-items-center gap-1">
              <FaVideo />
            </button>
          )}
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologerCard;
