import { useEffect } from "react";
import HeaderBreadcrumb from "../HeaderBreadcrumb";
import { FaUser } from "react-icons/fa";
import { useDataMutations } from "./hook/use-data-mutations";
import { Controller } from "react-hook-form";
import { useParams } from "react-router-dom";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { KundliData } from "./KundliData";

export const ChatBookingForm = () => {
  const { astrologerId } = useParams();
  const { onSubmit, control, handleSubmit, isSubmitting, setValue, errors } =
    useDataMutations();

  useEffect(() => {
    if (astrologerId) setValue("astrologerId", Number(astrologerId));
    const tzOffset = -new Date().getTimezoneOffset() / 60;
    setValue("tzOffset", tzOffset);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setValue("lat", position.coords.latitude);
          setValue("long", position.coords.longitude);
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
  }, [astrologerId, setValue]);

  return (
    <>
      <HeaderBreadcrumb />
      <KundliData />
      <div className="container">
        <div className="booking_appo_form_main">
          <form onSubmit={handleSubmit(onSubmit)} className="row">

            {["astrologerId", "tzOffset", "lat", "long"].map((field) => (
              <Controller
                key={field}
                name={field}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input type="hidden" {...field} value={field.value || ""} />
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

            {/* Birth Date */}
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

            {/* Birth Time */}
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

            {/* Birth Place */}
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

            <div className="col-12 text-center mt-3">
              <button
                type="submit"
                className="ms-2 login_btn rounded-5 log-out"
                disabled={isSubmitting}
                style={{width: "50%"}}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
