import { useForm } from "react-hook-form";
import { apiServiceWithSession } from "../../../services/apiServiceWithSession";
import { toast } from "sonner";

export const useDataMutations = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const saveResponse = await apiServiceWithSession(
        "/user/queue",
        "POST",
        data
      );

      if (saveResponse.success) {
        toast.success(saveResponse.message);
        window.location.reload();
      } else {
        toast.error(saveResponse.message);
      }
    } catch (err) {
      console.error("Error saving payment:", err);
      toast.error("Failed to process payment. Please contact support.");
    }
  };

  return { onSubmit, control, handleSubmit, isSubmitting, errors, setValue };
};
