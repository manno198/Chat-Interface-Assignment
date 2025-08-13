'use client'

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChatContext } from '@/contexts/ChatContext';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { ChatHeader } from './ChatHeader';
import { MinimizedChat } from './MinimizedChat';

export const ChatContainer: React.FC = () => {
  const { chatState, toggleMinimized } = useChatContext();

  // Don't render anything on home page - let the main page handle the chat
  if (chatState.currentPage === 'home') {
    return null;
  }

  // Show minimized chat when minimized
  if (chatState.isMinimized) {
    return <MinimizedChat />;
  }

  const showContent = !chatState.isTransitioning;

  return (
    <motion.div
    layout
    layoutId="chat-container"
    className="fixed z-40 bg-blue-50/90 backdrop-blur-md border border-blue-200/50 rounded-xl shadow-2xl overflow-hidden bottom-6 right-6"
    style={{
      width: '30vw',        // bigger width (around 1/3 of the window)
      height: '40vh',       // bigger height to match width scaling
      minWidth: '360px',    // keeps it readable on small screens
      minHeight: '450px',   // prevents cramped chat space
    }}
    initial={false}
    animate={{
      opacity: 1,
    }}
    

    
      transition={{
        layout: {
          type: "spring",
          damping: 25,
          stiffness: 400,
          duration: 0.6
        },
        opacity: {
          duration: 0.2
        }
      }}
    >
      <div className="flex flex-col h-full">
        <ChatHeader onResize={() => {}} isResized={false} />
        <AnimatePresence mode="wait">
          {showContent && (
            <motion.div
              key={`${chatState.currentPage}-content`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col overflow-hidden"
            >
              <ChatMessages />
              <ChatInput />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};