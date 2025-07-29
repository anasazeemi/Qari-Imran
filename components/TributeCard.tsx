/* eslint-disable react/no-unescaped-entities */

type TributeProps = {
  name: string;
  message: string;
};

export default function TributeCard({ name, message }: TributeProps) {
  return (
    <div className="border p-4 rounded-md shadow-sm bg-white mb-4">
      <p className="text-gray-700 italic mb-2">"{message}"</p>
      <p className="text-sm text-gray-500 text-right">— {name}</p>
    </div>
  );
}