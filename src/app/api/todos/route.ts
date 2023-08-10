import { addDoc, deleteManyDocs, getDocs, updateManyDocs } from '@/service/mongodb';
import { NextRequest, NextResponse } from 'next/server';

const GET = async () => {
  const todos = await getDocs('todos');
  const result = todos.map(todo => ({ ...todo, createAt: new Date(todo._id.getTimestamp()).toDateString() }));

  return NextResponse.json(result);
};

const POST = async (req: NextRequest) => {
  const data = await req.json();
  await addDoc('todos', data);

  return NextResponse.json('success');
};

const PATCH = async (req: NextResponse) => {
  const data = await req.json();
  await updateManyDocs('todos', data);

  return NextResponse.json('success');
};

const DELETE = async () => {
  await deleteManyDocs('todos', {
    completed: true,
  });

  return NextResponse.json('success');
};

export { GET, POST, PATCH, DELETE };
