import React from 'react';
import { Modal, TodoForm } from '@/components';

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

const EditModal = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id, title, decs, completed, createAt } = List.find(({ id }) => id === params.id)!;

  return (
    <Modal>
      <h2 className="text-center font-bold text-4xl">Edit Todo!</h2>
      <TodoForm id={id} title={title} decs={decs} completed={completed} createAt={createAt} />
    </Modal>
  );
};

export default EditModal;
