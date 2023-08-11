import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const joinUsSchema = zodResolver(
  z
    .object({
      email: z.string().email({ message: 'This is an invalid email.' }),
      firstName: z.string().min(1, { message: 'You must enter at least 1 character.' }),
      lastName: z.string().min(1, { message: 'You must enter at least 1 character.' }),
      password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
      confirmPassword: z.string().min(1, { message: 'Passwords do not match.' }),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: 'Passwords do not match.',
      path: ['confirmPassword'],
    })
);

const logInSchema = zodResolver(
  z.object({
    email: z.string().email({ message: 'This is an invalid email.' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
  })
);

export { joinUsSchema, logInSchema };
