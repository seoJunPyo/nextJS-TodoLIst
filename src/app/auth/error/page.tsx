'use client';

import React from 'react';

const Error = () => {
  return (
    <>
      <h2 className="text-4xl font-bold">Fail to Log In</h2>
      <div className="mt-4 flex space-x-2">
        <button className="w-28 p-2 bg-zinc-900 text-white rounded-lg  transition-all duration-200 hover:bg-zinc-800">
          Join Us!
        </button>
        <button className="w-24 p-2 flex justify-center items-center space-x-2  border-zinc-900 border rounded-lg cursor-pointer transition-all duration-200 hover:bg-zinc-100">
          Retry
        </button>
      </div>
    </>
  );
};

export default Error;
