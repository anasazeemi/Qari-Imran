type VideoProps = {
  title: string;
  embedUrl: string;
};

export default function VideoEmbed({ title, embedUrl }: VideoProps) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="aspect-video">
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full rounded-md"
          allowFullScreen
        />
      </div>
    </div>
  );
}