'use client';

import React from 'react';
import { BsCheckAll } from 'react-icons/bs';

const CheckBox = ({ checked, onChange }: { checked: boolean; onChange: (e: React.ChangeEvent) => void }) => {
  return (
    <label className="flex justify-center items-center p-1 cursor-pointer hover:bg-zinc-100 rounded-lg">
      <input type="checkbox" checked={checked} onChange={onChange} className="hidden" />
      <span className={`text-3xl ${checked ? 'text-zinc-900' : 'text-zinc-300'}`}>
        <BsCheckAll />
      </span>
    </label>
  );
};

export default CheckBox;
