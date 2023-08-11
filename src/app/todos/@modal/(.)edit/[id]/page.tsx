import React from 'react';
import { Modal, TodoForm } from '@/components';
import { nextFetch } from '@/util/nextFetch';

const EditModal = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const todo: Todo = await nextFetch.get(`/todos/${params.id}`);

  return (
    <Modal>
      <h2 className="text-center font-bold text-4xl">Edit Todo!</h2>
      <TodoForm method="PATCH" {...todo} />
    </Modal>
  );
};

export default EditModal;
