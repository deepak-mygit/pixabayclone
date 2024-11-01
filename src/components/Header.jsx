import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-green-500 font-mono">
          Pixabay
        </a>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Photos
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Illustrations
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Vectors
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Videos
          </a>
        </nav>
        <Button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Photos
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Illustrations
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Vectors
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Videos
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
