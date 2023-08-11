import { deleteDoc, getDoc, updateDoc } from '@/lib/mongodb';
import { revalidatePath } from 'next/cache';
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
  revalidatePath('/todos');

  return NextResponse.json({ status: 200 });
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
  revalidatePath('/todos');

  return NextResponse.json({ status: 200 });
};

export { GET, PATCH, DELETE };
