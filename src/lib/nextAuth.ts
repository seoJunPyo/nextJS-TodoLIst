import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        const res = await fetch(`${process.env.BASE_URL}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        const user = await res.json();

        return user;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      return { ...token, user: user ? { name: user.name, email: user.email } : token.user };
    },
  },
  pages: {
    signIn: '/auth/login',

    error: '/auth/login',
  },

  secret: process.env.AUTH_SECRET,
};

export { authOptions };
