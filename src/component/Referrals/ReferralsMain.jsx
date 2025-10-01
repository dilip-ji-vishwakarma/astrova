import React from "react";
import HeaderBreadcrumb from "../HeaderBreadcrumb";
import ReferralCard from "./ReferralCard";

const ReferralsMain = () => {
  return (
    <>
      <HeaderBreadcrumb />
      <div className="container">
        <div className="referral_main_section">
            <div className="row">
              <div className="col-md-3 offset-md-3">
                <div className="stats_section_card stats_bg-primary">
                  <div className="text-white">
                    <h2>42</h2>
                    <div className="underline bg-white"></div>
                    <p>All Referrals</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="stats_section_card">
                  <div>
                    <h2>04</h2>
                    <div className="underline"></div>
                    <p>Total Referrals</p>
                  </div>
                </div>
              </div>
            </div>
          {/* Top Stats Section */}
          

          {/* Note Section */}
          <div className="refernote">
            <p>You’ll earn 2% on every deposit your referred friend makes!</p>
          </div>

          <ReferralCard />
        </div>
      </div>
    </>
  );
};

export default ReferralsMain;
