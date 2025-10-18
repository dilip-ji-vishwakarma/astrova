import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Controller } from "react-hook-form";
import InputField from "../ChatBookingForm/InputField";
import SelectField from "../ChatBookingForm/SelectField";
import { useDataMutations } from "./hook/use-data-mutations";

const KundaliForm = () => {
  const { onSubmit, control, handleSubmit, isSubmitting, setValue, errors } =
    useDataMutations();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    // Parse userId as number
    let userId = 0;
    if (userInfo) {
      try {
        const parsed = JSON.parse(userInfo);
        userId = typeof parsed === "object" && parsed.id ? Number(parsed.id) : Number(parsed);
      } catch {
        userId = Number(userInfo);
      }
    }

    setValue("userId", userId);

    // tzOffset in integer minutes
    const tzOffset = -new Date().getTimezoneOffset(); 
    setValue("tzOffset", tzOffset);

    // Geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setValue("lat", pos.coords.latitude);
          setValue("long", pos.coords.longitude);
        },
        () => {
          alert("Please allow location access to continue.");
          setValue("lat", 0);
          setValue("long", 0);
        }
      );
    } else {
      setValue("lat", 0);
      setValue("long", 0);
    }
  }, [setValue]);

  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit(onSubmit)} className="row">

        {/* Hidden Fields */}
        {["userId", "tzOffset", "lat", "long"].map((field) => (
          <Controller
            key={field}
            name={field}
            control={control}
            defaultValue={0}
            render={({ field }) => (
              <input type="hidden" {...field} value={field.value || 0} />
            )}
          />
        ))}

        {/* Name */}
        <div className="col-lg-6 mb-4">
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: "Name is required" }}
            render={({ field: { onChange, value } }) => (
              <InputField
                label="Name"
                placeholder="Enter your name"
                icon={<FaUser />}
                value={value}
                onChange={onChange}
                error={errors.name?.message}
              />
            )}
          />
        </div>

        {/* Gender */}
        <div className="col-lg-6 mb-4">
          <Controller
            name="gender"
            control={control}
            defaultValue=""
            rules={{ required: "Gender is required" }}
            render={({ field: { onChange, value } }) => (
              <SelectField
                label="Gender"
                value={value}
                onChange={onChange}
                options={["male", "female", "other"]}
                error={errors.gender?.message}
              />
            )}
          />
        </div>

        {/* DOB */}
        <div className="col-lg-6 mb-4">
          <Controller
            name="dob"
            control={control}
            defaultValue=""
            rules={{ required: "Birth Date is required" }}
            render={({ field: { onChange, value } }) => (
              <InputField
                label="Birth Date"
                type="date"
                value={value}
                onChange={onChange}
                error={errors.dob?.message}
              />
            )}
          />
        </div>

        {/* TOB */}
        <div className="col-lg-6 mb-4">
          <Controller
            name="tob"
            control={control}
            defaultValue=""
            rules={{ required: "Birth Time is required" }}
            render={({ field: { onChange, value } }) => (
              <InputField
                label="Birth Time"
                type="time"
                value={value}
                onChange={onChange}
                error={errors.tob?.message}
              />
            )}
          />
        </div>

        {/* POB */}
        <div className="col-lg-6 mb-4">
          <Controller
            name="pob"
            control={control}
            defaultValue=""
            rules={{ required: "Birth Place is required" }}
            render={({ field: { onChange, value } }) => (
              <InputField
                label="Birth Place"
                placeholder="Udaipur, Rajasthan"
                value={value}
                onChange={onChange}
                error={errors.pob?.message}
              />
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
            render={({ field: { onChange, value } }) => (
              <SelectField
                label="Request Type"
                value={value}
                onChange={onChange}
                options={["chat", "voice", "video"]}
                error={errors.requestType?.message}
              />
            )}
          />
        </div>

        {/* Submit */}
        <div className="col-12 text-center mt-3">
          <button
            type="submit"
            className="ms-2 login_btn rounded-5 log-out"
            disabled={isSubmitting}
            style={{ width: "50%" }}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default KundaliForm;
