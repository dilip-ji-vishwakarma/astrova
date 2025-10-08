import { useState } from "react"
import { follow } from "../../../../utils/api-endpoints";
import { apiServiceWithSession } from "../../../../services/apiServiceWithSession";
import { toast } from "sonner";

export const useFollowMutations = () => {
    const [loading, setLoadding] = useState()
    const handleFollow = async (id) => {
        try {
        setLoadding(id);
         const response = await apiServiceWithSession(`${follow}/${id}`, "post", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
        if (response.success) {
          toast.success(response.message)
          setLoadding(null);
        } else {
          toast.error(response?.message || "Failed to load dashboard data");
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        toast.error("Something went wrong while fetching data");
      } finally {
        setLoadding(null);
      }
    }
  return {handleFollow, loading}
}
