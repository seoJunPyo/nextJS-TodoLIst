'use client';

import React from 'react';
import { TodoHeader, TodoItem } from '..';

const filterList = (list: Todo[], filter: Filter) =>
  list.filter(item => {
    return filter === 'completed' ? item.completed : filter === 'active' ? !item.completed : true;
  });

const Todos = ({ todoList = [] }: { todoList: Todo[] }) => {
  const [filter, setFilter] = React.useState<Filter>('all');
  const [sort, setSort] = React.useState<Sort>('desc');

  return (
    <>
      <TodoHeader
        allChecked={todoList.every(({ completed }) => completed)}
        sort={sort}
        filter={filter}
        setSort={setSort}
        setFilter={setFilter}
      />
      <ul className="flex flex-col space-y-4 mt-4">
        {filterList(todoList, filter).map(({ _id, title, desc, completed, createAt }) => (
          <TodoItem key={_id} _id={_id} title={title} desc={desc} completed={completed} createAt={createAt} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
