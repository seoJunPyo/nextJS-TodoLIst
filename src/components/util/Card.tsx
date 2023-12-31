import Image from 'next/image';
import { Spoiler } from '..';
import Link from 'next/link';

const Card = ({ src, title, decs, href }: { src: string; title: string; decs: string; href: string }) => (
  <div>
    <div className="md:w-80 border rounded-lg overflow-hidden border-zinc-900">
      <div className="md:h-56 p-8 flex justify-center items-center">
        <Link href={href}>
          <Image src={src} alt={src} width="160" height="160" />
        </Link>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg break-words mb-2">{title}</h3>
        <div className="hidden md:block">
          <Spoiler decs={decs} />
        </div>
        <p className="md:hidden">{decs}</p>
      </div>
    </div>
  </div>
);

export default Card;
