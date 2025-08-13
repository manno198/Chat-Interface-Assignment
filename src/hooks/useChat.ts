import { useState, useCallback } from 'react';

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatState {
  messages: ChatMessage[];
  currentInput: string;
  isMinimized: boolean;
  currentPage: 'home' | 'about';
  isTransitioning: boolean;
}

export const useChat = () => {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [
      {
        id: '1',
        content: 'Here are your matches for the day!',
        sender: 'assistant',
        timestamp: new Date(Date.now() - 1000 * 60 * 5)
      },
      {
        id: '2',
        content: 'As you can see, all of these were posted just over a few days ago and they fit your strengths perfectly! SpaceX has been hiring pretty frequently so do be on the look out for their new opportunities.',
        sender: 'assistant',
        timestamp: new Date(Date.now() - 1000 * 60 * 4)
      },
      {
        id: '3',
        content: 'Let me know if you\'d like me to do anything else for you, or would you like to direct you to your assigned career counselor if you need any further help!',
        sender: 'assistant',
        timestamp: new Date(Date.now() - 1000 * 60 * 3)
      },
      {
        id: '4',
        content: 'Hey Felix, thank you so much for getting me these matches. I have a few questions about them. From my resume, can you please tell me which of these matches really fit my skills that I have, particularly when it comes to developing software for CNC controllers? I\'d also really appreciate if you could break down those descriptions for me and summarize each them!',
        sender: 'user',
        timestamp: new Date(Date.now() - 1000 * 60 * 2)
      },
      {
        id: '5',
        content: 'Definitely!',
        sender: 'assistant',
        timestamp: new Date(Date.now() - 1000 * 60 * 1)
      }
    ],
    currentInput: '',
    isMinimized: false,
    currentPage: 'home', // Ensure this is set to 'home' by default
    isTransitioning: false
  });

  const addMessage = useCallback((content: string, sender: 'user' | 'assistant') => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: new Date()
    };
    
    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));
  }, []);

  const updateInput = useCallback((value: string) => {
    setChatState(prev => ({
      ...prev,
      currentInput: value
    }));
  }, []);

  const toggleMinimized = useCallback(() => {
    setChatState(prev => ({
      ...prev,
      isMinimized: !prev.isMinimized
    }));
  }, []);

  const setCurrentPage = useCallback((page: 'home' | 'about') => {
    setChatState(prev => ({
      ...prev,
      currentPage: page
    }));
  }, []);

  const setTransitioning = useCallback((isTransitioning: boolean) => {
    setChatState(prev => ({
      ...prev,
      isTransitioning
    }));
  }, []);

  const startPageTransition = useCallback((newPage: 'home' | 'about') => {
    setTransitioning(true);
    
    // After transition completes, update page and stop transitioning
    setTimeout(() => {
      setCurrentPage(newPage);
      setTimeout(() => {
        setTransitioning(false);
      }, 400);
    }, 500);
  }, [setCurrentPage, setTransitioning]);

  const sendMessage = useCallback(() => {
    if (chatState.currentInput.trim()) {
      addMessage(chatState.currentInput, 'user');
      updateInput('');
      
      // Simulate assistant response
      setTimeout(() => {
        addMessage('Thank you for your message! I\'m processing your request.', 'assistant');
      }, 1000);
    }
  }, [chatState.currentInput, addMessage, updateInput]);

  return {
    chatState,
    addMessage,
    updateInput,
    toggleMinimized,
    setCurrentPage,
    startPageTransition,
    sendMessage
  };
};