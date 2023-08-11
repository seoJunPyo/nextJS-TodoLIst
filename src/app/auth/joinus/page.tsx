'use client';

import React from 'react';
import { FormInput } from '@/components';
import { nextFetch } from '@/util/nextFetch';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { joinUsSchema } from '@/schema/auth';

const JoinUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: joinUsSchema,
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    try {
      await nextFetch.post('/register', data);

      router.push('/');
    } catch (e) {
      alert('ddd');
      reset();
    }
  };

  return (
    <>
      <h2 className="text-4xl font-bold">Create Your Account</h2>
      <form
        className="flex flex-col space-y-6 mt-8"
        onSubmit={handleSubmit(onSubmit, e => {
          console.log(e);
        })}>
        <FormInput
          type="text"
          placeholder="email"
          fieldName="email"
          label="Email Address"
          register={register}
          errors={errors}
          withAsterisk
        />

        <div className="flex justify-between space-x-6">
          <FormInput
            type="text"
            fieldName="firstName"
            placeholder="first name"
            label="First Name"
            register={register}
            errors={errors}
            withAsterisk
          />
          <FormInput
            type="text"
            fieldName="lastName"
            placeholder="last name"
            label="Last Name"
            register={register}
            errors={errors}
            withAsterisk
          />
        </div>

        <FormInput
          type="password"
          fieldName="password"
          placeholder="password"
          label="Password"
          register={register}
          errors={errors}
          withAsterisk
        />
        <FormInput
          type="password"
          fieldName="confirmPassword"
          placeholder="confirm-password"
          label="Confirm Password"
          register={register}
          errors={errors}
          withAsterisk
        />

        <button
          type="submit"
          className="bg-zinc-900 text-white font-bold p-2 rounded-lg transition-all ease-in-out hover:bg-zinc-800 disabled:bg-zinc-300">
          Join Us!
        </button>
      </form>
    </>
  );
};

export default JoinUs;
