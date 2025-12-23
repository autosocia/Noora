import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MemoriesPage from './pages/MemoriesPage';
import MessagePage from './pages/MessagePage';
import TimelinePage from './pages/TimelinePage';
import QuizPage from './pages/QuizPage';
import GiftPage from './pages/GiftPage';
import Navigation from './components/Navigation';
import { Sparkles } from 'lucide-react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const authStatus = localStorage.getItem('Billu_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = () => {
    localStorage.setItem('Billu_auth', 'true');
    setIsAuthenticated(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-mint-100 flex items-center justify-center">
        <div className="text-center">
          <Sparkles className="w-12 h-12 text-purple-400 animate-spin mx-auto mb-4" />
          <p className="text-purple-600 font-light">Loading something magical...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        {!isAuthenticated ? (
          <LoginPage onLogin={handleLogin} />
        ) : (
          <>
            <Navigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/memories" element={<MemoriesPage />} />
              <Route path="/message" element={<MessagePage />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/gift" element={<GiftPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;