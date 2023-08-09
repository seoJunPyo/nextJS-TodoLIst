import Image from 'next/image';
import Spoiler from './Spoiler';
import Link from 'next/link';

const Card = ({ src, title, decs, href }: { src: string; title: string; decs: string; href: string }) => (
  <div>
    <div className="w-80 border rounded-lg overflow-hidden border-zinc-900">
      <div className=" h-56 p-8 flex justify-center items-center border-b border-zinc-900">
        <Link href={href}>
          <Image src={src} alt={src} width="200" height="200" />
        </Link>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg break-words mb-2">{title}</h3>
        <Spoiler decs={decs} />
      </div>
    </div>
  </div>
);

export default Card;
