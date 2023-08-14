import Link from 'next/link';
import { TechStack } from '@/constant/TechStack';
import { Card } from '@/components';
import { AiFillGithub } from 'react-icons/ai';

const Home = async () => {
  return (
    <div>
      <div className="border-b-2 border-zinc-900">
        <div className="container flex-row space-y-6 mx-auto text-center p-12 my-7">
          <h2 className="text-4xl font-bold">TodoList developed with Next.js.</h2>
          <div>
            <p>
              This TodoList web is developed with <b>Next.js</b> and hosted using <b>AWS</b>.
            </p>
            <p>
              TodoList&apos;s data is stored and managed through <b>Mongodb</b>.
            </p>
            <p>
              And it supports user authentication based on <b>Next Auth</b>.
            </p>
          </div>
          <div className="flex space-x-2 justify-center">
            <Link
              href="/auth/joinus"
              className="p-3 bg-zinc-900 text-white rounded-lg transition-all duration-200 hover:bg-zinc-800">
              Getting Start
            </Link>
            <Link
              href="https://github.com/seoJunPyo/nextJS-TodoLIst"
              className="flex justify-center items-center space-x-2 p-3 border-zinc-900 border rounded-lg cursor-pointer transition-all duration-200 hover:bg-zinc-100">
              <span className="text-xl">
                <AiFillGithub />
              </span>
              <span>Source Code</span>
            </Link>
          </div>
        </div>
      </div>

      <h2 className="mt-16 mb-8 text-center font-bold text-3xl">What you can do</h2>
      <div className="container mx-auto my-0 flex flex-col space-y-4 px-4 md:flex-row md:justify-center md:space-x-4 md:space-y-0">
        <div className="border flex flex-col justify-between border-zinc-900 p-12 rounded-lg">
          <div className="mb-7">
            <h3 className="text-4xl font-bold mb-4">Manage Your Todos</h3>
            <p>You can record and manage todos. Recorded todos can be edited freely and checked for completion.</p>
          </div>
          <div>
            <Link
              href="/todos"
              className="px-4 py-3 bg-zinc-900 text-white rounded-lg  transition-all duration-200 hover:bg-zinc-800">
              Add Todo!
            </Link>
          </div>
        </div>
        <div className="md:w-1/3 border flex flex-col justify-between border-zinc-900 p-12 rounded-lg">
          <div className="mb-7">
            <h3 className="text-4xl font-bold mb-4">Create Account</h3>
            <p>By creating an account, you can create a to-do list that only you can access, and set up a profile.</p>
          </div>
          <div>
            <Link
              href="/auth/joinus"
              className="px-4 py-3 bg-zinc-900 text-white rounded-lg transition-all duration-200 hover:bg-zinc-800 ">
              Join Us!
            </Link>
          </div>
        </div>
      </div>

      <h2 className="mt-16 mb-8 text-center font-bold text-3xl">Tech Stack</h2>
      <div className="container px-4 mx-auto flex flex-col items-center space-y-4 md:overflow-y-scroll md:flex-row md:space-x-8 md:space-y-0 md:items-start lg:overflow-visible lg:justify-center">
        {TechStack.map(({ src, title, decs, href }) => (
          <Card key={src} src={src} title={title} decs={decs} href={href} />
        ))}
      </div>
    </div>
  );
};

export default Home;
