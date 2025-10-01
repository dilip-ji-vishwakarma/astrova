import React from "react";
import HeaderBreadcrumb from "../../component/HeaderBreadcrumb";
import KundaliForm from "../../component/commonComp/KundaliForm";

const KumdaliFormMain = () => {
  return (
    <>
      <HeaderBreadcrumb />
      <div className="container">
        <div className="booking_appo_form_main">
          <KundaliForm />
        </div>
      </div>
    </>
  );
};

export default KumdaliFormMain;
