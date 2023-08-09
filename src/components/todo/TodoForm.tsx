'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const TodoForm = ({ title, decs }: Partial<Todo>) => {
  const router = useRouter();

  return (
    <>
      <span className="inline-block text-sm p-2 font-bold">Title</span>
      <input
        type="text"
        defaultValue={title}
        placeholder="Title"
        className="font-bold text-3xl w-full mb-4 border-2 border-zinc-900 rounded-lg p-2"
      />
      <span className="inline-block text-sm font-bold p-2">Description</span>
      <textarea
        defaultValue={decs}
        placeholder="Description"
        className="w-full border-2 border-zinc-900 rounded-lg p-2 h-32"
      />

      <div className="flex justify-end items-center space-x-2 mt-5">
        <button
          className="px-4 py-2 rounded-lg border font-bold border-zinc-900  hover:bg-zinc-200"
          onClick={() => router.back()}>
          Cancel
        </button>
        <button className="px-4 py-2 rounded-lg font-bold bg-zinc-900 text-white hover:bg-zinc-800">Confirm</button>
      </div>
    </>
  );
};

export default TodoForm;
