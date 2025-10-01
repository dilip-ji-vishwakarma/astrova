import React from "react";

const Stepper = ({ currentStep }) => {
  const steps = [1, 2, 3, 4, 5];
  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step-item ${currentStep === step ? "active" : ""}`}
        >
          <div className="step-circle">{step}</div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
