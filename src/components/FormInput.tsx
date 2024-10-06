import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  register: UseFormRegisterReturn;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type,
  register,
  error,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-100">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register}
        className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
