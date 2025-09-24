import React from 'react';
import { ExternalLink, Video, Hand } from 'lucide-react';

const StreamlitButtons: React.FC = () => {
  const openStreamlit = (mode: string) => {
    const url = `http://localhost:8501/?mode=${mode}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          WebSign Agent Integration
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Connect with our AI-powered WebSign agent to practice your skills in real-time
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <button
            onClick={() => openStreamlit('sign-to-web')}
            className="group bg-gradient-to-br from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-center mb-4">
              <Hand className="w-12 h-12 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Sign → Web</h3>
            <p className="text-green-100 mb-6 leading-relaxed">
              Use your sign language skills to control web interfaces and navigate digital content
            </p>
            <div className="flex items-center justify-center text-green-100 group-hover:text-white transition-colors">
              <span className="mr-2 font-semibold">Open Streamlit</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          <button
            onClick={() => openStreamlit('video-to-sign')}
            className="group bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-center mb-4">
              <Video className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Video → Signs</h3>
            <p className="text-purple-100 mb-6 leading-relaxed">
              Upload videos and get real-time sign language interpretation and feedback
            </p>
            <div className="flex items-center justify-center text-purple-100 group-hover:text-white transition-colors">
              <span className="mr-2 font-semibold">Open Streamlit</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StreamlitButtons;