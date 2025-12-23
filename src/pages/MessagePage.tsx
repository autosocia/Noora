import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Sparkles } from 'lucide-react';

export default function MessagePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const message = `Happy Birthday to my absolute soulmate of a best friend, my Billu! 🎂🎈

I was sitting here thinking about August 12, 2023, and I realized that was the day my life got so much brighter. Who would have thought that the girl sitting alone on the 3rd to last bench in A105 would become my Bestest and closest friend? I remember walking up to you, being all shy, and when you said you were from Kerala and didn't know Hindi, I literally turned around and walked away! It was so funny and awkward, but I just couldn’t stay away from you. You were so cute and there was this connection I couldn’t explain.

I remember being such an extrovert, talking to everyone, but always keeping one eye on you. I tried to get others to talk to you, but when they gave up because of the language gap, I realized I never would. I started talking in that silly, funny accent just to make you laugh, and seeing you giggle was the best reward I could ever ask for.

That’s when I realized: it was never about the English or the Hindi. It was about us. It was an emotional heartbeat that only we shared. When the whole world found you 'mute' or hard to understand, I understood every single thing you were feeling. I became the 'mother' to my 'adopted child' in class and college, and I will hold onto that title forever. I will always be the one who understands you when no one else does.

You are my best, best, best, best, bestest friend in the entire universe! You are my Tom and I am your Jerry—we have that crazy, fun, inseparable bond that no one can ever break. You are the most innocent soul I have ever met, and I promise to protect that innocence forever.

I want to say it a million times: you are my best friend, my best friend, my best friend! I never want us to become strangers. I want us to be these same 'besties' when we are old and gray, still giggling and still understanding our own secret language. You aren’t just a friend; you are my family.

Stay exactly who you are, Billu. Stay sweet, stay giggling, and stay by my side. I love you like a mother loves a child and like Jerry loves annoying Tom! 🐭🐱

Happy Birthday, my Bestest Bestie Forever! 💖✨🌍

- Forever yours, Sarthak 🥰`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-teal-100 py-12 px-4 overflow-hidden relative">
      {/* Subtle floating decorative hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-10 w-12 h-12 text-pink-300 opacity-40 animate-pulse" />
        <Heart className="absolute top-40 right-20 w-10 h-10 text-purple-300 opacity-30 animate-pulse delay-300" fill="currentColor" />
        <Sparkles className="absolute bottom-32 left-1/3 w-8 h-8 text-teal-200 opacity-40 animate-pulse delay-700" />
        <Heart className="absolute bottom-20 right-1/4 w-14 h-14 text-pink-200 opacity-30 animate-pulse delay-500" fill="currentColor" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <MessageCircle className="w-10 h-10 text-purple-400 mr-4" />
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-teal-500 bg-clip-text text-transparent">
              A Letter From My Heart
            </h1>
            <Heart className="w-10 h-10 text-pink-400 ml-4 animate-pulse" fill="currentColor" />
          </div>
          <p className="text-xl sm:text-2xl text-purple-600 font-light opacity-90">
            For my sweetest Billu, on your special day 💌✨
          </p>
        </div>

        <div className={`transform transition-all duration-1500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-16 relative overflow-hidden border border-white/30">
            {/* Soft inner glow orbs */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

            <div className="relative z-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full shadow-2xl">
                  <Heart className="w-12 h-12 sm:w-14 sm:h-14 text-white" fill="currentColor" />
                </div>
              </div>

              <div className="text-gray-700 text-lg sm:text-xl leading-loose whitespace-pre-line tracking-wide">
                {message}
              </div>

              <div className="mt-12 text-center">
                <p className="text-2xl font-semibold text-purple-600">With all my love,</p>
                <p className="text-3xl mt-2 text-pink-500 font-cursive">jerry 💖✨</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse { animation: pulse 4s ease-in-out infinite; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .font-cursive { font-family: 'Dancing Script', cursive, sans-serif; }
      `}</style>
    </div>
  );
}