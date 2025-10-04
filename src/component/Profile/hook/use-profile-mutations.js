import { toast } from "sonner";
import { apiServiceWithSession } from "../../../services/apiServiceWithSession";
import { useForm } from "react-hook-form";

export const useProfileMutations = (data) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const avatarFile = watch("avatarUrl");

  const avatarSrc = avatarFile
    ? typeof avatarFile === "string"
      ? avatarFile
      : URL.createObjectURL(avatarFile)
    : data.avatarUrl
    ? data.avatarUrl.startsWith("http")
    : `https://astrova-backend-t1zo.onrender.com${data.avatarUrl}`;

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

  return {
    onSubmit,
    control,
    handleSubmit,
    isSubmitting,
    avatarSrc,
    inputClass,
  };
};
