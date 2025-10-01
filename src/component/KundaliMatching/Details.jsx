import React from "react";
import KundaliForm from "../commonComp/KundaliForm";

const Details = () => {
  return (
    <div className="booking_appo_form_main ">
      <h3>Boy's Details</h3>
      <KundaliForm />
      <hr className="mt-5"></hr>
      <h3 className="mt-5">Girl's Details</h3>
      <KundaliForm />
    </div>
  );
};

export default Details;
