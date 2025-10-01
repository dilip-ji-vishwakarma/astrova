import React from "react";
import { FaUser } from "react-icons/fa";
import TextInputField from "./TextInputField";
import DropdownSelect from "./DropdownSelect";
import { BsGenderMale } from "react-icons/bs";
import { MdEditCalendar, MdWatchLater } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import CommonButton from "./CommonButton";

const KundaliForm = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
          <TextInputField
            label="Enter Name"
            placeholder="Username"
            icon={<FaUser />}
          />
        </div>
        <div className="col-lg-6 mb-4">
          <DropdownSelect
            label="Select Gender"
            options={["Male", "Female"]}
            icon={<BsGenderMale />}
          />
        </div>
        <div className="col-lg-6 mb-4">
          <TextInputField
            label="Enter Birth Date"
            type="date"
            icon={<MdEditCalendar />}
          />
        </div>
        <div className="col-lg-6 mb-4">
          <TextInputField
            label="Enter Time of Birth Date"
            type="time"
            icon={<MdWatchLater />}
          />
        </div>
        <div className="col-lg-6 mb-4">
          <TextInputField
            label="Enter Place of Birth"
            placeholder="Udaipur, Rajasthan"
            icon={<FaLocationDot />}
          />
        </div>

        <div className="col-12 mt-4 text-center">
          <CommonButton text="Update" className="" />
        </div>
      </div>
    </div>
  );
};

export default KundaliForm;
