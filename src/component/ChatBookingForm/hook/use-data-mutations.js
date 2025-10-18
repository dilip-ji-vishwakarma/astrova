import { useForm } from "react-hook-form";
import { apiServiceWithSession } from "../../../services/apiServiceWithSession";
import { toast } from "sonner";

export const useDataMutations = ({setShowModal, setSubmittedData}) => {
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
        "post",
        data
      );

      if (saveResponse.success) {
        toast.success(saveResponse.message);
        setSubmittedData(saveResponse.data);
        setShowModal(true)
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
