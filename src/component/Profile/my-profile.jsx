import { useEffect, useState } from "react";
import { toast } from "sonner";
import { apiServiceWithSession } from "../../services/apiServiceWithSession";
import HeaderBreadcrumb from "../HeaderBreadcrumb";
import { ProfileForm } from "./profile-form";
import { user_profile } from "../../utils/api-endpoints";

export const MyProfile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiServiceWithSession(user_profile, "get");

        if (response.success) {
          setData(response.data);
        } else {
          toast.error(response.message);
        }
      } catch (err) {
        toast.error(err.message || "An error occurred");
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeaderBreadcrumb />
      {loading ? (
        <div className="d-flex justify-content-center align-items-center my-5">
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          ></span>
        </div>
      ) : (
        <ProfileForm data={data} />
      )}
    </>
  );
};
