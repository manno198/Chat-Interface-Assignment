'use client'

import React from 'react';
import { Send, Paperclip, Smile } from 'lucide-react';
import { useChatContext } from '@/contexts/ChatContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const ChatInput: React.FC = () => {
  const { chatState, updateInput, sendMessage, startPageTransition, toggleMinimized } = useChatContext();

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleInputClick = () => {
    if (chatState.currentPage === 'home') {
      // If chat is minimized, open it first
      if (chatState.isMinimized) {
        toggleMinimized();
      }
      // Then transition to search page
      startPageTransition('about');
    }
  };

  return (
    <div className="border-t border-blue-200/50 p-4 space-y-3 bg-blue-50/50">
      <Input
        value={chatState.currentInput}
        onChange={(e) => updateInput(e.target.value)}
        onKeyPress={handleKeyPress}
        onClick={handleInputClick}
        placeholder="Please type your message"
        className="w-full cursor-pointer border-gray-300 bg-white"
      />
      
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-2 flex-1">
          <Select defaultValue="option1">
            <SelectTrigger className="w-[120px] h-8 bg-gray-100 border-gray-300 text-gray-700">
              <SelectValue placeholder="Option 1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="option2">
            <SelectTrigger className="w-[120px] h-8 bg-gray-100 border-gray-300 text-gray-700">
              <SelectValue placeholder="Option 2" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="option3">
            <SelectTrigger className="w-[120px] h-8 bg-gray-100 border-gray-300 text-gray-700">
              <SelectValue placeholder="Option 3" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option3">Option 3</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="option4">
            <SelectTrigger className="w-[120px] h-8 bg-gray-100 border-gray-300 text-gray-700">
              <SelectValue placeholder="Option 4" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option4">Option 4</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gray-200">
            <Paperclip className="h-4 w-4 text-gray-600" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gray-200">
            <Smile className="h-4 w-4 text-gray-600" />
          </Button>
          <Button onClick={sendMessage} size="sm" className="h-8 w-8 p-0 bg-orange-400 hover:bg-orange-500">
            <Send className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};