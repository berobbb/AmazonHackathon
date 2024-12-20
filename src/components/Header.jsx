import React from 'react';
import { Search } from "lucide-react";
import { Layers } from 'lucide-react';

export default function Header({ refs }) {
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="md:flex  hidden h-16 items-center justify-between px-4 md:px-6 fixed top-0 left-0 w-full bg-black text-white z-50 ">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="h-8 w-[100px] flex items-center justify-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Layers className="h-8 w-8 mr-2 text-primary" />
          </div>
        </div>
      </div>

      <div className="hidden md:flex gap-8">
        <div className="cursor-pointer" onClick={() => handleScroll(refs.resource)}>
          Gen AI
        </div>
        <div className="cursor-pointer" onClick={() => handleScroll(refs.card)}>
          Features
        </div>
        <div className="cursor-pointer" onClick={() => handleScroll(refs.about)}>
          About
        </div>
        <div className="cursor-pointer" onClick={() => handleScroll(refs.footer)}>
          Footer
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => window.location.href = 'https://www.youtube.com/watch?v=2DhOPXZ21l8'}
          className="hidden md:flex bg-gray-200 text-black px-6 py-2 rounded-2xl cursor-pointer hover:text-white hover:bg-[#FF9900]"
        >
          Demo Video
        </button>
      </div>
    </div>
  );
}
