import React, { useState } from "react";
import HeaderBreadcrumb from "../HeaderBreadcrumb";
import Stepper from "./Stepper";
import KundliStepOne from "./KundaliSteps/KundliStepOne";
import KundliStepTwo from "./KundaliSteps/KundliStepTwo";
import KundliStepThree from "./KundaliSteps/KundliStepThree";
import KundliStepFour from "./KundaliSteps/KundliStepFour";
import KundliStepFive from "./KundaliSteps/KundliStepFive";

const KundaliForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <KundliStepOne onNext={goToNext} />;
      case 2:
        return <KundliStepTwo onNext={goToNext} />;
      case 3:
        return <KundliStepThree onNext={goToNext} />;
      case 4:
        return <KundliStepFour onNext={goToNext} />;
      case 5:
        return <KundliStepFive />;
      default:
        return null;
    }
  };

  return (
    <>
      <HeaderBreadcrumb />
      <div className="kundali_form_main_outer">
        <div className="container">
          <Stepper currentStep={currentStep} />
          <div className="kundali_form_main">
            <h3>Step {currentStep}</h3>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <img
                  src="assets/image/hero-section-astro.png"
                  className="img-fluid"
                  alt="astro"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="kundali_form_col">
                  <h1>Hello!</h1>
                  {renderStep()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KundaliForm;
