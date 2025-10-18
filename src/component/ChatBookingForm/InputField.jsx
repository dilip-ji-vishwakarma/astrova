import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

const InputField = ({ label, icon, type = "text", value, onChange, placeholder, error }) => {
  return (
    <div className="custom-input-field">
      {label && <label className="custom-label">{label}</label>}
      <div className={`custom-input-wrapper ${error ? "has-error" : ""}`}>
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="custom-input"
        />
      </div>
      {error && (
        <p className="input-error">
          <FaExclamationCircle className="error-icon" /> {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
