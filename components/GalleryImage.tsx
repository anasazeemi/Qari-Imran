import { useState } from 'react';
import Modal from 'react-modal';

type GalleryImageProps = {
  src: string;
  caption?: string;
};

export default function GalleryImage({ src, caption }: GalleryImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="rounded overflow-hidden shadow-sm bg-white cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          alt={caption}
          className="w-full object-cover rounded-t transition-transform hover:scale-105"
        />
        {caption && (
          <p className="text-sm text-gray-600 px-2 py-1 text-center">{caption}</p>
        )}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)} // <-- handles ESC and overlay click
        shouldCloseOnOverlayClick={true}        // <-- enable closing on outside click
        contentLabel="Image Modal"
        className="fixed inset-0 flex items-center justify-center p-4 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 z-50"
        ariaHideApp={false}
      >
        <div className="max-w-4xl w-full relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-400"
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={src}
            alt={caption}
            className="w-full max-h-[80vh] object-contain mx-auto"
          />
          {caption && (
            <p className="text-white text-center mt-4">{caption}</p>
          )}
        </div>
      </Modal>
    </>
  );
}
