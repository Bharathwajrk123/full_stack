import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Sparkles } from 'lucide-react';

const Learning: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Home</span>
        </button>

        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Learning Center
          </h1>

          <div className="bg-white rounded-2xl shadow-xl p-12 mb-8">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-12 h-12 text-yellow-500 animate-pulse" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
              Coming Soon!
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              We're building an amazing interactive learning experience where you'll be able to:
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Learn the sign language alphabet</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Practice numbers and counting</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Master common everyday signs</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Interactive video demonstrations</span>
              </div>
            </div>
          </div>

          <p className="text-gray-500">
            Stay tuned for updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learning;