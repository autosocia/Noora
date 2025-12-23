import React, { useState } from 'react';
import { Heart, Lock, Sparkles } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '12624') {
      onLogin();
    } else {
      setError('Oops! That\'s not the special code. Try again! 💝');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-pink-300 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-blue-300 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-pink-200 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-md w-full relative z-10 border border-white/20">
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <Heart className="w-16 h-16 text-pink-400 mx-auto mb-4 animate-pulse" fill="currentColor" />
            <Sparkles className="w-6 h-6 text-purple-400 absolute -top-2 -right-2 animate-spin" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
            Countdown Begins 🎉
          </h1>
          <p className="text-gray-600 font-light">
            Something special awaits – a heartfelt surprise made just for someone extraordinary ✨
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter the special code..."
              className="w-full pl-11 pr-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
            />
          </div>

          {error && (
            <div className="text-pink-500 text-sm text-center bg-pink-50 p-2 rounded-lg border border-pink-200">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-pink-500 hover:to-purple-600"
          >
            Open My Gift 🎁
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setShowHint(!showHint)}
            className="text-gray-500 hover:text-purple-500 text-sm transition-colors duration-300"
          >
            Need a hint? 💭
          </button>
          
          {showHint && (
            <div className="mt-3 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-300 animate-fade-in">
              <p className="text-purple-700 text-sm font-medium">
                💡 <strong>Hint:</strong> "One special day"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}