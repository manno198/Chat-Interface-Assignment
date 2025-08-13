'use client'

import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ChatProvider } from "@/contexts/ChatContext"
import { ChatContainer } from "@/components/chat/ChatContainer"
import { ChatTransition } from "@/components/chat/ChatTransition"
import { useState } from "react"

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ChatProvider>
          <Toaster />
          <Sonner />
          {children}
          <ChatTransition />
          <ChatContainer />
        </ChatProvider>
      </TooltipProvider>
    </QueryClientProvider>
  )
}
