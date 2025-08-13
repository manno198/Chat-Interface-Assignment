import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Chat Interface by Harshita',
  description: 'A modern chat interface application built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-sky-200 via-sky-100 to-blue-100 relative overflow-hidden">
        {/* Cloud Background for all pages */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-80 -z-10"
          style={{
            backgroundImage: `url('/cloudss.jpg')`
          }}
        />
        
        {/* Overlay for better contrast */}
        <div className="fixed inset-0 bg-background/20 -z-10" />
        
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
