import { authOptions } from '@/lib/nextAuth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (session?.user) redirect('/todos');

  return <div className="max-w-xl mx-auto my-14 ">{children}</div>;
};

export default layout;
