import { useForm } from "react-hook-form";
import { apiServiceWithSession } from "../../../services/apiServiceWithSession";
import { toast } from "sonner";

export const useKundliMatching = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Convert date/time to ISO for both male and female
      ["male", "female"].forEach((key) => {
        const person = data[key];
        if (person.dob && person.tob) {
          person.dob = new Date(`${person.dob}T${person.tob}`).toISOString();
        }

        person.userId = Number(person.userId || 0);
        person.tzOffset = Number(person.tzOffset || 0);
        person.lat = Number(person.lat || 0);
        person.long = Number(person.long || 0);
      });

      const saveResponse = await apiServiceWithSession(
        "/match/report",
        "post",
        data // { male: {...}, female: {...} }
      );

      if (saveResponse.success) {
        toast.success(saveResponse.message || "Kundli match saved!");
        reset();
      } else {
        toast.error(saveResponse.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Error saving kundli:", err);
      toast.error("Failed to process request. Please contact support.");
    }
  };

  return { onSubmit, control, handleSubmit, isSubmitting, errors, setValue };
};
