'use client'

import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useChatContext } from '@/contexts/ChatContext';
import { Home, Search, Settings, HelpCircle, Mail, LogOut } from 'lucide-react';

export const Navigation: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { setCurrentPage } = useChatContext();

  useEffect(() => {
    // Set current page based on pathname on load
    if (pathname === '/') {
      setCurrentPage('home');
    } else if (pathname === '/about') {
      setCurrentPage('about');
    }
  }, [pathname, setCurrentPage]);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const isActive = (path: string) => {
    return pathname === path || (pathname === '/' && path === '/');
  };

  const topNavItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Search', path: '/about', icon: Search },
  ];

  const bottomNavItems = [
    { label: 'Settings', path: '/settings', icon: Settings },
    { label: 'Help', path: '/help', icon: HelpCircle },
    { label: 'Messages', path: '/messages', icon: Mail },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-gray-50/80 backdrop-blur-sm border-r border-gray-200/50 flex flex-col items-center py-4 z-30">
      {/* Top section with Home and Search */}
      <div className="flex flex-col items-center space-y-4">
        {topNavItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                active 
                  ? 'bg-orange-100 text-orange-600 shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`}
              title={item.label}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </div>

      {/* Spacer to push bottom items down */}
      <div className="flex-1" />

      {/* Separator line */}
      <div className="w-8 h-px bg-gray-300 mb-4" />

      {/* Bottom section with Settings, Help, Messages */}
      <div className="flex flex-col items-center space-y-4 mb-4">
        {bottomNavItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                active 
                  ? 'bg-orange-100 text-orange-600 shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`}
              title={item.label}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </div>

      {/* Logout at the very bottom */}
      <div className="flex flex-col items-center">
        <button
          onClick={() => handleNavigation('/logout')}
          className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-all duration-200"
          title="Logout"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};