import { TodoList } from '@/components';
import Link from 'next/link';
import React from 'react';
import { BsPlusCircleDotted } from 'react-icons/bs';

const Todos = async () => {
  const res = await fetch('http://localhost:3000/api/todos', {
    cache: 'no-store',
  });
  const todosList: Todo[] = await res.json();

  return (
    <div className="container mx-auto my-14 px-4">
      <TodoList todoList={todosList} />
      <Link
        href="/todos/create"
        className="flex justify-center items-center w-full mt-4 p-4 border-2 border-zinc-900 rounded-lg text-3xl hover:bg-zinc-100 transition-all ease-out">
        <BsPlusCircleDotted />
      </Link>
    </div>
  );
};

export default Todos;
