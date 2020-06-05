import Link from 'next/link';
import Navigation from './navigation';

export default function Header({ size, path }) {
  // Set default logo style.
  let logoStyle = "text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8";
  if (size === "large") {
    logoStyle = "text-7xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8";
  }

  return (
    <header className="grid grid-cols-2 gap-4 mt-16 mb-16">
      <div className="col-span-2 text-center md:col-span-1 md:text-left">
        <h1 className={logoStyle}>
          <Link href="/">
            <a>jShamsul</a>
          </Link>
          .
        </h1>
      </div>
      <Navigation path={path} />
    </header>
  )
}
