import React, { useState, useEffect } from 'react';

const images = [
  { src: '/images/matchDay.png', description: 'Join us at KSFA Stadium Bangalore' },
  { src: '/images/results.png', description: '"We Are Unbeatable"' },
  { src: '/images/player.png', description: 'Player of the match' },
];

export default function News() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image and description every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center mt-10 mb-10">
      {/* Image Section */}
      <div className="relative flex-shrink-0 mr-8">
        <img
          src={images[currentImageIndex].src}
          className="max-w-[500px] h-auto object-contain shadow-lg rounded-lg"
          alt={`Image ${currentImageIndex + 1}`}
          style={{
            height: 'auto',
            maxHeight: '600px',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Description Section */}
      <div className="bg-white bg-opacity-90 p-6 rounded-md shadow-md max-w-md">
        <p className="text-gray-700 text-lg font-medium">{images[currentImageIndex].description}</p>
      </div>
    </div>
  );
}
