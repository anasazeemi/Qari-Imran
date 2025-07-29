import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-4 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold">
            In Memory of Qari Imran Khan
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-white text-2xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
        <ul
          className={`flex flex-col sm:flex-row sm:space-x-6 mt-4 sm:mt-0 text-sm ${
            menuOpen ? 'block' : 'hidden sm:flex'
          }`}
        >
          <li><Link href="/about" onClick={handleNavClick}>About</Link></li>
          <li><Link href="/articles" onClick={handleNavClick}>Articles</Link></li>
          <li><Link href="/videos" onClick={handleNavClick}>Videos</Link></li>
          <li><Link href="/tributes" onClick={handleNavClick}>Tributes</Link></li>
          <li><Link href="/gallery" onClick={handleNavClick}>Gallery</Link></li>
        </ul>
      </nav>
    </header>
  );
}
