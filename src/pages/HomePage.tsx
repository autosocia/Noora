import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Star, Camera, Clock, Brain, Gift, MessageCircle, ChevronDown } from 'lucide-react';

export default function HomePage() {
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number; delay: number; color: string }>>([]);

  useEffect(() => {
    const colors = ['#f472b6', '#c084fc', '#a78bfa', '#818cf8', '#60a5fa', '#e879f9'];
    const particles = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 50,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setConfetti(particles);
  }, []);

  const quickLinks = [
    { to: '/memories', icon: Camera, title: 'Our Gallery', description: '78 beautiful moments captured forever', color: 'pink' },
    { to: '/message', icon: MessageCircle, title: 'From My Heart', description: 'A special letter just for you', color: 'purple' },
    { to: '/timeline', icon: Clock, title: 'Our Journey', description: 'Every chapter of our friendship', color: 'blue' },
    { to: '/story', icon: Sparkles, title: 'Our Story', description: 'The real, unfiltered version', color: 'pink' },
    { to: '/quiz', icon: Brain, title: 'Bestie Quiz', description: '50 questions only you can ace', color: 'purple' },
    { to: '/gift', icon: Gift, title: 'Cookie Thoughts', description: 'Break a cookie whenever you need me', color: 'blue' },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      pink: 'from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600',
      purple: 'from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600',
      blue: 'from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600'
    };
    return colors[color as keyof typeof colors] || colors.pink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-teal-100 relative overflow-hidden">
      {/* Falling Confetti Background */}
      <div className="absolute inset-0 pointer-events-none">
        {confetti.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-3 h-3 rounded-full animate-fall"
            style={{
              left: `${particle.x}%`,
              backgroundColor: particle.color,
              animationDelay: `${particle.delay}s`,
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Floating Decorations */}
          <div className="mb-12 relative">
            <Sparkles className="w-16 h-16 text-purple-400 animate-spin-slow mx-auto" />
            <Heart className="w-12 h-12 text-pink-500 absolute top-4 left-1/2 -translate-x-1/2 animate-pulse" fill="currentColor" />
            <Star className="w-10 h-10 text-yellow-300 absolute top-0 left-1/4 animate-bounce" fill="currentColor" />
            <Star className="w-8 h-8 text-pink-300 absolute top-8 right-1/4 animate-bounce delay-300" fill="currentColor" />
            <Sparkles className="w-10 h-10 text-teal-300 absolute bottom-0 left-1/3 animate-pulse delay-500" />
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-teal-600 bg-clip-text text-transparent mb-4 leading-tight">
            Happy 21st
          </h1>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-8">
            Birthday, Billu!
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl text-purple-800 font-light mb-12 max-w-4xl mx-auto leading-relaxed px-4 opacity-90">
            My absolute favorite person, my best friend, my home — this entire world is made just for you. 💕
          </p>

          {/* Age Spotlight */}
          <div className="my-16">
            <div className="inline-block bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl px-12 py-10 border border-white/40">
              <div className="text-7xl sm:text-9xl font-black bg-gradient-to-br from-pink-500 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                21
              </div>
              <p className="text-2xl sm:text-3xl text-purple-700 font-medium mt-4">
                Years of Pure Magic ✨
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <ChevronDown className="w-12 h-12 text-purple-600 mx-auto" />
            <p className="text-purple-700 text-lg mt-4">Explore your gift below</p>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Your Birthday Universe
            </h3>
            <p className="text-xl sm:text-2xl text-purple-700 font-light max-w-3xl mx-auto opacity-90">
              Every corner of this site is filled with our memories, laughter, and love — just for you, Gurleen 💫
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group block animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-500 h-full border border-white/40">
                    <div className={`w-20 h-20 bg-gradient-to-br ${getColorClasses(link.color)} rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                      {link.title}
                    </h4>

                    <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed mb-6">
                      {link.description}
                    </p>

                    <div className="flex items-center justify-center text-purple-600 font-semibold group-hover:text-purple-700">
                      <span className="mr-2">Open</span>
                      <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing Teaser */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-12 sm:p-16 border border-white/50">
            <Heart className="w-16 h-16 text-pink-500 mx-auto mb-8 animate-pulse" fill="currentColor" />
            <h3 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-8">
              Made with every beat of my heart
            </h3>
            <p className="text-xl sm:text-2xl text-purple-700 font-light leading-relaxed max-w-4xl mx-auto mb-10">
              This isn't just a website — it's a piece of my soul dedicated to the most incredible best friend in every universe.<br />
              Thank you for being you, Billu. Happy Birthday! 🎂💜
            </p>
            <p className="text-2xl text-purple-600 font-medium">
              — Forever yours, Sarthak ✨
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-fall {
          animation: fall linear infinite;
          animation-duration: 12s;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}