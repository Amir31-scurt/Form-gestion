import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import { FormData } from "./types";

const FormController: React.FC = () => {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    if (step < 3) {
      setStep(step + 1); // Move to next step
    } else {
      alert("Form Submitted Successfully");
      console.log("Final Form Data:", data);
    }
  };

  const nextStep = async () => {
    const result = await trigger(); // Validate the current step
    if (result) {
      setStep(step + 1); // Move to the next step if no errors
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <FormStep1 register={register} errors={errors} />;
      case 2:
        return <FormStep2 register={register} errors={errors} />;
      case 3:
        return <FormStep3 register={register} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderStep()}
      {step < 3 && (
        <button type="button" onClick={nextStep}>
          Next
        </button>
      )}
      {step === 3 && <button type="submit">Submit</button>}
    </form>
  );
};

export default FormController;
