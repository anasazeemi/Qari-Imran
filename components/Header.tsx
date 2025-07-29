import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">
          In Memory of Qari Imran Khan
        </Link>
        <ul className="flex space-x-6 text-sm">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/articles">Articles</Link></li>
          <li><Link href="/videos">Videos</Link></li>
          <li><Link href="/tributes">Tributes</Link></li>
        </ul>
      </nav>
    </header>
  );
}