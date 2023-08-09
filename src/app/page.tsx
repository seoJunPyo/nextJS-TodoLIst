import Link from 'next/link';
import { TechStack } from '@/constant/TechStack';
import Card from '@/components/Card';
import { AiFillGithub } from 'react-icons/ai';

export default function Home() {
  return (
    <div>
      <div className="border-b-2 border-zinc-900">
        <div className="container flex-row space-y-6 mx-auto text-center p-12 my-7">
          <h2 className="text-4xl font-bold">TodoList developed with Next.js.</h2>
          <div>
            <p>This web is TodoList developed with Next.js. </p>
            <p>TodoList&apos;s data is stored and managed through Mongodb.</p>
            <p> And it supports user authentication based on JWT token.</p>
          </div>
          <div className="flex space-x-2 justify-center">
            <Link
              href="/auth/joinus"
              className="p-3 bg-zinc-900 text-white rounded-lg  transition-all duration-200 hover:bg-zinc-800">
              Getting Start
            </Link>
            <Link
              href="https://github.com/seoJunPyo/nextJS-TodoLIst"
              className="flex justify-center items-center space-x-2 p-3 border-zinc-900 border rounded-lg  cursor-pointer transition-all duration-200 hover:bg-zinc-100 ">
              <span className="text-xl">
                <AiFillGithub />
              </span>
              <span>Source Code</span>
            </Link>
          </div>
        </div>
      </div>

      <h2 className="mt-16 mb-8 text-center font-bold text-3xl">What you can do</h2>
      <div className="container flex justify-center mx-auto my-0 space-x-4">
        <div className="border flex flex-col justify-between border-zinc-900 p-12 rounded-lg">
          <div className="mb-7">
            <h3 className="text-4xl font-bold mb-2">Manage Your TodoList</h3>
            <p>You can record and manage to-dos. Recorded to-dos can be edited freely and checked for completion.</p>
          </div>
          <div>
            <Link
              href="/todos"
              className="px-4 py-3 bg-zinc-900 text-white rounded-lg  transition-all duration-200 hover:bg-zinc-800">
              Add Todo!
            </Link>
          </div>
        </div>
        <div className="w-1/3 border flex flex-col justify-between border-zinc-900 p-12 rounded-lg">
          <div className="mb-7">
            <h3 className="text-4xl font-bold mb-2">Create Account</h3>
            <p>By creating an account, you can create a to-do list that only you can access, and set up a profile.</p>
          </div>
          <div>
            <Link
              href="/auth/joinus"
              className="px-4 py-3 bg-zinc-900 text-white rounded-lg  transition-all duration-200 hover:bg-zinc-800 ">
              Join Us!
            </Link>
          </div>
        </div>
      </div>

      <h2 className="mt-16 mb-8 text-center font-bold text-3xl">Tech Stack</h2>
      <div className="container flex justify-center space-x-16 mx-auto ">
        {TechStack.map(({ src, title, decs, href }) => (
          <Card key={src} src={src} title={title} decs={decs} href={href} />
        ))}
      </div>
    </div>
  );
}
