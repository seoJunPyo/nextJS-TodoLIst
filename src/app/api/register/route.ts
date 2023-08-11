import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { addDoc, getUser } from '@/lib/mongodb';

const POST = async (req: NextRequest) => {
  const data = await req.json();

  const user = await getUser(data.email);
  if (user) throw new Error('This account already exists.');

  const hash = await bcrypt.hash(data.password, 10);
  await addDoc('user', { ...data, password: hash, todos: [] });

  return NextResponse.json({ status: 200 });
};

export { POST };
