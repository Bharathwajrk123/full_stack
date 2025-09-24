import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LearningTestsSection from './components/LearningTestsSection';
import StreamlitButtons from './components/StreamlitButtons';
import Footer from './components/Footer';
import Learning from './pages/Learning';
import Tests from './pages/Tests';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <LearningTestsSection />
      <StreamlitButtons />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/tests" element={<Tests />} />
      </Routes>
    </Router>
  );
}

export default App;