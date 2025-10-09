import StarRatings from "react-star-ratings";
import ChatButtons from "../AstrologerList/ChatButtons";
import { getImageUrl } from "../../utils/getImageUrl";

const AstrologerCard = ({ data, type }) => {
  if (!data) return null;
  return (
    <div className="col-md-6">
      <div className="card shadow-sm h-100">
        <div className="card-body d-flex flex-column">
          {/* Profile & Ratings */}
          <div className="d-flex align-items-center mb-3">
            <img
              src={getImageUrl(data.avatarUrl)}
              alt={`${data.firstName} ${data.lastName}`}
              className="rounded-circle me-3"
              width="60"
              height="60"
            />
            <div>
              <h5 className="mb-1">
                {data.firstName} {data.lastName}
              </h5>
              <StarRatings
                rating={4.5} // Placeholder, replace with dynamic if available
                starRatedColor="#f69a0e"
                numberOfStars={5}
                starDimension="16px"
                starSpacing="1px"
              />
              <small className="text-muted">{data.totalBookings} Orders</small>
            </div>
            <span
              className={`ms-auto rounded-circle ${
                data.status === "online" ? "bg-success" : "bg-secondary"
              }`}
              style={{ width: "12px", height: "12px" }}
            ></span>
          </div>

          {/* Details */}
          <p className="mb-1">
            <strong>Languages:</strong> {data.languages.join(", ")}
          </p>
          <p className="mb-1">
            <strong>Experience:</strong> {data.experienceYrs} years
          </p>
          <p className="mb-1">
            <strong>Skills:</strong> {data.primarySkills.join(", ")}
          </p>
          <p className="mb-1">
            <strong>Rates:</strong> ₹{data.voiceCallRate}/Voice, ₹
            {data.videoCallRate}/Video, ₹{data.chatRate}/Chat
          </p>
          <div className="mt-auto">
            <ChatButtons type={type} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologerCard;
