import { TodoList } from '@/components';
import Link from 'next/link';
import React from 'react';
import { BsPlusCircleDotted } from 'react-icons/bs';
import { nextFetch } from '@/util/nextFetch';

const Todos = async () => {
  const todoList: Todo[] = await nextFetch.get('/todos');

  return (
    <div className="container mx-auto my-14 px-4">
      <TodoList todoList={todoList} />
      <Link
        href="/todos/create"
        className="flex justify-center items-center w-full mt-4 p-4 border-2 border-zinc-900 rounded-lg text-3xl hover:bg-zinc-100 transition-all ease-out">
        <BsPlusCircleDotted />
      </Link>
    </div>
  );
};

export default Todos;
