import React from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';

const getErrorMessage = (name: string, errors: FieldErrors<FieldValues>) => {
  const error = errors?.[name];

  return error && typeof error.message === 'string' ? error.message : '';
};

const FormInput = ({ type, placeholder, fieldName, label, register, errors, withAsterisk }: InputProps) => {
  const errorMessage = getErrorMessage(fieldName, errors);

  return (
    <div className="flex flex-col w-full ">
      <div className="flex px-1 items-center space-x-1">
        {withAsterisk && <span className="text-red-600">*</span>}
        <span className="font-bold text-sm">{label}</span>
      </div>
      <input
        {...register(fieldName)}
        type={type}
        placeholder={placeholder}
        className={`p-2 border-2 rounded-lg ${
          !errorMessage ? 'border-zinc-900' : 'border-red-500 focus:outline-none'
        } `}
      />
      {errorMessage && <span className="mt-1 px-1 font-bold text-red-500 text-sm">{errorMessage}</span>}
    </div>
  );
};

FormInput.displayName = 'FormInput';
export default FormInput;
