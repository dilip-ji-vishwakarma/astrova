import React from "react";
import HeaderBreadcrumb from "../../component/HeaderBreadcrumb";
import PujaListting from "../../component/Puja/PujaListting";
import HowPujaWorks from "../../component/Puja/HowPujaWorks";

const PujaMain = () => {
  return (
    <>
      <HeaderBreadcrumb />
      <div className="container">
        <PujaListting />
      </div>
      <HowPujaWorks />
    </>
  );
};

export default PujaMain;
