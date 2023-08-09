import { TodoForm } from '@/components';
import React from 'react';

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

const Detail = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id, title, decs, completed, createAt } = List.find(({ id }) => id === params.id)!;

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-center font-bold text-4xl">Edit Todo!</h2>
      <TodoForm id={id} title={title} decs={decs} completed={completed} createAt={createAt} />
    </div>
  );
};

export default Detail;
