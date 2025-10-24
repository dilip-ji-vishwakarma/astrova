import { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Controller } from "react-hook-form";
import InputField from "../ChatBookingForm/InputField";
import SelectField from "../ChatBookingForm/SelectField";
import { useKundliMatching } from "./hook/use-kundli-matching";

export const KundliMatching = () => {
  const { onSubmit, control, handleSubmit, isSubmitting, setValue, errors } =
    useKundliMatching();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    let userId = 0;
    if (userInfo) {
      try {
        const parsed = JSON.parse(userInfo);
        userId =
          typeof parsed === "object" && parsed.id
            ? Number(parsed.id)
            : Number(parsed);
      } catch {
        userId = Number(userInfo);
      }
    }

    const tzOffset = -new Date().getTimezoneOffset();

    // Pre-fill hidden values for both male & female
    ["male", "female"].forEach((person) => {
      setValue(`${person}.userId`, userId);
      setValue(`${person}.tzOffset`, tzOffset);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setValue(`${person}.lat`, pos.coords.latitude);
            setValue(`${person}.long`, pos.coords.longitude);
          },
          () => {
            alert("Please allow location access to continue.");
            setValue(`${person}.lat`, 0);
            setValue(`${person}.long`, 0);
          }
        );
      } else {
        setValue(`${person}.lat`, 0);
        setValue(`${person}.long`, 0);
      }
    });
  }, [setValue]);

  // Helper component to avoid repetition
  const PersonForm = ({ title, prefix }) => (
    <div className="my-4">
      <h3 className="mb-3">{title}</h3>
      <div className="row">
        {["userId", "tzOffset", "lat", "long"].map((field) => (
          <Controller
            key={`${prefix}.${field}`}
            name={`${prefix}.${field}`}
            control={control}
            defaultValue={0}
            render={({ field }) => (
              <input type="hidden" {...field} value={field.value || 0} />
            )}
          />
        ))}

        <div className="col-lg-6 mb-4">
          <Controller
            name={`${prefix}.name`}
            control={control}
            defaultValue=""
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <InputField
                label="Name"
                placeholder="Enter name"
                icon={<FaUser />}
                {...field}
                error={errors?.[prefix]?.name?.message}
              />
            )}
          />
        </div>

        <div className="col-lg-6 mb-4">
          <Controller
            name={`${prefix}.gender`}
            control={control}
            defaultValue=""
            rules={{ required: "Gender is required" }}
            render={({ field }) => (
              <SelectField
                label="Gender"
                options={["male", "female", "other"]}
                {...field}
                error={errors?.[prefix]?.gender?.message}
              />
            )}
          />
        </div>

        <div className="col-lg-6 mb-4">
          <Controller
            name={`${prefix}.dob`}
            control={control}
            defaultValue=""
            rules={{ required: "Birth Date is required" }}
            render={({ field }) => (
              <InputField
                label="Birth Date"
                type="date"
                {...field}
                error={errors?.[prefix]?.dob?.message}
              />
            )}
          />
        </div>

        <div className="col-lg-6 mb-4">
          <Controller
            name={`${prefix}.tob`}
            control={control}
            defaultValue=""
            rules={{ required: "Birth Time is required" }}
            render={({ field }) => (
              <InputField
                label="Birth Time"
                type="time"
                {...field}
                error={errors?.[prefix]?.tob?.message}
              />
            )}
          />
        </div>

        <div className="col-lg-6 mb-4">
          <Controller
            name={`${prefix}.pob`}
            control={control}
            defaultValue=""
            rules={{ required: "Birth Place is required" }}
            render={({ field }) => (
              <InputField
                label="Birth Place"
                placeholder="Udaipur, Rajasthan"
                {...field}
                error={errors?.[prefix]?.pob?.message}
              />
            )}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit(onSubmit)} className="row">
        <PersonForm title="Boy's Details" prefix="male" />
        <PersonForm title="Girl's Details" prefix="female" />

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
