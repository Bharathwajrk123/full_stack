import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ClipboardCheck, Camera, Target } from 'lucide-react';

const Tests: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Home</span>
        </button>

        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
              <ClipboardCheck className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Testing Center
          </h1>

          <div className="bg-white rounded-2xl shadow-xl p-12 mb-8">
            <div className="flex items-center justify-center mb-6">
              <Target className="w-12 h-12 text-green-500 animate-pulse" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
              Coming Soon!
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              We're developing comprehensive testing features to help you assess your sign language skills:
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <Camera className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600">Webcam-based sign recognition tests</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Multiple choice quizzes</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Progress tracking and scoring</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Personalized feedback and tips</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Difficulty levels for all skill ranges</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Real-time performance analytics</span>
              </div>
            </div>
          </div>

          <p className="text-gray-500">
            Get ready to test your skills!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tests;