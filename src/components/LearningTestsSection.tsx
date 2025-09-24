import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ClipboardCheck, ArrowRight } from 'lucide-react';

const LearningTestsSection: React.FC = () => {
  const navigate = useNavigate();

  const handleLearningClick = () => {
    navigate('/learning');
  };

  const handleTestsClick = () => {
    navigate('/tests');
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Choose Your Path
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start your sign language journey with structured learning or test your skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Learning Section */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                Learning
              </h3>
              
              <p className="text-gray-600 text-center mb-8 leading-relaxed">
                Explore alphabets, numbers, and common signs with examples
              </p>
              
              <button 
                onClick={handleLearningClick}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 group-hover:gap-4"
              >
                <span className="text-lg">Start Learning</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Tests Section */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ClipboardCheck className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                Tests
              </h3>
              
              <p className="text-gray-600 text-center mb-8 leading-relaxed">
                Check your knowledge with practice exercises and webcam-based tests
              </p>
              
              <button 
                onClick={handleTestsClick}
                className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 group-hover:gap-4"
              >
                <span className="text-lg">Start Test</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningTestsSection;