import { Modal, TodoForm } from '@/components';
import React from 'react';

const Create = () => {
  return (
    <Modal>
      <h2 className="text-center font-bold text-4xl">New Todo!</h2>
      <TodoForm method="POST" />
    </Modal>
  );
};

export default Create;
