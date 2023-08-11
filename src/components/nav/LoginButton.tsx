'use client';

import { signIn } from 'next-auth/react';
import React from 'react';

const LoginButton = () => {
  return (
    <button
      className="font-bold hover:text-gray-600"
      onClick={() => {
        signIn();
      }}>
      Log In
    </button>
  );
};

export default LoginButton;
