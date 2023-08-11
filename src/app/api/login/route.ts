import { getUser } from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

const POST = async (req: NextRequest) => {
  const userInfo = await req.json();
  const { email, password } = userInfo;

  const user = await getUser(email);
  if (!user) return NextResponse.json(null);

  const isPair = await bcrypt.compare(password, user.password);
  if (!isPair) return NextResponse.json(null);

  return NextResponse.json(user);
};

export { POST };
