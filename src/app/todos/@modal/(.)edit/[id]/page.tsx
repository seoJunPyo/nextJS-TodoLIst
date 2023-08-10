import React from 'react';
import { Modal, TodoForm } from '@/components';

const EditModal = async ({
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
    <Modal>
      <h2 className="text-center font-bold text-4xl">Edit Todo!</h2>
      <TodoForm method="PATCH" {...todo} />
    </Modal>
  );
};

export default EditModal;
