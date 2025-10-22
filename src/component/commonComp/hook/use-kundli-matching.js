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
       if (data.dob && data.tob) {
         const dateTime = new Date(`${data.dob}T${data.tob}`);
         data.dob = dateTime.toISOString(); 
       }
 
       data.userId = Number(data.userId || 0);
       data.tzOffset = Number(data.tzOffset || 0); 
       data.lat = Number(data.lat || 0);
       data.long = Number(data.long || 0);
 
       const saveResponse = await apiServiceWithSession(
         "/kundli/create",
         "post",
         data
       );
 
       if (saveResponse.success) {
         toast.success(saveResponse.message);
         reset();
       } else {
         toast.error(saveResponse.message);
       }
     } catch (err) {
       console.error("Error saving kundli:", err);
       toast.error("Failed to process request. Please contact support.");
     }
   };
 
   return { onSubmit, control, handleSubmit, isSubmitting, errors, setValue };
}
