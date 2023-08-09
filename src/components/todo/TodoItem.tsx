'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { BsCheck, BsDot } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin2Fill } from 'react-icons/ri';

const CheckBox = ({ checked }: { checked: boolean }) => {
  return (
    <label className="flex justify-center items-center hover:bg-zinc-100 rounded-lg cursor-pointer">
      <input type="checkbox" className="hidden" />
      <div className={`text-2xl  ${checked ? 'text-zinc-900' : 'text-zinc-300'}`}>
        <BsCheck />
      </div>
    </label>
  );
};

const TodoItem = ({ id, completed, title, decs, createAt }: Todo) => {
  const [hover, setHover] = React.useState(false);
  const router = useRouter();

  return (
    <li
      className={`flex justify-between items-center p-4  border-zinc-900 rounded-lg ${
        completed ? 'border-2' : 'border'
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div>
        <div className="flex items-center space-x-2">
          <CheckBox checked={completed} />

          <p className="flex items-center space-x-1">
            <span className="font-bold text-lg">{title}</span>
            <BsDot />
            <span className="text-xs">{createAt.toDateString()}</span>
          </p>
        </div>
        {decs && <p className="mt-2">{decs}</p>}
      </div>

      <div className={`flex items-center space-x-2 ${hover ? 'opacity-1' : 'opacity-0'} transition-all ease-linear`}>
        <button className="p-3 hover:bg-zinc-100 rounded-lg" onClick={() => router.push(`/todos/edit/${id}`)}>
          <FiEdit />
        </button>
        <button className="p-3 hover:bg-zinc-100 rounded-lg">
          <RiDeleteBin2Fill />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
