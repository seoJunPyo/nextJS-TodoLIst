'use client';

import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Spoiler = ({ decs }: { decs: string }) => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <p className={`${show ? '' : 'line-clamp-3'}`}>{decs}</p>
      <button className="mt-2 flex items-center space-x-1 font-bold hover:text-zinc-700" onClick={() => setShow(!show)}>
        <span className={`${show ? 'rotate-180' : ''} transition-all ease-in`}>
          <IoIosArrowDown />
        </span>
        <span>{show ? 'Hide' : 'Show more'}</span>
      </button>
    </>
  );
};

export default Spoiler;
