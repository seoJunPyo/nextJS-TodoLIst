import { addDoc, deleteManyDocs, getDocs, updateManyDocs } from '@/lib/mongodb';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/nextAuth';

const GET = async () => {
  const todos = await getDocs('todos');
  const result = todos.map(todo => ({ ...todo, createAt: new Date(todo._id.getTimestamp()).toDateString() }));

  return NextResponse.json(result);
};

const POST = async (req: NextRequest) => {
  const data = await req.json();
  const session = await getServerSession(authOptions);

  await addDoc('todos', { ...data, author: session?.user?.email });
  revalidatePath('/todos');

  return NextResponse.json({ status: 200 });
};

const PATCH = async (req: NextRequest) => {
  const data = await req.json();

  await updateManyDocs('todos', data);
  revalidatePath('/todos');

  return NextResponse.json({ status: 200 });
};

const DELETE = async () => {
  await deleteManyDocs('todos', {
    completed: true,
  });
  revalidatePath('/todos');

  return NextResponse.json({ status: 200 });
};

export { GET, POST, PATCH, DELETE };
