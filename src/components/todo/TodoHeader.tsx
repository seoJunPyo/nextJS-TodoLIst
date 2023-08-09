'use client';

import React from 'react';
import { BsCheckAll } from 'react-icons/bs';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { Select } from '..';
import { Filter, Sort } from '@/constant/Todo';

const TodoHeader = ({
  allChecked,
  sort,
  filter,
  setSort,
  setFilter,
}: {
  allChecked: boolean;
  sort: Sort;
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
}) => {
  return (
    <div className="flex px-4 justify-between items-center">
      <div className="flex space-x-2">
        <label className="p-2 cursor-pointer hover:bg-zinc-100 rounded-lg">
          <input type="checkbox" checked={allChecked} onChange={() => {}} className="hidden" />
          <div className={`flex items-center md:space-x-1 text-2xl ${allChecked ? 'text-zinc-900' : 'text-zinc-300'}`}>
            <BsCheckAll />
            <span className="text-sm font-bold text-zinc-900 hidden md:inline">Check All</span>
          </div>
        </label>

        <button className="flex items-center md:space-x-1 text-2xl p-2 hover:bg-zinc-100 rounded-lg">
          <IoMdRemoveCircleOutline />
          <span className="text-sm font-bold text-zinc-900 hidden md:inline">Clear Completed</span>
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <Select
          value={filter}
          onChange={e => {
            setFilter(e.target.value as Filter);
          }}
          list={Filter}
        />
        <Select
          value={sort}
          onChange={e => {
            setSort(e.target.value as Sort);
          }}
          list={Sort}
        />
      </div>
    </div>
  );
};

export default TodoHeader;
