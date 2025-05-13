import React from 'react'
import FesTive from '../gallery/festive'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Festive = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // For navigation back to previous route
  const navigate = useNavigate();

  // Open the image modal
  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(FesTive[index].img);
  };

  // Close the image modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Navigate to previous image
  const prevImage = () => {
    const newIndex = (currentIndex - 1 + FesTive.length) % FesTive.length;
    setCurrentIndex(newIndex);
    setSelectedImage(FesTive[newIndex].img);
  };

  // Navigate to next image
  const nextImage = () => {
    const newIndex = (currentIndex + 1) % FesTive.length;
    setCurrentIndex(newIndex);
    setSelectedImage(FesTive[newIndex].img);
  };

  // Navigate back to previous page
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative">
      {/* Back button to previous route */}
      {/* <button
        onClick={goBack}
        className="fixed top-14 left-4 z-10 bg-black/70 text-white px-4 py-2 rounded-lg flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back
      </button> */}

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 px-8 pt-16 gap-4">
        {FesTive.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
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
            {currentIndex + 1} / {FesTive.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Festive;