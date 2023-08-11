'use client';

import React from 'react';
import { FormInput } from '@/components';
import { logInSchema } from '@/schema/auth';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { signIn } from 'next-auth/react';

const Login = ({ searchParams }: { searchParams: { error?: string } }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: logInSchema,
  });

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    await signIn('credentials', data);
  };

  return (
    <>
      <h2 className="text-4xl font-bold">Log In</h2>

      <form className="flex flex-col space-y-6 mt-8" onSubmit={handleSubmit(onSubmit)}>
        {searchParams.error && (
          <div className="p-3 border-2 border-red-200 bg-red-400 rounded-lg text-white font-bold text-xl text-center">
            Fail To Login
          </div>
        )}
        <FormInput
          type="text"
          placeholder="email"
          fieldName="email"
          label="Email Address"
          register={register}
          errors={errors}
          withAsterisk
        />
        <FormInput
          type="password"
          placeholder="password"
          fieldName="password"
          label="Password"
          register={register}
          errors={errors}
          withAsterisk
        />

        <button
          type="submit"
          className="bg-zinc-900 text-white font-bold p-2 rounded-lg transition-all ease-in-out hover:bg-zinc-800 disabled:bg-zinc-300">
          Log In
        </button>
      </form>
    </>
  );
};

export default Login;
