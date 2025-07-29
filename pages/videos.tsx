import videos from '../data/videos.json';
import VideoEmbed from '../components/VideoEmbed';

export default function Videos() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Videos & Lectures</h1>
      {videos.map((video, idx) => (
        <VideoEmbed key={idx} {...video} />
      ))}
    </div>
  );
}