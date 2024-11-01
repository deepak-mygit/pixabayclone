import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

export default function ImageGrid() {
  const { imageData } = useContext(PixabayContext);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Free Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageData.map((image) => (
            <div key={image.id} className="relative aspect-w-4 aspect-h-3">
              <img
                src={image.largeImageURL}
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
