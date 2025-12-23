import React, { useState } from 'react';
import { Gift, Heart, Sparkles, Star, Cookie } from 'lucide-react';

// All your beautiful messages (80+ heartfelt ones)
const messages = [
  "Whenever you need me and I can't be there physically, remember – I'm still right here with you, Billu.",
  "Distance means nothing when our friendship is this strong. I'm always just a thought away.",
  "Even if I'm not beside you, my heart is holding your hand tightly.",
  "You are never alone, Gurleen. I'm always cheering for you from wherever I am.",
  "In every moment you feel low, know that I'm sending you all my strength and hugs.",
  "I'm not there in person, but my love and support are wrapped around you like a warm blanket.",
  "Close your eyes and feel me smiling with you – I'm always in your corner.",
  "No matter how far apart we are, our bond keeps us connected every single second.",
  "I'm not physically there, but I'm still your biggest fan, your protector, your bestie.",
  "Whenever life feels heavy, remember I'm carrying half of it with you, always.",
  "You might not see me, but I'm standing right behind you, pushing you forward.",
  "I'm not there to hold your hand, but I'm holding your heart safely.",
  "Even in silence, I'm talking to you, listening to you, understanding you.",
  "When you miss me, just smile – because I'm missing you too and sending love your way.",
  "I'm not there in body, but my spirit is dancing with you through every moment.",
  "You're never walking alone – I'm matching your steps from afar.",
  "My presence might not be physical, but my care for you is endless and real.",
  "Whenever you feel lost, remember I'm your compass, always pointing you home.",
  "I'm not there to wipe your tears, but I'm sending you a thousand reasons to smile.",
  "Our friendship doesn't need distance limits – I'm with you in every breath.",
  "Even when I'm far, I'm still your safe place, your home, your Billu-ka-Sarthak.",
  "You are always in my thoughts, in my prayers, in my heart – always.",
  "I'm not there right now, but I'm coming back to you with even more love.",
  "No gap can weaken what we have – I'm still your constant, forever.",
  "Feel my virtual hug wrapping around you tightly right now.",
  "I'm not physically present, but my energy is protecting you every day.",
  "Whenever you need a laugh, remember all our silly moments – I'm laughing with you.",
  "I'm always proud of you, even from miles away – louder than anyone.",
  "You're my favorite person, and distance can't change that – not even a little.",
  "I'm not there to share food, but I'm saving the best bite for you in my heart.",
  "Every achievement of yours feels like mine too – celebrating you always.",
  "When you feel scared, remember I'm your courage standing right beside you.",
  "I'm not there to gossip in person, but I'm ready for late-night texts anytime.",
  "Our inside jokes still make me laugh – you're always on my mind.",
  "I'm sending you all my good vibes and positive energy right now.",
  "You are my favorite notification, my favorite thought, my favorite everything.",
  "Even when apart, we’re still making memories in our hearts.",
  "I'm not there to click photos, but you're still the star of my gallery.",
  "Whenever you doubt yourself, hear my voice saying: 'You are incredible, Billu!'",
  "I'm always planning our next adventure in my head – can't wait.",
  "Distance is just a test, and we're acing it every day.",
  "I'm not there to share earphones, but our playlist is still on repeat in my heart.",
  "You make every ordinary moment extraordinary – even from afar.",
  "I'm saving all my stories to tell you in person soon.",
  "Whenever you need motivation, remember I'm your loudest cheerleader.",
  "Our friendship is bigger than any distance – unbreakable, unstoppable.",
  "I'm not there right now, but my love for you is growing every single day.",
  "You are my home, no matter where I am in the world.",
  "I'm always collecting little moments to share with you later.",
  "When you look at the stars, know I'm looking at the same sky thinking of you.",
  "I'm not physically there, but I'm still your partner in all chaos and calm.",
  "Every day apart just makes our reunion sweeter – counting down.",
  "You're the reason I smile randomly throughout the day.",
  "I'm not there to annoy you in person, but I'm doing it in spirit 😜",
  "Our bond is like Wi-Fi – invisible but always connected.",
  "I'm sending you virtual coffee and endless gossip energy.",
  "Whenever you feel overwhelmed, breathe – I'm breathing with you.",
  "I'm always collecting reasons to be proud of you.",
  "Distance can't stop me from caring about every little thing in your life.",
  "You're my favorite chapter in every story of my life.",
  "I'm not there to share memes, but I'm saving the best ones for you.",
  "When you achieve something big, I'm celebrating twice as hard.",
  "Our friendship doesn't pause – it keeps growing every day.",
  "I'm always planning ways to make you smile from afar.",
  "You are my person – today, tomorrow, always.",
  "I'm not physically there, but I'm holding space for you in my heart.",
  "Whenever you need peace, remember I'm sending calm your way.",
  "Our memories play on repeat in my mind – keeping me company.",
  "I'm always rooting for your happiness, louder than anyone.",
  "Distance only makes me appreciate you even more.",
  "I'm collecting all my love to give you the biggest hug soon.",
  "You're never out of my thoughts – not even for a second.",
  "I'm not there to share food, but I'm eating and thinking of you.",
  "Every good thing that happens to me, I want to tell you first.",
  "Our friendship is my favorite notification every day.",
  "I'm always planning our next late-night talk.",
  "When you feel stuck, remember I'm pulling you forward with all my might.",
  "You're my favorite reason to look forward to tomorrow.",
  "I'm not there in person, but I'm still your biggest supporter.",
  "Distance can't dim the light of our friendship – it only shines brighter.",
  "I'm saving all my energy for our next epic hangout.",
  "You make my world better, even from miles away.",
  "I'm always here – in spirit, in heart, in every way that matters.",
  "Whenever you need me, just whisper my name – I'm listening.",
  "Our story is my favorite, and it's far from over.",
  "I'm not physically there, but I'm still walking beside you every step.",
  "You are loved, cherished, and never ever alone.",
  "I'm coming back to you soon with even more love and stories.",
  "Until then, know this: I'm still here, always here, forever here for you, my Billu. 💕"
];

export default function GiftPage() {
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState(false);

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setCurrentMessage(messages[randomIndex]);
    setShowMessage(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-teal-100 py-16 px-4 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 left-10 w-16 h-16 text-pink-300 opacity-30 animate-pulse" fill="currentColor" />
        <Sparkles className="absolute top-40 right-20 w-14 h-14 text-purple-300 opacity-40 animate-pulse delay-500" />
        <Star className="absolute bottom-32 left-1/3 w-12 h-12 text-teal-200 opacity-30 animate-pulse delay-700" fill="currentColor" />
        <Heart className="absolute bottom-20 right-1/4 w-18 h-18 text-pink-200 opacity-30 animate-pulse delay-300" fill="currentColor" />
        <Sparkles className="absolute top-1/3 left-1/2 w-10 h-10 text-purple-300 opacity-40 animate-pulse" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mb-8 shadow-2xl">
            <Gift className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-teal-600 bg-clip-text text-transparent mb-6">
            A Thousand Little Thoughts
          </h1>
          <p className="text-xl sm:text-2xl text-purple-700 font-light opacity-90 max-w-3xl mx-auto leading-relaxed">
            Whenever you're missing me, feeling low, or just want to feel close...<br />
            Break a cookie and get a surprise message from my heart to yours, Billu 💕
          </p>
        </div>

        {/* Main Cookie Button */}
        <div className="text-center my-24">
          <button
            onClick={getRandomMessage}
            className="group relative inline-flex items-center justify-center bg-gradient-to-br from-amber-300 via-orange-300 to-amber-400 text-amber-900 px-12 py-8 rounded-full font-bold text-2xl sm:text-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500"
          >
            <Cookie className="w-16 h-16 mr-6 group-hover:rotate-180 transition-transform duration-1000" />
            <span className="relative z-10">Break Cookie for a Message 🍪</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
          </button>

          <p className="text-purple-600 text-lg mt-8 font-medium">
            Click as many times as you want — every message is just for you
          </p>
        </div>

        {/* Display Random Message */}
        {showMessage && currentMessage && (
          <div className="mt-20 animate-fade-in-up">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 sm:p-16 border border-white/50 max-w-4xl mx-auto ring-4 ring-purple-400/50">
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <Heart className="w-10 h-10 text-white" fill="currentColor" />
                </div>
                <div className="flex-1">
                  <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed tracking-wide font-light italic">
                    "{currentMessage}"
                  </p>
                  <p className="text-right text-purple-700 font-semibold mt-8 text-lg">
                    — Sarthak, always thinking of you 💫
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-purple-600 text-lg">
                Want another thought? Break the cookie again! 🍪
              </p>
            </div>
          </div>
        )}

        {/* Initial state message */}
        {!showMessage && (
          <div className="text-center mt-32">
            <p className="text-2xl text-purple-600 font-light opacity-80">
              Ready for your first message from me?<br />
              Just break the cookie whenever you need a little warmth ✨
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
}