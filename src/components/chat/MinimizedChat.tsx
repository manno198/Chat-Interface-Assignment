'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useChatContext } from '@/contexts/ChatContext';

export const MinimizedChat: React.FC = () => {
  const { toggleMinimized } = useChatContext();

  return (
    <motion.div
      layoutId="chat-container"
      className="fixed bottom-6 right-6 z-40"
      initial={false}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 200,
        duration: 0.6
      }}
    >
      <motion.button
        onClick={toggleMinimized}
        className="w-14 h-14 bg-blue-500/90 backdrop-blur-sm text-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>
    </motion.div>
  );
};