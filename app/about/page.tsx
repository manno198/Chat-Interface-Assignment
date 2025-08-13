'use client'

import { useEffect } from 'react';
import { useChatContext } from '@/contexts/ChatContext';
import { Navigation } from '@/components/layout/Navigation';

export default function AboutPage() {
  const { setCurrentPage } = useChatContext();

  useEffect(() => {
    setCurrentPage('about');
  }, [setCurrentPage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-sky-100 to-blue-100 relative overflow-hidden">
      {/* Cloud Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage: `url('/cloudss.jpg')`
        }}
      />
      
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-background/20" />
      
      <Navigation />
      
      {/* Empty content area - removed all "About Our AI" content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        {/* Content removed as requested */}
      </div>
    </div>
  );
}
