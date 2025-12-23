import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Calendar, Music, Gift, Users, Trophy, Star } from 'lucide-react';

const storyChapters = [
  {
    id: 1,
    title: 'The Day We Truly Met',
    date: 'August 12, 2023',
    icon: Sparkles,
    color: 'pink',
    text: 'That first proper day in the college canteen, Billu. Those big innocent eyes, your baby face, and that super sweet voice — I was done for. We kept circling each other like magnets. I knew right then that something beautiful had already started. You became my favorite sight from day one.'
  },
  {
    id: 2,
    title: 'Our First Fight (and Your Dramatic Block)',
    date: 'Early Days, 2023',
    icon: Heart,
    color: 'purple',
    text: 'We had our first silly fight — I don’t even remember what it was about now. But you blocked me everywhere, Billu! So bad of you, yrrrrrrr 😭 I was so upset, but deep down I knew I couldn’t stay away. That block only made me realize how much you already meant to me.'
  },
  {
    id: 3,
    title: 'College Fest Magic – November 26, 2023',
    date: 'November 26, 2023',
    icon: Music,
    color: 'blue',
    text: 'The fest day I’ll never forget. I searched everywhere for you — you were sitting all alone, looking lost in the crowd. I finally found you, grabbed your hand, and literally dragged you to the ground. You were hesitant, but then… oh my god, Billu! You turned full Punjabi mode even though you couldn’t understand a single lyric 😂 Dancing with full energy, jumping, spinning — we all went crazy together. I still open those photos and burst out laughing: “Bhai kya ho gaya tha tere ko?!” That day is pure gold in my heart.'
  },
  {
    id: 4,
    title: 'My Birthday – You Were the Star',
    date: 'January 31, 2024',
    icon: Gift,
    color: 'pink',
    text: 'My birthday, and somehow everyone was giving YOU all the attention — dancing with you, clicking pictures, “Noora this, Noora that” 😅 But honestly? I felt so lucky. All my friends treated you like my best friend too. They cared for you, helped you, included you — it felt like you were already family. That made my day even more special.'
  },
  {
    id: 5,
    title: 'The Hard Times Came… But We Stayed',
    date: 'Through 2024–2025',
    icon: Heart,
    color: 'purple',
    text: 'Life threw some really tough moments at us. There were lows, tears, distance, misunderstandings. But guess what? Our fun never stopped. Our bond never broke. We kept laughing, kept supporting, kept choosing each other — every single time.'
  },
  {
    id: 6,
    title: 'Hackathons, Events & Endless Wins',
    date: '2024–2025',
    icon: Trophy,
    color: 'blue',
    text: 'We jumped into so many hackathons together, college events, fests, late-night prep, crazy ideas — wow, what a ride! Winning some, learning from others, but always together. From Statathon to Deep Data to every random competition, you were my partner-in-crime. Life felt like an adventure because you were in it.'
  },
  {
    id: 7,
    title: 'Forever & Always',
    date: 'Now & After',
    icon: Star,
    color: 'pink',
    text: 'From that canteen glance to every fest, every fight, every laugh, every win — you are my constant, Billu. I’ll find you in every universe, every lifetime, every college fest ground. You’re not just my best friend; you’re my home. Here, there, and after life too. Always. 💕'
  }
];

export default function StoryPage() {
  const [visibleChapters, setVisibleChapters] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleChapters(prev => [...prev, id]);
          }
        });
      },
      { threshold: 0.4 }
    );

    storyChapters.forEach(chapter => {
      const element = document.getElementById(`chapter-${chapter.id}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      pink: 'bg-pink-400 border-pink-300 text-pink-600',
      purple: 'bg-purple-400 border-purple-300 text-purple-600',
      blue: 'bg-blue-400 border-blue-300 text-blue-600'
    };
    return colors[color as keyof typeof colors] || colors.pink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-teal-100 py-12 px-4 relative overflow-hidden">
      {/* Soft floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 left-8 w-12 h-12 text-pink-300 opacity-30 animate-pulse" fill="currentColor" />
        <Sparkles className="absolute top-40 right-12 w-10 h-10 text-purple-300 opacity-40 animate-pulse delay-500" />
        <Music className="absolute bottom-32 left-1/3 w-14 h-14 text-teal-200 opacity-30 animate-pulse delay-700" />
        <Star className="absolute bottom-16 right-20 w-12 h-12 text-pink-200 opacity-40 animate-pulse delay-300" fill="currentColor" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <Calendar className="w-10 h-10 text-purple-500 mr-4" />
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-teal-500 bg-clip-text text-transparent">
              Our Story, Chapter by Chapter
            </h1>
            <Heart className="w-10 h-10 text-pink-500 ml-4 animate-pulse" fill="currentColor" />
          </div>
          <p className="text-xl sm:text-2xl text-purple-600 font-light opacity-90">
            From the first spark to forever — every moment with you, my Billu 💌
          </p>
        </div>

        <div className="space-y-20">
          {storyChapters.map((chapter) => {
            const Icon = chapter.icon;
            const isVisible = visibleChapters.includes(chapter.id);

            return (
              <div
                key={chapter.id}
                id={`chapter-${chapter.id}`}
                data-id={chapter.id}
                className={`transform transition-all duration-1000 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/40 overflow-hidden relative">
                  {/* Gentle glow background */}
                  <div className="absolute inset-0 -z-10">
                    <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20 ${chapter.color === 'pink' ? 'bg-pink-300' : chapter.color === 'purple' ? 'bg-purple-300' : 'bg-blue-300'}`}></div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg ${getColorClasses(chapter.color).split(' ')[0]}`}>
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                          {chapter.title}
                        </h2>
                        <span className={`text-sm sm:text-base font-medium px-4 py-2 rounded-full bg-white/70 ${getColorClasses(chapter.color)}`}>
                          {chapter.date}
                        </span>
                      </div>
                      <p className="text-lg sm:text-xl text-gray-700 leading-relaxed tracking-wide">
                        {chapter.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/50">
            <Users className="w-16 h-16 text-purple-500 mx-auto mb-6" />
            <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              And the story keeps growing…
            </p>
            <p className="text-lg sm:text-xl text-purple-600 max-w-2xl mx-auto leading-relaxed">
              Every fight, every laugh, every dance, every late-night hackathon grind — it all led to this unbreakable bond. 
              Thank you for being my best friend, my partner-in-chaos, my home. 
              Here’s to a million more chapters together, Billu. Forever & always. 💖✨
            </p>
            <p className="text-xl mt-8 text-pink-500 font-semibold">— ASH</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse { animation: pulse 4s ease-in-out infinite; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </div>
  );
}