import React from "react";
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
import { FiUsers } from "react-icons/fi";
import CommonButton from "../commonComp/CommonButton";
import DropdownSelect from "../commonComp/DropdownSelect";
import { useDataMutations } from "./hook/use-data-mutations";
import { Controller } from "react-hook-form";

export const ChatBookingForm = () => {
  const { onSubmit, control, handleSubmit, isSubmitting } =
    useDataMutations();

  return (
    <>
      <HeaderBreadcrumb />
      <div className="container">
        <div className="booking_appo_form_main">
          <form onSubmit={handleSubmit(onSubmit)} className="row">
            {/* Name */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <TextInputField
                    label="Enter Name"
                    placeholder="Name"
                    icon={<FaUser />}
                    value={field.value}
                    onChange={field.onChange}
                    error={error?.message}
                  />
                )}
              />
            </div>

            {/* Gender */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
              <Controller
                name="gender"
                control={control}
                defaultValue=""
                rules={{ required: "Gender is required" }}
                render={({ field, fieldState: { error } }) => (
                  <DropdownSelect
                    label="Gender"
                    options={["Male", "Female", "Other"]}
                    icon={<FiUsers />}
                    value={field.value}
                    onChange={field.onChange}
                    error={error?.message}
                  />
                )}
              />
            </div>
            {/* Birth Date */}
            <div className="col-lg-6 mb-4">
              <Controller
                name="birthDate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextInputField
                    label="Enter Birth Date"
                    type="date"
                    icon={<MdEditCalendar />}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>

            {/* Birth Time */}
            <div className="col-lg-6 mb-4">
              <Controller
                name="birthTime"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextInputField
                    label="Enter Time of Birth"
                    type="time"
                    icon={<MdWatchLater />}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>

            {/* Birth Place */}
            <div className="col-lg-6 mb-4">
              <Controller
                name="birthPlace"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextInputField
                    label="Enter Place of Birth"
                    placeholder="Udaipur, Rajasthan"
                    icon={<FaLocationDot />}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>

            {/* Marital Status */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
              <Controller
                name="requestType"
                control={control}
                defaultValue=""
                rules={{ required: "requestType is required" }}
                render={({ field, fieldState: { error } }) => (
                  <DropdownSelect
                    label="Request Type"
                    options={["chat", "voice", "video"]}
                    value={field.value}
                    onChange={field.onChange}
                    error={error?.message}
                  />
                )}
              />
            </div>

            {/* Occupation */}
            <div className="col-lg-6 mb-4">
              <Controller
                name="occupation"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextInputField
                    label="Enter Occupation (Optional)"
                    placeholder="Student"
                    icon={<MdWorkOutline />}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>

            {/* Topic of Concern */}
            <div className="col-12 col-sm-12 mb-4">
              <Controller
                name="topic"
                control={control}
                defaultValue=""
                rules={{ required: "Please select a topic" }}
                render={({ field, fieldState: { error } }) => (
                  <DropdownSelect
                    label="Topic of Concern"
                    options={["Study", "Job", "Marriage", "Health"]}
                    icon={<FaHeart />}
                    value={field.value}
                    onChange={field.onChange}
                    error={error?.message}
                  />
                )}
              />
            </div>

            {/* Action Buttons */}
            <div className="col-12 mt-4 booking_form_btn">
              <CommonButton
                text="Cancel"
                className="large_btn cancel_btn"
                type="button"
              />
              <CommonButton
                text={isSubmitting ? "Submitting..." : "Start Chat"}
                className="large_btn btn-cmn"
                type="submit"
                disabled={isSubmitting}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
