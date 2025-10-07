import { toast } from "sonner";
import { apiServiceWithSession } from "../../../services/apiServiceWithSession";
import { useNavigate } from "react-router-dom";
import { request_otp, verify_otp } from "../../../utils/api-endpoints";

export const useLoginWithOtp = (setStep, onClose) => {
  const navigate = useNavigate();
  const requestOtp = async (data) => {
    try {
      const response = await apiServiceWithSession(request_otp, "post", {
        phone: data.phone,
      });

      if (response.success) {
        setStep("otp");
        toast.success("OTP sent successfully!");
      } else {
        toast.error(response.message || "Failed to send OTP");
      }
    } catch (err) {
      toast.error(err.message || "An error occurred");
    }
  };

  const verifyOtp = async (phone, otp) => {
    try {
      const response = await apiServiceWithSession(verify_otp, "post", {
        phone,
        otp: otp.join(""),
      });

      if (response.success) {
        toast.success("Login successful!");
        localStorage.setItem("sessionToken", response.data.token);
        localStorage.setItem("userInfo", JSON.stringify(response.data.userId));
        onClose?.(true);
        navigate("/my-profile");
        window.location.reload();
      } else {
        toast.error(response.message || "Invalid OTP");
      }
    } catch (err) {
      toast.error(err.message || "An error occurred");
    }
  };


  return { requestOtp, verifyOtp };
};
