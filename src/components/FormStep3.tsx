import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import FormInput from "./FormInput";
import { FormData } from "./types";

interface FormStep3Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const FormStep3: React.FC<FormStep3Props> = ({ register, errors }) => {
  return (
    <>
      <FormInput
        label="Emergency Contact"
        name="emergencyContact"
        type="tel"
        register={register("emergencyContact", {
          required: "Emergency contact is required",
          pattern: { value: /^\d+$/, message: "Invalid contact number" },
        })}
        error={errors.emergencyContact?.message}
      />
    </>
  );
};

export default FormStep3;
