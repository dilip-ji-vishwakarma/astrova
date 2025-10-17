import React, { useEffect } from "react";
import HeaderBreadcrumb from "../HeaderBreadcrumb";
import TextInputField from "../commonComp/TextInputField";
import { FaUser } from "react-icons/fa";
import { MdEditCalendar, MdWatchLater } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import CommonButton from "../commonComp/CommonButton";
import DropdownSelect from "../commonComp/DropdownSelect";
import { useDataMutations } from "./hook/use-data-mutations";
import { Controller } from "react-hook-form";
import { useParams } from "react-router-dom";

export const ChatBookingForm = () => {
  const { astrologerId } = useParams();

  // useDataMutations should internally use useForm({ mode: "onBlur" })
  const { onSubmit, control, handleSubmit, isSubmitting, setValue, errors } =
    useDataMutations();

  useEffect(() => {
    if (astrologerId) setValue("astrologerId", astrologerId);

    // Detect timezone offset (in hours)
    const tzOffset = -new Date().getTimezoneOffset() / 60;
    setValue("tzOffset", tzOffset);

    // Detect geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setValue("lat", position.coords.latitude);
          setValue("long", position.coords.longitude);
        },
        (error) => {
          alert("Please allow location access to continue.");
          console.warn("Geolocation error:", error.message);
          setValue("lat", 0);
          setValue("long", 0);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
      setValue("lat", 0);
      setValue("long", 0);
    }
  }, [astrologerId, setValue]);

  return (
    <>
      <HeaderBreadcrumb />
      <div className="container">
        <div className="booking_appo_form_main">
          <form onSubmit={handleSubmit(onSubmit)} className="row">
            {/* Hidden Fields */}
            {["astrologerId", "tzOffset", "lat", "long"].map((field) => (
              <Controller
                key={field}
                name={field}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input type="hidden" value={field.value || ""} {...field} />
                )}
              />
            ))}

            {/* Name */}
            <div className="col-lg-6 col-md-6 mb-4">
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{
                  required: "Name is required",
                  minLength: { value: 2, message: "Minimum 2 characters" },
                }}
                render={({ field }) => (
                  <div>
                    <TextInputField
                    {...field}
                      label="Enter Name"
                      placeholder="Name"
                      icon={<FaUser />}
                      value={field.value}
                      onChange={field.onChange}
                    />
                    {errors.name && (
                      <p className="text-danger small mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            {/* Gender */}
            <div className="col-lg-6 col-md-6 mb-4">
              <Controller
                name="gender"
                control={control}
                defaultValue=""
                rules={{ required: "Gender is required" }}
                render={({ field }) => (
                  <div>
                    <DropdownSelect
                      label="Gender"
                      options={["Select Gender", "Male", "Female", "Other"]}
                      icon={<FiUsers />}
                      value={field.value}
                      onChange={(e) => {
                        // Prevent selecting placeholder as a valid value
                        const value =
                          e.target.value === "Select Gender"
                            ? ""
                            : e.target.value;
                        field.onChange(value);
                      }}
                    />
                    {errors.gender && (
                      <p className="text-danger small mt-1">
                        {errors.gender.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            {/* Birth Date */}
            <div className="col-lg-6 mb-4">
              <Controller
                name="birthDate"
                control={control}
                defaultValue=""
                rules={{ required: "Birth Date is required" }}
                render={({ field }) => (
                  <div>
                    <TextInputField
                      label="Enter Birth Date"
                      type="date"
                      icon={<MdEditCalendar />}
                      value={field.value}
                      onChange={field.onChange}
                    />
                    {errors.birthDate && (
                      <p className="text-danger small mt-1">
                        {errors.birthDate.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            {/* Birth Time */}
            <div className="col-lg-6 mb-4">
              <Controller
                name="birthTime"
                control={control}
                defaultValue=""
                rules={{ required: "Birth Time is required" }}
                render={({ field }) => (
                  <div>
                    <TextInputField
                      label="Enter Time of Birth"
                      type="time"
                      icon={<MdWatchLater />}
                      value={field.value}
                      onChange={field.onChange}
                    />
                    {errors.birthTime && (
                      <p className="text-danger small mt-1">
                        {errors.birthTime.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            {/* Birth Place */}
            <div className="col-lg-6 mb-4">
              <Controller
                name="birthPlace"
                control={control}
                defaultValue=""
                rules={{ required: "Birth Place is required" }}
                render={({ field }) => (
                  <div>
                    <TextInputField
                      label="Enter Place of Birth"
                      placeholder="Udaipur, Rajasthan"
                      icon={<FaLocationDot />}
                      value={field.value}
                      onChange={field.onChange}
                    />
                    {errors.birthPlace && (
                      <p className="text-danger small mt-1">
                        {errors.birthPlace.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            {/* Request Type */}
            <div className="col-lg-6 mb-4">
              <Controller
                name="requestType"
                control={control}
                defaultValue=""
                rules={{ required: "Request Type is required" }}
                render={({ field }) => (
                  <div>
                    <DropdownSelect
                      label="Request Type"
                      options={[
                        "Select Request Type",
                        "chat",
                        "voice",
                        "video",
                      ]}
                      value={field.value}
                      onChange={(e) => {
                        const value =
                          e.target.value === "Select Request Type"
                            ? ""
                            : e.target.value;
                        field.onChange(value);
                      }}
                    />
                    {errors.requestType && (
                      <p className="text-danger small mt-1">
                        {errors.requestType.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

              <CommonButton
                text={isSubmitting ? "Submitting..." : "Start Chat"}
                className="large_btn btn-cmn w-full"
                type="submit"
                disabled={isSubmitting}
              />
          </form>
        </div>
      </div>
    </>
  );
};
