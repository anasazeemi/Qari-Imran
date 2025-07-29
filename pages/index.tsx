import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            In Loving Memory of Qari Imran Khan
          </h1>
          <p className="text-lg text-gray-600 italic mb-6">
            "As for those who believe and do good, the Most Compassionate will ˹certainly˺ bless them with ˹genuine˺ love." <br />
            <span className="text-sm text-gray-500">(Qur’an 19:96)</span>
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-700 text-lg mb-6">
            A father. A teacher. A Qari. A twin. A light in the lives of many. This website is a humble effort to honor the legacy of Qari Imran Khan and share his impact with those who knew him — and even those who did not.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
              Read Biography
            </Link>
            <Link href="/videos" className="bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded hover:bg-gray-100 transition">
              Watch Lectures
            </Link>
            <Link href="/tributes" className="bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded hover:bg-gray-100 transition">
              View Tributes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
