import React from 'react';

const Gallery = () => {
  // Replace with your gallery images
  const galleryImages = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ];

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4">Gallery</h2>
      <div className="flex">
        {galleryImages.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index + 1}`} className="mr-4" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
