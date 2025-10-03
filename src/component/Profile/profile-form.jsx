import { MultiSelect } from "primereact/multiselect";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { apiServiceWithSession } from "../../services/apiServiceWithSession";
import { toast } from "sonner";

const languageOptions = [
  { value: "English", label: "English" },
  { value: "Hindi", label: "Hindi" },
  { value: "Spanish", label: "Spanish" },
  { value: "French", label: "French" },
  { value: "German", label: "German" },
  { value: "Chinese", label: "Chinese" },
  { value: "Japanese", label: "Japanese" },
  { value: "Arabic", label: "Arabic" },
  { value: "Russian", label: "Russian" },
  { value: "Portuguese", label: "Portuguese" },
  { value: "Bengali", label: "Bengali" },
  { value: "Punjabi", label: "Punjabi" },
  { value: "Urdu", label: "Urdu" },
  { value: "Tamil", label: "Tamil" },
  { value: "Telugu", label: "Telugu" },
  { value: "Marathi", label: "Marathi" },
  { value: "Korean", label: "Korean" },
  { value: "Italian", label: "Italian" },
  { value: "Dutch", label: "Dutch" },
  { value: "Thai", label: "Thai" },
  { value: "Vietnamese", label: "Vietnamese" },
  { value: "Turkish", label: "Turkish" },
  { value: "Persian", label: "Persian" },
  { value: "Swahili", label: "Swahili" },
  { value: "Malay", label: "Malay" },
  { value: "Indonesian", label: "Indonesian" },
  { value: "Greek", label: "Greek" },
  { value: "Hebrew", label: "Hebrew" },
  { value: "Polish", label: "Polish" },
  { value: "Ukrainian", label: "Ukrainian" },
  { value: "Romanian", label: "Romanian" },
  { value: "Hungarian", label: "Hungarian" },
  { value: "Czech", label: "Czech" },
  { value: "Norwegian", label: "Norwegian" },
  { value: "Swedish", label: "Swedish" },
  { value: "Danish", label: "Danish" },
  { value: "Finnish", label: "Finnish" },
  { value: "Icelandic", label: "Icelandic" },
  { value: "Bulgarian", label: "Bulgarian" },
  { value: "Serbian", label: "Serbian" },
  { value: "Croatian", label: "Croatian" },
  { value: "Slovak", label: "Slovak" },
  { value: "Slovenian", label: "Slovenian" },
  { value: "Latvian", label: "Latvian" },
  { value: "Lithuanian", label: "Lithuanian" },
  { value: "Estonian", label: "Estonian" },
];

export const ProfileForm = ({ data }) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const avatarFile = watch("avatarUrl");

  const avatarSrc =
  avatarFile
    ? typeof avatarFile === "string"
      ? avatarFile
      : URL.createObjectURL(avatarFile)
    : data.avatarUrl
    ? data.avatarUrl.startsWith("http")
      : `https://astrova-backend-t1zo.onrender.com${data.avatarUrl}`

  const onSubmit = async (formdata) => {
    try {
      if (formdata.avatarUrl instanceof File) {
        const avatarForm = new FormData();
        avatarForm.append("avatar", formdata.avatarUrl);

        const avatarResponse = await apiServiceWithSession(
          "/me/avatar",
          "put",
          avatarForm
        );

        if (avatarResponse.success && avatarResponse.data?.url) {
          formdata.avatarUrl = avatarResponse.data.url;
        } else {
          toast.error(avatarResponse.message || "Failed to upload avatar");
          return;
        }
      }
      const response = await apiServiceWithSession("/me", "put", formdata);

      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      toast.error(err.message || "An error occurred");
    }
  };

  const inputClass = (fieldName) =>
    `input-design form-control w-100 rounded border border-1 ${
      errors[fieldName] ? "border-danger" : "border-warning"
    }`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mb-5 mt-5">
      {/* Phone */}
      <div className="login-form mb-4">
        <label>Enter your phone number</label>
        <Controller
          name="phone"
          control={control}
          defaultValue={data.phone}
          rules={{ required: "Mobile No. is required", minLength: 10 }}
          render={({ field }) => (
            <PhoneInput
              {...field}
              country={"in"}
              onlyCountries={["in", "us", "gb"]}
              placeholder="Enter phone number"
              disabled
              inputProps={{
                name: "Enter your phone number",
                required: true,
                autoFocus: true,
              }}
            />
          )}
        />
      </div>

      {/* Email */}
      <div className="login-form mb-4">
        <label>Enter your Email</label>
        <Controller
          name="email"
          control={control}
          defaultValue={data.email || ""}
          rules={{ required: "Email is required" }}
          render={({ field: { onChange, value } }) => (
            <input
              type="email"
              className={inputClass("email")}
              placeholder="Email"
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>

      {/* First Name */}
      <div className="login-form mb-4">
        <label>Enter your First Name</label>
        <Controller
          name="firstName"
          control={control}
          defaultValue={data.firstName || ""}
          rules={{ required: "Name is required", minLength: 2 }}
          render={({ field: { onChange, value } }) => (
            <input
              type="text"
              className={inputClass("firstName")}
              placeholder="First Name"
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>

      <div className="login-form mb-4">
        <label>Enter your Last Name</label>
        <Controller
          name="lastName"
          control={control}
          defaultValue={data.lastName || ""}
          rules={{ required: "Name is required", minLength: 2 }}
          render={({ field: { onChange, value } }) => (
            <input
              type="text"
              className={inputClass("lastName")}
              placeholder="Last Name"
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>

      <div className="login-form mb-4">
        <label>Select Gender</label>
        <Controller
          name="gender"
          control={control}
          defaultValue={data.gender || ""}
          rules={{ required: "Gender is required" }}
          render={({ field: { onChange, value } }) => (
            <select
              className={inputClass("gender")}
              onChange={onChange}
              value={value}
            >
              <option value="">--- Select Gender ---</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          )}
        />
      </div>

      <div className="login-form mb-4">
        <label>Date of Birth</label>
        <Controller
          name="dateOfBirth"
          control={control}
          defaultValue={data.dateOfBirth ? data.dateOfBirth.split("T")[0] : ""}
          rules={{ required: "Date of Birth is required" }}
          render={({ field: { onChange, value } }) => (
            <input
              type="date"
              className={inputClass("dateOfBirth")}
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>

      <div className="login-form mb-4">
        <label>Time of Birth</label>
        <Controller
          name="timeOfBirth"
          control={control}
          defaultValue={data.timeOfBirth}
          rules={{ required: "Time of Birth is required" }}
          render={({ field: { onChange, value } }) => (
            <input
              type="time"
              className={inputClass("timeOfBirth")}
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>
      <div className="login-form mb-4">
        <label>Place of Birth</label>
        <Controller
          name="placeOfBirth"
          control={control}
          defaultValue={data.placeOfBirth || ""}
          rules={{ required: "Place of Birth is required" }}
          render={({ field: { onChange, value } }) => (
            <input
              type="text"
              className={inputClass("placeOfBirth")}
              placeholder="Enter place of birth"
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>

      <div className="login-form mb-4">
        <label>Select Languages</label>
        <Controller
          name="languages"
          control={control}
          defaultValue={data.languages || []}
          rules={{ required: "Please select at least one language" }}
          render={({ field: { onChange, value } }) => (
            <MultiSelect
              value={value}
              onChange={(e) => onChange(e.value)}
              options={languageOptions}
              optionLabel="label"
              optionValue="value"
              placeholder="Select Languages"
              maxSelectedLabels={3}
              className="multiselect-design"
            />
          )}
        />
      </div>

      {/* Current Address */}
      <div className="login-form mb-4">
        <label>Current Address</label>
        <Controller
          name="currentAddress"
          control={control}
          defaultValue={data.currentAddress || ""}
          rules={{ required: "Current Address is required" }}
          render={({ field: { onChange, value } }) => (
            <input
              type="text"
              className={inputClass("currentAddress")}
              placeholder="Enter your current address"
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>

      {/* City */}
      <div className="login-form mb-4">
        <label>City</label>
        <Controller
          name="city"
          control={control}
          defaultValue={data.city || ""}
          rules={{ required: "City is required" }}
          render={({ field: { onChange, value } }) => (
            <input
              type="text"
              className={inputClass("city")}
              placeholder="Enter your city"
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>

      {/* State */}
      <div className="login-form mb-4">
        <label>State</label>
        <Controller
          name="state"
          control={control}
          defaultValue={data.state || ""}
          rules={{ required: "State is required" }}
          render={({ field: { onChange, value } }) => (
            <input
              type="text"
              className={inputClass("state")}
              placeholder="Enter your state"
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>

      {/* Country */}
      <div className="login-form mb-4">
        <label>Country</label>
        <Controller
          name="country"
          control={control}
          defaultValue={data.country || ""}
          rules={{ required: "Country is required" }}
          render={({ field: { onChange, value } }) => (
            <input
              type="text"
              className={inputClass("country")}
              placeholder="Enter your country"
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>

      {/* Pincode */}
      <div className="login-form mb-4">
        <label>Pincode</label>
        <Controller
          name="pincode"
          control={control}
          defaultValue={data.pincode || ""}
          rules={{
            required: "Pincode is required",
            pattern: { value: /^[0-9]{6}$/, message: "Invalid Pincode" },
          }}
          render={({ field: { onChange, value } }) => (
            <input
              type="text"
              className={inputClass("pincode")}
              placeholder="Enter your pincode"
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>

      <div className="login-form mb-4">
        <label>Refer Code</label>
        <Controller
          name="referCode"
          control={control}
          defaultValue={data.referCode || ""}
          rules={{ required: "referCode is required" }}
          render={({ field: { onChange, value } }) => (
            <input
              type="text"
              className={inputClass("referCode")}
              placeholder="Enter your referCode"
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>

      {/* <div className="login-form mb-4">
        <label>Wallet Balance</label>
        <Controller
          name="walletBalance"
          control={control}
          defaultValue={data.walletBalance}
          rules={{
            required: "Wallet balance is required",
            min: { value: 0, message: "Wallet balance cannot be negative" },
          }}
          render={({ field: { onChange, value } }) => (
            <input
              type="number"
              className={inputClass("walletBalance")}
              placeholder="Enter your wallet balance"
              value={value}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                if (val >= 0 || e.target.value === "") {
                  onChange(e.target.value);
                }
              }}
            />
          )}
        />
      </div> */}

      <div className="login-form mb-4">
        <label>Image</label>
        <Controller
          name="avatarUrl"
          control={control}
          defaultValue={data.avatarUrl || null}
          render={({ field: { onChange } }) => (
            <>
              <input
                type="file"
                accept="image/*"
                className="form-control bg-transparent text-body placeholder-muted-foreground border border-input rounded-md h-9 px-3 py-1 text-base shadow-sm transition focus:outline-none focus:ring-3 focus:ring-primary focus:ring-opacity-50 disabled:pointer-events-none disabled:opacity-50 dark:bg-input-30 dark:text-body dark:disabled:opacity-50 dark:border-input"
                onChange={(e) => onChange(e.target.files[0])}
              />
              <div className="mt-2">
  <img
    src={avatarSrc}
    alt="Preview"
    style={{
      width: "150px",
      height: "150px",
      objectFit: "cover",
      borderRadius: "8px",
    }}
  />
</div>

            </>
          )}
        />
      </div>

      <div className="login_popup_login_btn">
        <button type="submit">
          {isSubmitting ? (
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            <span>Update</span>
          )}
        </button>
      </div>
    </form>
  );
};
