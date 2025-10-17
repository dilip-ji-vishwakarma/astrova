import { useForm } from "react-hook-form";

export const useDataMutations = () => {
   const {
      control,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm();


    const onSubmit = async () => {

    }

  return {onSubmit, control, handleSubmit, isSubmitting, errors}
}

