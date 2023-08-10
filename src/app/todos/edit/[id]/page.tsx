import { TodoForm } from '@/components';
import React from 'react';

const Detail = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const res = await fetch(`http://localhost:3000/api/todos/${params.id}`, {
    cache: 'no-store',
  });

  const todo: Todo = await res.json();

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-center font-bold text-4xl">Edit Todo!</h2>
      <TodoForm method="PATCH" {...todo} />
    </div>
  );
};

export default Detail;
