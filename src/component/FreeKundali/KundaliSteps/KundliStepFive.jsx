import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import TextInputField from "../../commonComp/TextInputField";
import CommonButton from "../../commonComp/CommonButton";

const kundaliOptions = [
  { id: 1, label: "Basic", price: null },
  { id: 2, label: "Small Kundali", price: 20 },
  { id: 3, label: "Detailed Kundali", price: 30 },
  { id: 4, label: "Full-fledged Kundali", price: 49 },
  { id: 5, label: "AI Prediction", price: null, disabled: true },
];

const KundliStepFive = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState(1);

  return (
    <div className="kundli_step_five_container">
      <TextInputField
        label="Where were you Born?"
        placeholder="Udaipur, Rajasthan"
        type="text"
        icon={<FaLocationDot />}
      />

      <div className="kundali_options_wrapper">
        {kundaliOptions.map((opt) => (
          <label
            key={opt.id}
            className={`kundali_option_label ${
              selectedOption === opt.id ? "selected" : ""
            } ${opt.disabled ? "disabled" : ""}`}
          >
            <input
              type="radio"
              name="kundali_type"
              value={opt.id}
              disabled={opt.disabled}
              checked={selectedOption === opt.id}
              onChange={() => setSelectedOption(opt.id)}
            />
            <span className="option_text">
              {opt.label}
              {opt.price !== null && ` (₹${opt.price})`}
            </span>
          </label>
        ))}
      </div>

      <div className="kundali_form_next_btn">
        <CommonButton text="Submit" onClick={onNext} />
      </div>
    </div>
  );
};

export default KundliStepFive;
