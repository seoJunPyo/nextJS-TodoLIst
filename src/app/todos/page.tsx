import { TodoList } from '@/components';
import Link from 'next/link';
import React from 'react';
import { BsPlusCircleDotted } from 'react-icons/bs';

const List = [
  {
    id: '1',
    title: 'HTML',
    decs: 'HTML5 study',
    completed: false,
    createAt: new Date(),
  },
  {
    id: '2',
    title: 'CSS',
    decs: 'CSS3 study',
    completed: true,
    createAt: new Date(),
  },
  {
    id: '3',
    title: 'javaScript',
    decs: 'javaScript study',
    completed: false,
    createAt: new Date(),
  },
];

const Todos = () => {
  return (
    <div className="container mx-auto my-14 ">
      <TodoList todoList={List} />
      <Link
        href="/todos/create"
        className="flex justify-center items-center w-full mt-4 p-4 border-2 border-zinc-900 rounded-lg text-3xl hover:bg-zinc-100 transition-all ease-out">
        <BsPlusCircleDotted />
      </Link>
    </div>
  );
};

export default Todos;
