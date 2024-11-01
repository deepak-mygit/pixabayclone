import React, { useState, useRef, useEffect, useContext } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/Button";
import PixabayContext from "../context/PixabayContext";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoriesRef = useRef(null);
  const { fetchImageByCategory } = useContext(PixabayContext);

  const categories = [
    "Backgrounds",
    "Fashion",
    "Nature",
    "Science",
    "Education",
    "Feelings",
    "Health",
    "People",
    "Religion",
    "Places",
    "Animals",
    "Industry",
    "Computer",
    "Food",
    "Sports",
    "Transportation",
    "Travel",
    "Buildings",
    "Business",
    "Music",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (categoriesRef.current) {
        const scrollPosition = categoriesRef.current.scrollLeft;
        const categoryWidth =
          categoriesRef.current.offsetWidth / categories.length;
        const newActiveCategory = Math.round(scrollPosition / categoryWidth);
        setActiveCategory(newActiveCategory);
      }
    };

    const categoriesElement = categoriesRef.current;
    if (categoriesElement) {
      categoriesElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (categoriesElement) {
        categoriesElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [categories.length]);

  return (
    <section className="py-8 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Popular Categories</h2>
        <div className="relative">
          <div
            ref={categoriesRef}
            className="flex overflow-x-auto space-x-2 py-2 px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
          >
            {categories.map((category, index) => (
              <Button
                onClick={() => {
                  fetchImageByCategory(category.toLowerCase());
                  setSelectedCategory(category);
                }}
                key={index}
                className={`rounded-full flex-shrink-0 ${
                  selectedCategory === category
                    ? "bg-green-500 text-white"
                    : "bg-white border border-gray-300"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
