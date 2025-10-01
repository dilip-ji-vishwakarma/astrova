import { toast } from "sonner";
import { apiServiceWithSession } from "../../../services/apiServiceWithSession";

export const useLoginWithOtp = (setStep, onClose) => {
  const requestOtp = async (data) => {
    try {
      const response = await apiServiceWithSession(
        "/auth/request-otp",
        "post",
        {
          phone: data.phone,
        }
      );

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
      const response = await apiServiceWithSession("/auth/verify-otp", "post", {
        phone,
        otp: otp.join(""),
      });

      if (response.success) {
        toast.success("Login successful!");
        onClose(true);
        localStorage.setItem("sessionToken", response.data.token);
        localStorage.setItem("userInfo", JSON.stringify(response.data.userId));
      } else {
        toast.error(response.message || "Invalid OTP");
      }
    } catch (err) {
      toast.error(err.message || "An error occurred");
    }
  };

  const logout = () => {
    localStorage.removeItem("sessionToken");
    localStorage.removeItem("userInfo");
    window.location.href = "/";
  };

  return { requestOtp, verifyOtp, logout };
};
