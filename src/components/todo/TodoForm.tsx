'use client';

import { nextFetch } from '@/util/nextFetch';
import { useRouter } from 'next/navigation';
import React from 'react';

const TodoForm = ({ _id, title, desc, method }: Partial<Todo> & { method: 'POST' | 'PATCH' }) => {
  const titleRef = React.useRef<HTMLInputElement>(null);
  const descRef = React.useRef<HTMLTextAreaElement>(null);

  const router = useRouter();

  const handleClickConfirm = async () => {
    const path = `/todos/${_id ?? ''}`;
    const body = {
      title: titleRef.current?.value ?? '',
      desc: descRef.current?.value ?? '',
    };

    if (method === 'POST') await nextFetch.post(path, body);
    if (method === 'PATCH') await nextFetch.patch(path, body);

    router.back();
    router.refresh();
  };

  return (
    <>
      <span className="inline-block text-sm p-2 font-bold">Title</span>
      <input
        type="text"
        ref={titleRef}
        defaultValue={title}
        placeholder="Title"
        className="font-bold text-3xl w-full mb-4 border-2 border-zinc-900 rounded-lg p-2"
      />
      <span className="inline-block text-sm font-bold p-2">Description</span>
      <textarea
        ref={descRef}
        defaultValue={desc}
        placeholder="Description"
        className="w-full border-2 border-zinc-900 rounded-lg p-2 h-32"
      />

      <div className="flex justify-end items-center space-x-2 mt-5">
        <button
          className="px-4 py-2 rounded-lg border font-bold border-zinc-900  hover:bg-zinc-200"
          onClick={() => router.back()}>
          Cancel
        </button>
        <button
          className="px-4 py-2 rounded-lg font-bold bg-zinc-900 text-white hover:bg-zinc-800"
          onClick={handleClickConfirm}>
          Confirm
        </button>
      </div>
    </>
  );
};

export default TodoForm;
