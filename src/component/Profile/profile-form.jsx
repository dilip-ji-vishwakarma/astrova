import { MultiSelect } from "primereact/multiselect";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { languageOptions } from "../../services/option";
import { useProfileMutations } from "./hook/use-profile-mutations";

export const ProfileForm = ({ data }) => {
  const {
    onSubmit,
    control,
    handleSubmit,
    isSubmitting,
    avatarSrc,
    inputClass,
  } = useProfileMutations(data);

  return (
    <>
      <div className="d-flex align-items-center justify-content-between container wallet-balance-card flex items-center justify-between p-4 rounded-2xl shadow-md bg-gradient-to-r from-teal-400 to-blue-500 text-white mb-6">
        <div className="flex items-center gap-3">
            <p className="text-sm opacity-80">Wallet Balance</p>
            <h2 className="text-2xl font-bold">
              ₹{data.walletBalance || "0.00"}
            </h2>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg bg-white text-indigo-600 font-semibold shadow-sm hover:bg-gray-100">
            Add Money
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="container mb-5 mt-5">
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
            defaultValue={
              data.dateOfBirth ? data.dateOfBirth.split("T")[0] : ""
            }
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
    </>
  );
};
