'use client';

import { signOut } from 'next-auth/react';
import React from 'react';

const LoginButton = () => {
  return (
    <button
      className="font-bold hover:text-gray-600"
      onClick={() => {
        signOut({ callbackUrl: '/' });
      }}>
      Log Out
    </button>
  );
};

export default LoginButton;
