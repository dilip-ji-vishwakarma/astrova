import React, { useState } from "react";
import HeaderBreadcrumb from "../HeaderBreadcrumb";
import TextInputField from "../commonComp/TextInputField";
import { FaHeart, FaUser } from "react-icons/fa";
import {
  MdEditCalendar,
  MdPhone,
  MdWatchLater,
  MdWorkOutline,
} from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import DropdownSelect from "../commonComp/DropdownSelect";
import { FiUsers } from "react-icons/fi";
import CommonButton from "../commonComp/CommonButton";

const BookingAppointment = () => {
  const [selectedGender, setSelectedGender] = useState("Male");
  const [selectedMinutes, setSelectedMinutes] = useState(5);
  const [showPartnerDetails, setShowPartnerDetails] = useState(false);

  const minuteOptions = [5, 10, 15, 20, 25, 30];

  return (
    <>
      <HeaderBreadcrumb />
      <div className="container">
        <div className="booking_appo_form_main ">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
              <TextInputField
                label="Enter Name"
                placeholder="Username"
                icon={<FaUser />}
              />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
              <TextInputField
                label="Phone Number"
                placeholder="+91 ..........."
                type="tel"
                icon={<MdPhone />}
              />
            </div>

            {/* Gender Selector */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
              <div className="form-group input_box">
                <label className="">Gender</label>
                <div className="gender-selector d-flex gap-2">
                  {["Male", "Female"].map((gender) => (
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

            <div className="col-lg-6 mb-4">
              <DropdownSelect
                label="Marital Status(Optional)"
                options={["Single", "Married"]}
                icon={<FiUsers />}
              />
            </div>

            <div className="col-lg-6 mb-4">
              <TextInputField
                label="Enter Occupation(Optional)"
                placeholder="Student"
                icon={<MdWorkOutline />}
              />
            </div>

            {/* Minutes Selection */}
            <div className="col-12 mb-4">
              <div className="form-group input_box">
                <label className="">How many minutes you want to talk?</label>
                <div className="d-flex flex-wrap gap-2">
                  {minuteOptions.map((min) => (
                    <button
                      key={min}
                      type="button"
                      className={`round_Shap_btn ${
                        selectedMinutes === min
                          ? "form_selct_btn_active"
                          : "form_selct_btn"
                      }`}
                      onClick={() => setSelectedMinutes(min)}
                    >
                      {min} Mins
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Topic of Concern */}
            <div className="col-12 col-sm-12 mb-4">
              <DropdownSelect
                label="Topic of Concern"
                options={["Study", "Job", "Marriage", "Health"]}
                icon={<FaHeart />}
              />
            </div>

            {/* Partner Details Toggle */}
            <div className="col-12 mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  id="partnerDetails"
                  className="form-check-input"
                  checked={showPartnerDetails}
                  onChange={() => setShowPartnerDetails(!showPartnerDetails)}
                />
                <label htmlFor="partnerDetails" className="form-check-label">
                  Enter Partner Details
                </label>
              </div>
            </div>

            {/* Partner Fields (conditionally shown) */}
            {showPartnerDetails && (
              <>
                <div className="col-lg-6 mb-4">
                  <TextInputField
                    label="Enter Name"
                    placeholder="Partner Name"
                    icon={<FaUser />}
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
                    label="Enter Place of Birth"
                    placeholder="Udaipur, Rajasthan"
                    icon={<FaLocationDot />}
                  />
                </div>
              </>
            )}

            {/* Action Buttons */}
            <div className="col-12 mt-4 booking_form_btn">
              <CommonButton text="Cancel" className="large_btn cancel_btn" />
              <CommonButton
                text="Start Chat with Mahesh"
                className="large_btn btn-cmn "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingAppointment;
