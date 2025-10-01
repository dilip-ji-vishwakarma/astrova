import { useState } from "react";
import CommonButton from "../../commonComp/CommonButton";
import TextInputField from "../../commonComp/TextInputField";

const KundliStepTwo = ({ onNext }) => {
  const [selectedGender, setSelectedGender] = useState("Male");

  return (
    <div>
      <div className="name-form">
        <div className="form-group input_box">
          <label className="">What is your Gender?</label>
          <div className="gender-selector d-flex gap-2">
            {["Male", "Female", "Other"].map((gender) => (
              <button
                key={gender}
                type="button"
                className={`round_Shap_btn  ${
                  selectedGender === gender
                    ? "form_selct_btn_active"
                    : "form_selct_btn"
                }`}
                onClick={() => setSelectedGender(gender)}
              >
                {gender}
              </button>
            ))}
          </div>
        </div>
        <div className="kundali_form_next_btn">
          <CommonButton text="Next" onClick={onNext} />
        </div>
      </div>
    </div>
  );
};
export default KundliStepTwo;
