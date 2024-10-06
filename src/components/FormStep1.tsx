import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import FormInput from "./FormInput";
import { FormData } from "./types";

interface FormStep1Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const FormStep1: React.FC<FormStep1Props> = ({ register, errors }) => {
  return (
    <>
      <FormInput
        label="Child's First Name"
        name="firstName"
        type="text"
        register={register("firstName", { required: "First name is required" })}
        error={errors.firstName?.message}
      />
      <FormInput
        label="Child's Age"
        name="age"
        type="number"
        register={register("age", { required: "Age is required", min: 1 })}
        error={errors.age?.message}
      />
    </>
  );
};

export default FormStep1;
