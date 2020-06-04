import { CMS_NAME } from '../lib/constants';
import Link from 'next/link';

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        jShamsul.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <Link href="/">
          <a className="border-solid border-b-4 hover:border-black duration-200 transition-colors">Home</a>
        </Link>
        {' '} / {' '}
        <Link href="/about">
          <a className="border-solid border-b-4 border-transparent hover:border-black duration-200 transition-colors">About</a>
        </Link>
      </h4>
    </section>
  )
}
