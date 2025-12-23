import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Camera, Heart, Clock, Brain, Gift, Menu, X, LogOut } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('Billu_auth');
    window.location.reload();
  };

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/memories', icon: Camera, label: 'Memories' },
    { path: '/message', icon: Heart, label: 'Message' },
    { path: '/timeline', icon: Clock, label: 'Timeline' },
    { path: '/quiz', icon: Brain, label: 'Quiz' },
    { path: '/gift', icon: Gift, label: 'Me' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/30 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Billu ✨
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'glass border border-white/40 text-purple-700 shadow-lg text-sm'
                        : 'text-gray-700 hover:text-purple-700 hover:glass hover:border hover:border-white/30 text-sm'
                    }`}
                  >
                    <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="font-medium text-xs sm:text-sm">{item.label}</span>
                  </Link>
                );
              })}
              
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-700 hover:text-red-600 hover:glass hover:border hover:border-white/30 transition-all duration-300 text-sm"
              >
                <LogOut className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium text-xs sm:text-sm">Logout</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-purple-700 hover:glass hover:border hover:border-white/30 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass border-t border-white/30">
            <div className="container mx-auto px-4 py-2">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'glass border border-white/40 text-purple-700 shadow-lg text-sm'
                          : 'text-gray-700 hover:text-purple-700 hover:glass hover:border hover:border-white/30 text-sm'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium text-sm">{item.label}</span>
                    </Link>
                  );
                })}
                
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:text-red-600 hover:glass hover:border hover:border-white/30 transition-all duration-300 w-full text-sm"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium text-sm">Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16"></div>
    </>
  );
}