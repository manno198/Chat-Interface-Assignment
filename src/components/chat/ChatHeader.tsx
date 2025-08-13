'use client'

import React from 'react';
import { Minimize2 } from 'lucide-react';
import { useChatContext } from '@/contexts/ChatContext';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  onResize: (resized: boolean) => void;
  isResized: boolean;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ onResize, isResized }) => {
  const { toggleMinimized } = useChatContext();

  return (
    <div className="flex items-center justify-end p-4 border-b border-blue-200/50 bg-blue-100/60 backdrop-blur-sm">
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMinimized}
        className="h-8 w-8 p-0 hover:bg-blue-200/50"
        title="Minimize"
      >
        <Minimize2 className="h-4 w-4 text-gray-600" />
      </Button>
    </div>
  );
};