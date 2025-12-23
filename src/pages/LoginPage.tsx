import React, { useState, useEffect } from 'react';
import { Lock, Sparkles } from 'lucide-react';
import { Cake } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const birthday = new Date('2025-12-24T00:00:00');
    const updateCountdown = () => {
      const now = new Date();
      const difference = birthday.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft('🎉 It’s her birthday today! 🎂');
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Tom&jerry<3') {
      onLogin();
    } else {
      setError("Oops! That's not the special code. Try again! 💝");
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Sharp background image - no blur */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url('/nooraBG.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Subtle blue-pink overlay without blurring the background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30"></div>

      {/* Animated bubbles (still blurred for soft effect) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full animate-bounce backdrop-blur-sm"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-white/20 rounded-full animate-pulse backdrop-blur-sm"></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-white/25 rounded-full animate-bounce delay-300 backdrop-blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-white/15 rounded-full animate-pulse delay-500 backdrop-blur-sm"></div>
      </div>

      {/* Main glass card - only this has the blur effect */}
      <div className="rounded-3xl shadow-2xl p-8 max-w-md w-full relative z-10 backdrop-blur-xl bg-white/20 border border-white/30">

        {/* Countdown Card */}
        <div className="mb-6 p-4 rounded-xl shadow-lg text-center backdrop-blur-md bg-gradient-to-r from-blue-500/70 to-pink-500/70 border border-white/30">
          <h2 className="text-lg sm:text-xl font-bold mb-2 text-white">🎉 Countdown Begins 🎂</h2>
          <p className="text-sm sm:text-base font-medium text-white">{timeLeft}</p>
        </div>

        {/* Birthday Cake with flickering candles */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <Cake className="w-20 h-20 sm:w-28 sm:h-28 text-pink-300 mx-auto mb-4 drop-shadow-2xl" fill="currentColor" strokeWidth={1.5} />

            {/* Candle 1 */}
            <div className="absolute top-2 left-8 w-1 h-8 bg-yellow-300 rounded-t-sm shadow-md">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-3 bg-orange-400 rounded-full animate-flicker"></div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-4 bg-yellow-200 rounded-full opacity-70 animate-flicker delay-100"></div>
            </div>

            {/* Candle 2 */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-9 bg-yellow-300 rounded-t-sm shadow-md">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-3 bg-orange-400 rounded-full animate-flicker delay-200"></div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-4 bg-yellow-200 rounded-full opacity-70 animate-flicker delay-300"></div>
            </div>

            {/* Candle 3 */}
            <div className="absolute top-2 right-8 w-1 h-8 bg-yellow-300 rounded-t-sm shadow-md">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-3 bg-orange-400 rounded-full animate-flicker delay-75"></div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-4 bg-yellow-200 rounded-full opacity-70 animate-flicker delay-150"></div>
            </div>

            {/* Sparkles */}
            <Sparkles className="w-7 h-7 text-blue-300 absolute -top-4 left-4 animate-spin-slow" />
            <Sparkles className="w-6 h-6 text-pink-300 absolute -top-6 right-6 animate-spin-slow delay-500" />
            <Sparkles className="w-8 h-8 text-yellow-200 absolute bottom-4 -left-6 animate-pulse" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-300 to-pink-300 bg-clip-text text-transparent mb-2 px-4">
            Something Special Awaits
          </h1>
          <p className="text-sm sm:text-base text-white/90 font-light px-4">
            A heartfelt surprise made just for someone extraordinary ✨
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="relative">
            <Lock className="w-5 h-5 text-white/70 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter the special code..."
              className="w-full pl-11 pr-4 py-3 border border-white/40 rounded-xl focus:border-white/70 focus:outline-none transition-all duration-300 backdrop-blur-md bg-white/20 text-white placeholder-white/60 text-sm sm:text-base"
            />
          </div>

          {error && (
            <div className="text-pink-200 text-sm text-center backdrop-blur-md bg-white/10 p-2 rounded-lg border border-pink-300/40">
              {error}
            </div>
          )}

          {/* Glassy submit button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 text-white text-sm sm:text-base
                       backdrop-blur-md bg-gradient-to-r from-blue-500/70 to-pink-500/70 hover:from-blue-600/80 hover:to-pink-600/80 border border-white/30"
          >
            Open My Gift 🎁
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setShowHint(!showHint)}
            className="text-white/70 hover:text-blue-200 text-xs sm:text-sm transition-colors duration-300 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-lg border border-white/20"
          >
            Need a hint? 💭
          </button>

          {showHint && (
            <div className="mt-3 backdrop-blur-md bg-white/20 p-3 rounded-lg border border-white/30">
              <p className="text-blue-100 text-xs sm:text-sm font-medium">
                💡 <strong>Hint:</strong> "One special Thing"
              </p>
              <p className="text-pink-200 text-xs sm:text-sm mt-2">
                🎂 Countdown Begins: <strong>{timeLeft}</strong>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-flicker {
          animation: flicker 1.5s infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .delay-75 { animation-delay: 75ms; }
        .delay-100 { animation-delay: 100ms; }
        .delay-150 { animation-delay: 150ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>
    </div>
  );
}