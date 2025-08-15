'use client'

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useChatContext } from '@/contexts/ChatContext';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export const ChatMessages: React.FC = () => {
  const { chatState } = useChatContext();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatState.messages]);

  return (
    <ScrollArea className="flex-1 p-4 h-full">
      <motion.div 
        className="space-y-4"
        animate={{ 
          opacity: chatState.isTransitioning ? 0 : 1 
        }}
        transition={{ 
          duration: 0.4,
          ease: "easeInOut"
        }}
      >
        {chatState.messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: chatState.isTransitioning ? 0 : 1, 
              y: chatState.isTransitioning ? -10 : 0 
            }}
            transition={{ 
              delay: chatState.isTransitioning ? (chatState.messages.length - index - 1) * 0.05 : index * 0.15,
              duration: 0.5,
              ease: "easeInOut"
            }}
            className={`flex gap-3 ${
              message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <Avatar className="w-8 h-8 flex-shrink-0">
              <AvatarFallback className={
                message.sender === 'user' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-blue-200 text-gray-700'
              }>
                {message.sender === 'user' ? 'U' : 'AI'}
              </AvatarFallback>
            </Avatar>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === 'user'
                  ? 'bg-white text-gray-800 border border-gray-200'
                  : 'bg-blue-100 text-gray-800'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              <span className="text-xs opacity-70 mt-2 block">
                {message.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
            </div>
          </motion.div>
        ))}
        <div ref={scrollRef} />
      </motion.div>
    </ScrollArea>
  );
};