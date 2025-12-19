import { useEffect, useState } from "react";
import { astrologer_details, follow } from "../../../../utils/api-endpoints";
import { apiServiceWithSession } from "../../../../services/apiServiceWithSession";
import { toast } from "sonner";
import { apiService } from "../../../../services/apiService";

export const useFollowMutations = ({ id }) => {
  const [loadding, setLoadding] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
    const token = localStorage.getItem("sessionToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
  const fetchAstrologerDetails = async () => {
    try {
      setLoading(true);
      const response = await apiService(
        `${astrologer_details}/${id}`,
        "get"
      );
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
  
  if (id) {
    fetchAstrologerDetails();
  }
}, [id]);

  const handleFollow = async (id) => {
  try {
    setLoadding(true);
    const response = await apiServiceWithSession(`${follow}/${id}`, "post", {});
    if (response?.success) {
      toast.success(response.message);
      window.location.reload();
    } else {
      toast.error(response?.message || "Failed to update follow status");
    }
  } catch (error) {
    console.error("Error updating follow status:", error);
    toast.error("Something went wrong while updating follow");
  } finally {
    setLoadding(false);
  }
};

const handleUnFollow = async (id) => {
try {
    setLoadding(true);
    const response = await apiServiceWithSession(`${follow}/${id}`, "delete");
    if (response?.success) {
      toast.success(response.message);
      window.location.reload();
    } else {
      toast.error(response?.message || "Failed to update follow status");
    }
  } catch (error) {
    console.error("Error updating follow status:", error);
    toast.error("Something went wrong while updating follow");
  } finally {
    setLoadding(false);
  }
}

  return { handleFollow, loadding, loading, data, isLoggedIn, handleUnFollow };
};
