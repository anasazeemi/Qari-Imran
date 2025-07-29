import tributes from '../data/tributes.json';
import TributeCard from '../components/TributeCard';

export default function Tributes() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Tributes & Obituaries</h1>
      {tributes.map((tribute, idx) => (
        <TributeCard key={idx} {...tribute} />
      ))}
    </div>
  );
}