'use client'

import React from 'react';
import { useChatContext } from '@/contexts/ChatContext';
import { useRouter, usePathname } from 'next/navigation';

export const ChatTransition: React.FC = () => {
  const { chatState } = useChatContext();
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    if (chatState.isTransitioning) {
      const targetPath = chatState.currentPage === 'home' ? '/' : '/about';
      if (pathname !== targetPath) {
        const timer = setTimeout(() => {
          router.push(targetPath);
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [chatState.isTransitioning, chatState.currentPage, router, pathname]);

  return null;
};