import React, { useState } from "react";
import TextInputField from "../../commonComp/TextInputField";
import { FaUser } from "react-icons/fa";
import CommonButton from "../../commonComp/CommonButton";

const KundliStepOne = ({ onNext }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    onNext(name);
  };

  return (
    <div className="name-form">
      <TextInputField
        label="What is your name?"
        placeholder="Enter your name"
        type="text"
        icon={<FaUser />}
      />
      <div className="kundali_form_next_btn">
        <CommonButton text="Next" onClick={onNext} />
      </div>
    </div>
  );
};

export default KundliStepOne;
