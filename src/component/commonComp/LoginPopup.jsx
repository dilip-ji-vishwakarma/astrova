import  { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLoginWithOtp } from "./hook/use-login-with-otp";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const LoginPopup = ({ onClose }) => {
  const [step, setStep] = useState("mobile");
  const [otpLoading, setOtpLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [phoneNumber, setPhoneNumber] = useState("");
  const inputsRef = useRef([]);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const { requestOtp, verifyOtp } = useLoginWithOtp(setStep, onClose);

  const handleMobileSubmit = async (data) => {
    setPhoneNumber(data.phone);
    await requestOtp(data);
  };

const handleOtpSubmit = async () => {
  setOtpLoading(true); 
  await verifyOtp(phoneNumber, otp);
  setOtpLoading(false); 
};


  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="login_popup_overlay">
      <div className="login_popup_box animate__animated animate__fadeInDown">
        <div className="popup_header">
          <h5>Continue with Phone</h5>
          <button onClick={onClose} className="close_btn">
            ×
          </button>
        </div>

        {step === "mobile" ? (
          <form onSubmit={handleSubmit(handleMobileSubmit)}>
            <div className="login_popup_content">
              <p>You will receive a 6-digit code for verification</p>
              <div className="login-form">
                <label>Enter your phone number</label>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Mobile No. is required", minLength: 10 }}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      country={"in"}
                      onlyCountries={["in", "us", "gb"]}
                      placeholder="Enter phone number"
                      inputProps={{
                        name: "Enter your phone number",
                        required: true,
                        autoFocus: true,
                      }}
                    />
                  )}
                />
              </div>
              <div className="login_popup_login_btn">
                <button type="submit">
                  {isSubmitting ? (
                     <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  ) : (
                    <span>Get OTP</span>
                  )}
                </button>
              </div>
              <p className="terms_text">
                By Signing up, you agree to our <a href="#">Terms of Use</a> and{" "}
                <a href="#">Privacy Policy</a>
              </p>
            </div>
          </form>
        ) : (
          <div className="login_popup_content">
            <p>Enter the 6-digit OTP sent to your mobile number</p>
            <div className="otp_input_container">
              {otp.map((value, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  value={value}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(i, e)}
                  ref={(el) => (inputsRef.current[i] = el)}
                  className="otp_input"
                />
              ))}
            </div>

            <div className="login_popup_login_btn">
              <button type="button" onClick={handleOtpSubmit}>
                {otpLoading ?  <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span> : <span>Verify OTP</span>}
              </button>
            </div>

            <p className="resend_text">
              Resend OTP available in{" "}
              <span className="text-danger">{timer}s</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
