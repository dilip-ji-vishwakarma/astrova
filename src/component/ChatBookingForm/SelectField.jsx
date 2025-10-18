import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

const SelectField = ({ label, value, onChange, options, error }) => {
  return (
    <div className="custom-input-field">
      {label && <label className="custom-label">{label}</label>}
      <div className={`custom-input-wrapper ${error ? "has-error" : ""}`}>
        <select className="custom-input" value={value} onChange={onChange}>
          <option value="">Select {label}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p className="input-error">
          <FaExclamationCircle className="error-icon" /> {error}
        </p>
      )}
    </div>
  );
};

export default SelectField;
