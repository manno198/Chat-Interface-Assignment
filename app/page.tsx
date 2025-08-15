'use client'

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useChatContext } from '@/contexts/ChatContext';
import { Navigation } from '@/components/layout/Navigation';
import { ChatMessages } from '@/components/chat/ChatMessages';
import { ChatInput } from '@/components/chat/ChatInput';

export default function HomePage() {
  const { setCurrentPage } = useChatContext();

  useEffect(() => {
    // Ensure this page is set as home when it loads
    setCurrentPage('home');
  }, [setCurrentPage]);

  return (
    <div className="min-h-screen relative overflow-hidden flex">
      <Navigation />
      
      {/* Main Content Area with left margin for sidebar */}
      <div className="flex-1 ml-16 flex flex-col relative z-10">
        {/* Chat Messages Area */}
        <div className="flex-1 pb-32 overflow-hidden">
          <ChatMessages />
        </div>
        
        {/* Fixed Chat Input at Bottom */}
        <motion.div 
          layoutId="chat-input-container"
          className="fixed bottom-0 right-0 z-20 bg-card/95 backdrop-blur-sm border-t border-border" 
          style={{ left: '4rem' }}
          transition={{
            layout: {
              type: "spring",
              damping: 25,
              stiffness: 400,
              duration: 0.8
            }
          }}
        >
          <ChatInput />
        </motion.div>
      </div>
    </div>
  );
}
