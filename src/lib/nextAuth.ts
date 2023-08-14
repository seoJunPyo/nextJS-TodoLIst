import { NextAuthOptions } from 'next-auth';
// import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { nextFetch } from '@/util/nextFetch';

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

        const user = await nextFetch.post('/login', { email, password });

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
