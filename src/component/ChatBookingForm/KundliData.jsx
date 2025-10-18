import React, { useEffect, useState } from "react";
import { kundli } from "../../utils/api-endpoints";
import { toast } from "sonner";
import { apiServiceWithSession } from "../../services/apiServiceWithSession";
import { formatSingleDate } from "../../utils/formate-date";

export const KundliData = () => {
  const [loading, setLoading] = useState(false);
  const [kundliData, setKundliData] = useState([]);

  useEffect(() => {
    const fetchAstrologerDetails = async () => {
      try {
        const userInfo = localStorage.getItem("userInfo");
        setLoading(true);
        const response = await apiServiceWithSession(`${kundli}/${userInfo}`, "get");

        if (response?.success && Array.isArray(response.data)) {
          setKundliData(response.data);
        } else {
          toast.error(response?.message || "Failed to load kundli data");
        }
      } catch (error) {
        console.error("Error fetching kundli details:", error);
        toast.error("Something went wrong while fetching kundli data");
      } finally {
        setLoading(false);
      }
    };

    fetchAstrologerDetails();
  }, []);

  return (
    <div className="container my-4">
      <h3 className="text-center mb-4">Your Kundli Records</h3>

      {loading ? (
        <div className="text-center my-5">
          <div className="spinner"></div>
          <p>Loading kundli data...</p>
        </div>
      ) : kundliData.length > 0 ? (
        <div className="kundli-card-grid">
          {kundliData.map((item) => (
            <div key={item.id} className="kundli-card">
              <h4 className="kundli-name">{item.name}</h4>

              <div className="kundli-row">
                <span className="label">Gender:</span>
                <span className="value text-capitalize">{item.gender}</span>
              </div>
              <div className="kundli-row">
                <span className="label">Date of Birth:</span>
                <span className="value">
                  {formatSingleDate(item.dob, true)}
                </span>
              </div>
              <div className="kundli-row">
                <span className="label">Time of Birth:</span>
                <span className="value">{item.tob}</span>
              </div>
              <div className="kundli-row">
                <span className="label">Place of Birth:</span>
                <span className="value">{item.pob}</span>
              </div>
              <div className="kundli-row">
                <span className="label">Latitude:</span>
                <span className="value">{item.lat.toFixed(4)}</span>
              </div>
              <div className="kundli-row">
                <span className="label">Longitude:</span>
                <span className="value">{item.long.toFixed(4)}</span>
              </div>

              <p className="created-at">
                Created on:{" "}
                {formatSingleDate(item.createdAt, true)}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted">No kundli data available.</p>
      )}
    </div>
  );
};
