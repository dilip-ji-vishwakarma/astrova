import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import TextInputField from "./TextInputField";
import CommonButton from "./CommonButton";

const LoginPopup = ({ onClose }) => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("mobile"); // 'mobile' or 'otp'
  const [timer, setTimer] = useState(60);
  const inputsRef = useRef([]);
  const handleMobileSubmit = () => {
    if (mobile.length === 10) {
      setStep("otp"); // Move to OTP step
    } else {
      setStep("otp");
      //   alert("Enter a valid 10-digit mobile number");
    }
  };

  const handleOtpSubmit = () => {
    if (otp.length === 6) {
      alert("OTP Verified");
      // You can proceed with login or close popup
      // onClose();
    } else {
      alert("Enter a valid  OTP");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // allow only digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move to next input if not last
    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

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
          <div className="login_popup_content">
            <p>You will receive a 6-digit code for verification</p>

            <TextInputField
              label="Enter your phone number"
              placeholder="+91 ..........."
              type="tel"
              icon={<MdPhone />}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              maxLength={10}
            />

            <div className="login_popup_login_btn">
              <CommonButton
                onClick={handleMobileSubmit}
                text="GET OTP"
                iconRight={FaArrowRight}
              />
            </div>

            <p className="terms_text">
              By Signing up, you agree to our <a href="#">Terms of Use</a> and{" "}
              <a href="#">Privacy Policy</a>
            </p>
          </div>
        ) : (
          <div className="login_popup_content">
            <p>Enter the 6-digit OTP sent to your mobile number</p>

            {/* <TextInputField
              label="OTP"
              placeholder="Enter 6 digit OTP"
              type="tel"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
            /> */}
            <div className="otp_input_container">
              {[0, 1, 2, 3].map((i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  value={otp[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  ref={(el) => (inputsRef.current[i] = el)}
                  className="otp_input"
                />
              ))}
            </div>

            <div className="login_popup_login_btn">
              <CommonButton
                onClick={handleOtpSubmit}
                text="Verify OTP"
                iconRight={FaArrowRight}
              />
            </div>
            <p className=" resend_text">
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
