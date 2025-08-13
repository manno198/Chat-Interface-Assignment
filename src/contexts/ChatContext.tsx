'use client'

import React, { createContext, useContext, ReactNode } from 'react';
import { useChat, ChatState } from '../hooks/useChat';

interface ChatContextType {
  chatState: ChatState;
  addMessage: (content: string, sender: 'user' | 'assistant') => void;
  updateInput: (value: string) => void;
  toggleMinimized: () => void;
  setCurrentPage: (page: 'home' | 'about') => void;
  startPageTransition: (page: 'home' | 'about') => void;
  sendMessage: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const chatHook = useChat();

  return (
    <ChatContext.Provider value={chatHook}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};