import gallery from '../data/gallery.json';
import GalleryImage from '../components/GalleryImage';

export default function Gallery() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gallery.map((img, idx) => (
          <GalleryImage key={idx} {...img} />
        ))}
      </div>
    </div>
  );
}