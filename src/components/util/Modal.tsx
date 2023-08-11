'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { IoClose } from 'react-icons/io5';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const overlayRef = React.useRef(null);

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key !== 'Escape') return;

    router.back();
  };

  React.useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
      onClick={e => {
        if (overlayRef.current !== e.target) return;

        router.back();
      }}>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6 bg-white rounded-lg">
        <div className="flex justify-end">
          <button className="text-xl hover:text-zinc-700" onClick={() => router.back()}>
            <IoClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
