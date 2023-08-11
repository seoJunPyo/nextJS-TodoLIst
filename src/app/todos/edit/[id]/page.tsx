import { TodoForm } from '@/components';
import { nextFetch } from '@/util/nextFetch';
import React from 'react';

const Detail = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const todo: Todo = await nextFetch.get(`/todos/${params.id}`);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-center font-bold text-4xl">Edit Todo!</h2>
      <TodoForm method="PATCH" {...todo} />
    </div>
  );
};

export default Detail;
