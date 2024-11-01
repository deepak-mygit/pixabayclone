import React, { useContext } from "react";
import { Search } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import PixabayContext from "../context/PixabayContext";

export default function Hero() {
  const { setQuery } = useContext(PixabayContext);
  return (
    <section className="bg-slate-950 py-12 md:py-24 text-white font-sans">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Stunning free images & royalty free stock
        </h1>
        <p className="text-xl mb-8">
          Over 2.7 million+ high quality stock images, videos and music shared
          by our talented community.
        </p>
        <div className="max-w-3xl mx-auto relative">
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search images, vectors, videos and music"
            className="w-full py-3 pl-4 pr-12 rounded-full text-lg text-gray-600"
          />
          <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full text-black">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
