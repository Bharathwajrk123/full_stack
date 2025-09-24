import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-gray-300">Made with</span>
          <Heart className="w-5 h-5 text-red-500 animate-pulse" />
          <span className="text-gray-300">at</span>
          <span className="font-semibold text-white">WebSign Hackathon 2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;