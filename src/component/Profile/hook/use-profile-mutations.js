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
      const profileData = { ...formdata };
      delete profileData.avatarUrl; 

      const profileResponse = await apiServiceWithSession(
        user_profile,
        "put",
        profileData
      );

      if (!profileResponse.success) {
        toast.error(profileResponse.message || "Failed to update profile");
        return;
      }

      toast.success("Profile updated successfully");
      if (formdata.avatarUrl instanceof File) {
        const avatarForm = new FormData();
        avatarForm.append("file", formdata.avatarUrl);

        const avatarResponse = await apiServiceWithSession(
          '/me/avatar',
          "put",
          avatarForm
        );

        if (avatarResponse.success && avatarResponse.data?.url) {
          // Step 3️⃣ - Update profile with new image URL
          const updateAvatarResponse = await apiServiceWithSession(
            user_profile,
            "put",
            { avatarUrl: avatarResponse.data.url }
          );

          if (updateAvatarResponse.success) {
            toast.success("Profile image updated successfully");
          } else {
            toast.error(updateAvatarResponse.message || "Failed to update avatar URL");
          }
        } else {
          toast.error(avatarResponse.message || "Failed to upload image");
        }
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
