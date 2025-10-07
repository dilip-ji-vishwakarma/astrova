import { toast } from "sonner";
import { apiServiceWithSession } from "../../../services/apiServiceWithSession";
import { useForm } from "react-hook-form";
import { user_profile } from "../../../utils/api-endpoints";

export const useProfileMutations = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();


  const onSubmit = async (formdata) => {
    try {
      if (formdata.avatarUrl instanceof File) {
        const avatarForm = new FormData();
        avatarForm.append("avatar", formdata.avatarUrl);

        const avatarResponse = await apiServiceWithSession(
          `${user_profile}/avatar`,
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
      const response = await apiServiceWithSession(user_profile, "put", formdata);

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

  return {
    onSubmit,
    control,
    handleSubmit,
    isSubmitting,
    inputClass,
  };
};
