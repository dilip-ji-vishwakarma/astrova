import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Controller } from "react-hook-form";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { useDataMutations } from "./hook/use-data-mutations";
import { FaUser } from "react-icons/fa";
import { useSocket } from "./hook/useSocket";


export const ChatBookingForm = ({ selectedKundli }) => {
  const { astrologerId } = useParams();
  const location = useLocation();
  const { name } = location.state || {};
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [timer, setTimer] = useState(120); // 2 minutes in seconds
  const { onSubmit, control, handleSubmit, isSubmitting, setValue, errors } =
    useDataMutations({ setShowModal, setSubmittedData });
 const userInfo = localStorage.getItem("userInfo");
 const navigate = useNavigate();
      const { logs } = useSocket({
    queueId: submittedData?.queue?.id,
    userId: userInfo,
    autoConnect: showModal,
  });

 

  const formatForInputDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

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

  useEffect(() => {
    if (selectedKundli) {
      Object.keys(selectedKundli).forEach((key) => {
        let value = selectedKundli[key];
        if (key === "dob") value = formatForInputDate(value);
        setValue(key, value);
      });
    }
  }, [selectedKundli, setValue]);

  // Timer logic
  useEffect(() => {
    let interval;
    if (showModal && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      navigate(`/astrologer/${astrologerId}`);
    }
    return () => clearInterval(interval);
  },);

  const formatTimer = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <>
      <div className="container my-4">
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
      </div>

      {showModal && (
        <div className="login_popup_overlay">
          <div className="login_popup_box animate__animated animate__fadeInDown">
            <div className="popup_header text-center">
              <h5>You're all set</h5>
            </div>
            <div className="popup_body p-2 text-center">
              <input
                type="hidden"
                id="queueId"
                value={submittedData.queue.id}
                disabled
              />
              <input type="hidden" id="userId" value={userInfo} disabled />
              <p>
                You will connect with {name} after the astrologer accepts your
                request
              </p>
              <h6>Closing in: {formatTimer(timer)}</h6>
              <pre style={{ textAlign: "left", maxHeight: "200px", overflowY: "auto" }}>
                {logs.join("\n")}
              </pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
