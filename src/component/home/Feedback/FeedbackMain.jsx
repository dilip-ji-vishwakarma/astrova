import React from "react";
import SectionHeader from "../../commonComp/SectionHeader";
import CommonButton from "../../commonComp/CommonButton";

const FeedbackMain = () => {
  return (
    <>
      <div className="container mt-md-5 mt-4">
        <div className="feedbackMian_section">
          <div className="cate_header">
            <SectionHeader title=" Feedback to the CEO office!" />
          </div>
          <div className="textarea_section">
            <textarea rows="6" placeholder="Start typeing here..." />
          </div>
          <div className="Send_Feedback_btn">
            {/* <button className="common_btn">Send Feedback</button> */}
            <CommonButton text="Send Feedback" className="large_btn" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackMain;
