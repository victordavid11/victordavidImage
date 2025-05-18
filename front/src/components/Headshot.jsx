import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import headshot from '../gallery/headshot'

const Headshot = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // For navigation back to previous route
  const navigate = useNavigate();

  // Open the image modal
  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(headshot[index].img);
  };

  // Close the image modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Navigate to previous image
  const prevImage = () => {
    const newIndex = (currentIndex - 1 + headshot.length) % headshot.length;
    setCurrentIndex(newIndex);
    setSelectedImage(headshot[newIndex].img);
  };

  // Navigate to next image
  const nextImage = () => {
    const newIndex = (currentIndex + 1) % headshot.length;
    setCurrentIndex(newIndex);
    setSelectedImage(headshot[newIndex].img);
  };

  // Navigate back to previous page
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative">
      

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 px-8 pt-16 gap-4">
        {headshot.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img loading='lazy'
              className="h-96 w-full object-cover rounded-lg hover:opacity-100 transition-opacity"
              src={item.img}
              alt=""
            />
          </div>
        ))}
      </div>

      {/* Modal for fullscreen image view */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <img
            src={selectedImage}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="absolute bottom-4 left-4 text-white bg-black/50 px-3 py-1 rounded-lg">
            {currentIndex + 1} / {headshot.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Headshot;
