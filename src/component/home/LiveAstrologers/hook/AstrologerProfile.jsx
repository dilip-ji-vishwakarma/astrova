import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiService } from "../../../../services/apiService";
import { astrologer_details } from "../../../../utils/api-endpoints";
import { toast } from "sonner";
import { getImageUrl } from "../../../../utils/getImageUrl";

export const AstrologerProfile = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchAstrologerDetails = async () => {
      try {
        setLoading(true);
        const response = await apiService(`${astrologer_details}/${id}`, "get");
        if (response?.success) {
          setData(response.data);
        } else {
          toast.error(response?.message || "Failed to load astrologer data");
        }
      } catch (error) {
        console.error("Error fetching astrologer details:", error);
        toast.error("Something went wrong while fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchAstrologerDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-5">
        <h5 className="text-muted">No astrologer data found</h5>
      </div>
    );
  }

  return (
    <div className="container py-5 mt-10" style={{ marginTop: "100px" }}>
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
        <div className="row g-0">
          {/* Profile Image */}
          <div className="col-md-4 bg-light text-center d-flex flex-column justify-content-center align-items-center p-4">
            <img
              src={getImageUrl(data.avatarUrl)}
              alt={data.firstName}
              className="rounded-circle mb-3"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h4 className="fw-bold">
              {data.firstName} {data.lastName}
            </h4>
            <p className="text-muted mb-1">
              {data.city}, {data.state}
            </p>
            <p className="text-secondary">
              {data.primarySkills?.join(", ") || "Astrology Expert"}
            </p>
            <div className="d-flex align-items-center justify-content-center mt-2">
              {data.isLive ? (
                <div className="d-flex align-items-center">
                  <span
                    className="rounded-circle me-2"
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "#28a745",
                      display: "inline-block",
                    }}
                  ></span>
                  <span className="text-success fw-semibold">Online</span>
                </div>
              ) : (
                <div className="d-flex align-items-center">
                  <span
                    className="rounded-circle me-2"
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "#dc3545",
                      display: "inline-block",
                    }}
                  ></span>
                  <span className="text-danger fw-semibold">Offline</span>
                </div>
              )}
            </div>
          </div>

          {/* Profile Details */}
          <div className="col-md-8 p-4">
            <h4 className="mb-3">Astrologer Details</h4>
            <div className="row mb-3">
              <div className="col-md-6">
                <p>
                  <strong>Gender:</strong> {data.gender}
                </p>
                <p>
                  <strong>Date of Birth:</strong>{" "}
                  {new Date(data.dateOfBirth).toLocaleDateString()}
                </p>
                <p>
                  <strong>Experience:</strong> {data.experienceYrs} Years
                </p>
                <p>
                  <strong>Languages:</strong> {data.languages.join(", ")}
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <strong>Email:</strong> {data.email}
                </p>
                <p>
                  <strong>Phone:</strong> {data.phone}
                </p>
                <p>
                  <strong>Daily Contribution:</strong>{" "}
                  {data.dailyContributionHrs} hrs
                </p>
                <p>
                  <strong>City:</strong> {data.city}
                </p>
              </div>
            </div>
            <hr />
            <h5 className="mt-4 mb-3">About</h5>
            <p className="text-muted">
              {data.longBio || "No description available."}
            </p>

            <hr />

            <div className="d-flex flex-wrap gap-2 mt-3">
              {data.instagramUrl && (
                <a
                  href={data.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-danger btn-sm"
                >
                  <i className="bi bi-instagram me-1"></i> Instagram
                </a>
              )}
              {data.linkedinUrl && (
                <a
                  href={data.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-primary btn-sm"
                >
                  <i className="bi bi-linkedin me-1"></i> LinkedIn
                </a>
              )}
              {data.youtubeUrl && (
                <a
                  href={data.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-danger btn-sm"
                >
                  <i className="bi bi-youtube me-1"></i> YouTube
                </a>
              )}
            </div>
            <div className="mt-4">
              <p className="mb-1">
                <strong>Rating:</strong> ⭐ {data.rating}
              </p>
              <p className="mb-0">
                <strong>Total Bookings:</strong> {data.totalBookings}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
