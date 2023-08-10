import { deleteDoc, getDoc, updateDoc } from '@/service/mongodb';
import { NextRequest, NextResponse } from 'next/server';

const GET = async (
  _: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) => {
  const todo = await getDoc('todos', params.id);

  return NextResponse.json(todo);
};

const PATCH = async (
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) => {
  const data = await req.json();
  await updateDoc('todos', params.id, data);

  return NextResponse.json('success');
};

const DELETE = async (
  _: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) => {
  await deleteDoc('todos', params.id);

  return NextResponse.json('success');
};

export { GET, PATCH, DELETE };
