import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Pause, Cake, Sparkles, Video } from 'lucide-react';
import heic2any from 'heic2any';

const oldMedia = [
  '/1.JPG', '/2.JPG', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg', '/7.jpg', '/8.jpg', '/9.jpg',
  '/10.jpg', '/11.jpg', '/12.jpg', '/13.jpg', '/14.jpg', '/15.jpg', '/16.jpg', '/17.jpg', '/18.jpg', '/19.jpg',
  '/21.jpg', '/22.jpg', '/23.jpg', '/24.jpg', '/25.jpg', '/26.jpg', '/27.jpg', '/28.jpg', '/29.jpg',
  '/30.jpg', '/31.jpg', '/32.jpg', '/33.jpg', '/34.jpg', '/35.jpg', '/36.jpg', '/37.jpg', '/38.jpg', '/39.jpg',
  '/40.jpg', '/41.jpg', '/42.jpg', '/43.jpg', '/44.jpg', '/45.jpg', '/46.jpg', '/47.jpg',
  '/48.JPG', '/49.JPG', '/50.JPG', '/51.JPG', '/52.JPG',
  '/53.jpg', '/54.jpg', '/55.jpg', '/56.jpg', '/57.jpg', '/58.jpg', '/59.jpg',
  '/60.jpg', '/61.jpg', '/62.jpg', '/63.jpg', '/64.jpg', '/65.jpg', '/66.jpg', '/67.jpg', '/68.jpg', '/69.jpg',
  '/70.jpg', '/71.jpg', '/72.jpg', '/73.jpg', '/74.jpg', '/75.jpg', '/76.jpg', '/77.jpg', '/78.jpg',
];

const birthday21Media = [
  '/21/1.JPG', '/21/2.JPG', '/21/3.JPG', '/21/4.JPG', '/21/5.JPG',
  '/21/6.JPG', '/21/7.JPG', '/21/8.JPG', '/21/9.JPG', '/21/10.JPG',
  '/21/11.JPG', '/21/12.JPG', '/21/13.JPG', '/21/14.JPG', '/21/15.JPG',
  '/21/16.JPG', '/21/17.JPG', '/21/18.JPG', '/21/19.JPG', '/21/20.JPG',
];

type GalleryMode = 'birthday21' | 'old';

const mediaMap: Record<GalleryMode, string[]> = {
  birthday21: birthday21Media,
  old: oldMedia,
};

export default function GalleryPage() {
  const [mode, setMode] = useState<GalleryMode | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [convertedUrls, setConvertedUrls] = useState<{ [key: number]: string }>({});

  const allMediaSrc = mode ? mediaMap[mode] : [];
  const allMedia = allMediaSrc.map(src => ({
    originalSrc: src,
    type: src.endsWith('.mov') ? 'video' : 'image' as 'image' | 'video',
  }));

  // Title & description based on mode
  const title = mode === 'birthday21' 
    ? "Noora's 21st Birthday Memories 🎉" 
    : "All Our Beautiful Moments";
  const description = mode === 'birthday21'
    ? "Special moments from your 21st birthday! Enjoy, Billu! ✨💖"
    : "All our precious memories together. HEIC files are automatically converted. Enjoy, Billu! ✨💖";

  // HEIC conversion
  const getDisplayUrl = async (index: number) => {
    if (convertedUrls[index]) return convertedUrls[index];

    const src = allMedia[index].originalSrc;
    if (allMedia[index].type === 'video' || src.match(/\.(jpe?g|jpg|png)$/i)) {
      return src;
    }

    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const convertedBlob = await heic2any({ blob, toType: 'image/jpeg', quality: 0.85 });
      const url = URL.createObjectURL(convertedBlob as Blob);
      setConvertedUrls(prev => ({ ...prev, [index]: url }));
      return url;
    } catch (err) {
      console.error(`Failed to convert ${src}`, err);
      return src;
    }
  };

  useEffect(() => {
    if (isPlaying && selectedIndex !== null) {
      const interval = setInterval(() => {
        setCurrentSlideIndex((prev) => (prev + 1) % allMedia.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, selectedIndex]);

  useEffect(() => {
    if (selectedIndex !== null) setCurrentSlideIndex(selectedIndex);
  }, [selectedIndex]);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setCurrentSlideIndex(index);
    setIsPlaying(false);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    setIsPlaying(false);
  };

  const nextMedia = () => setCurrentSlideIndex((prev) => (prev + 1) % allMedia.length);
  const prevMedia = () => setCurrentSlideIndex((prev) => prev === 0 ? allMedia.length - 1 : prev - 1);
  const togglePlayPause = () => setIsPlaying(!isPlaying);

  const currentMedia = allMedia[currentSlideIndex];
  const currentUrl = convertedUrls[currentSlideIndex] || currentMedia?.originalSrc || '';

  // Selection screen
  if (!mode) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <div 
          className="fixed inset-0 -z-10"
          style={{
            backgroundImage: `url('/nooraBG.JPG')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30"></div>

        <div className="flex flex-col items-center justify-center min-h-screen px-8">
          <Cake className="w-32 h-32 sm:w-40 sm:h-40 text-pink-300 drop-shadow-2xl mb-12" fill="currentColor" strokeWidth={1.5} />
          
          <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-blue-300 to-pink-300 bg-clip-text text-transparent text-center mb-8">
            Choose Your Memories
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">
            <button
              onClick={() => setMode('birthday21')}
              className="relative overflow-hidden rounded-3xl p-12 backdrop-blur-md bg-white/10 border-2 border-white/30 hover:border-pink-300/70 hover:bg-white/20 transition-all duration-500 shadow-2xl group"
            >
              <div className="flex flex-col items-center text-center">
                <Sparkles className="w-20 h-20 text-yellow-300 mb-6 animate-pulse" />
                <h2 className="text-3xl font-bold text-white mb-4">21st Birthday 🎂</h2>
                <p className="text-white/80 text-lg">20 special photos from your latest celebration</p>
              </div>
            </button>

            <button
              onClick={() => setMode('old')}
              className="relative overflow-hidden rounded-3xl p-12 backdrop-blur-md bg-white/10 border-2 border-white/30 hover:border-blue-300/70 hover:bg-white/20 transition-all duration-500 shadow-2xl group"
            >
              <div className="flex flex-col items-center text-center">
                <Sparkles className="w-20 h-20 text-blue-300 mb-6 animate-pulse" />
                <h2 className="text-3xl font-bold text-white mb-4">All Old Moments 💖</h2>
                <p className="text-white/80 text-lg">Our full collection of beautiful memories</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main gallery view
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url('/nooraBG.JPG')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30"></div>

      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <Cake className="w-24 h-24 sm:w-32 sm:h-32 text-pink-300 drop-shadow-2xl" fill="currentColor" strokeWidth={1.5} />
            {/* Candles and sparkles same as before */}
            <div className="absolute top-4 left-10 w-1 h-8 bg-yellow-300 rounded-t-sm shadow-md">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-3 bg-orange-400 rounded-full animate-flicker"></div>
            </div>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1 h-9 bg-yellow-300 rounded-t-sm shadow-md">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-3 bg-orange-400 rounded-full animate-flicker delay-200"></div>
            </div>
            <div className="absolute top-4 right-10 w-1 h-8 bg-yellow-300 rounded-t-sm shadow-md">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-3 bg-orange-400 rounded-full animate-flicker delay-75"></div>
            </div>
            <Sparkles className="w-8 h-8 text-blue-300 absolute -top-6 left-6 animate-spin-slow" />
            <Sparkles className="w-7 h-7 text-pink-300 absolute -top-8 right-8 animate-spin-slow delay-500" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-300 to-pink-300 bg-clip-text text-transparent px-4">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 font-light mt-6 max-w-3xl mx-auto px-4">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {allMedia.map((media, index) => {
            const isVideo = media.type === 'video';
            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 group backdrop-blur-sm bg-white/10 border border-white/20 shadow-xl aspect-square"
                onClick={() => openLightbox(index)}
              >
                {isVideo ? (
                  <div className="w-full h-full flex items-center justify-center bg-black/30">
                    <Video className="w-16 h-16 text-white opacity-90" />
                  </div>
                ) : (
                  <ConvertedImage index={index} getDisplayUrl={getDisplayUrl} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <p className="text-white text-sm font-medium">{isVideo ? 'Watch Video' : 'View Full'}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox (unchanged) */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative w-full h-full max-w-5xl max-h-screen" onClick={e => e.stopPropagation()}>
            <button onClick={closeLightbox} className="absolute top-4 right-4 z-20 text-white p-3 rounded-full backdrop-blur-md bg-white/20 hover:bg-white/30 transition">
              <X className="w-8 h-8" />
            </button>
            <button onClick={prevMedia} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white p-4 rounded-full backdrop-blur-md bg-white/20 hover:bg-white/30 transition">
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button onClick={nextMedia} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white p-4 rounded-full backdrop-blur-md bg-white/20 hover:bg-white/30 transition">
              <ChevronRight className="w-10 h-10" />
            </button>
            <button onClick={togglePlayPause} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white p-4 rounded-full backdrop-blur-md bg-white/20 hover:bg-white/30 transition flex items-center gap-3">
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
              <span className="text-lg">{isPlaying ? 'Pause' : 'Play Slideshow'}</span>
            </button>

            <div className="w-full h-full flex items-center justify-center">
              {currentMedia.type === 'video' ? (
                <video src={currentMedia.originalSrc} controls autoPlay={isPlaying} loop className="max-w-full max-h-full rounded-lg shadow-2xl" />
              ) : (
                <img src={currentUrl} alt="" className="max-w-full max-h-full object-contain rounded-lg" onLoad={() => getDisplayUrl(currentSlideIndex)} />
              )}
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-lg backdrop-blur-md bg-black/40 px-6 py-3 rounded-full">
              {currentSlideIndex + 1} / {allMedia.length}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes flicker { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-flicker { animation: flicker 1.5s infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      `}</style>
    </div>
  );
}

function ConvertedImage({ index, getDisplayUrl }: { index: number; getDisplayUrl: (i: number) => Promise<string> }) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    getDisplayUrl(index).then(setUrl);
  }, [index, getDisplayUrl]);

  if (!url) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-white/10">
        <div className="animate-pulse text-white/60 text-sm">Loading...</div>
      </div>
    );
  }

  return <img src={url} alt="" className="w-full h-full object-cover" />;
}