import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 py-16 px-8 m-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">About Pixabay</h3>
            <p className="text-sm text-gray-400">
              Pixabay is a vibrant community of creatives, sharing copyright
              free images, videos and music.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Community</h3>
            <ul className="text-sm text-slate-400">
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Forum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Creators
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Camera
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="text-sm text-slate-400">
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  License
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookies Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
