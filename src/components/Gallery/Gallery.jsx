// components/Gallery.jsx
import React from 'react';

function Gallery() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      {/* Example gallery content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4">Image 1</div>
        <div className="bg-gray-200 p-4">Image 2</div>
        <div className="bg-gray-200 p-4">Image 3</div>
        {/* Add more images or gallery items here */}
      </div>
    </div>
  );
}

export default Gallery;
