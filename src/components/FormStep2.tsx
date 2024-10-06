import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import FormInput from "./FormInput";
import { FormData } from "./types";

interface FormStep2Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const FormStep2: React.FC<FormStep2Props> = ({ register, errors }) => {
  return (
    <>
      <FormInput
        label="Parent's Name"
        name="parentName"
        type="text"
        register={register("parentName", {
          required: "Parent's name is required",
        })}
        error={errors.parentName?.message}
      />
      <FormInput
        label="Contact Number"
        name="contactNumber"
        type="tel"
        register={register("contactNumber", {
          required: "Contact number is required",
          pattern: { value: /^\d+$/, message: "Invalid contact number" },
        })}
        error={errors.contactNumber?.message}
      />
    </>
  );
};

export default FormStep2;
