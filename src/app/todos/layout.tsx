import { authOptions } from '@/lib/nextAuth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const layout = async ({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (!session?.user) redirect('/auth/login');

  return (
    <>
      {children}
      {modal}
    </>
  );
};

export default layout;
