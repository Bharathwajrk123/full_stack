import React from 'react';
import { Hand } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <Hand className="w-12 h-12 mr-4 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            WebSign Learning Hub
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Learn sign language interactively and connect with the WebSign agent
        </p>
      </div>
    </header>
  );
};

export default Header;