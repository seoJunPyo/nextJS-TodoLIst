import { TodoForm } from '@/components';
import React from 'react';

const Create = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-center font-bold text-4xl">New Todo!</h2>
      <TodoForm method="POST" />
    </div>
  );
};

export default Create;
