'use client';

import React from 'react';
import { AllCheckBox } from '.';

const TodoInput = () => {
  return (
    <div className="flex space-x-2 p-3 border-2  border-zinc-900 rounded-lg">
      <div className="px-3 ">
        <AllCheckBox checked={false} onChange={() => {}} />
      </div>
      <input type="text" className="w-full focus:outline-none" />
      <button type="submit" className="pl-5 pr-3 border-l-2 border-zinc-900 font-bold hover:text-zinc-600">
        Add
      </button>
    </div>
  );
};

export default TodoInput;
