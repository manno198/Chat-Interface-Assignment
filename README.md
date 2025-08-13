# Chat Interface by Harshita - Next.js Application

A modern chat interface application built with Next.js, featuring a responsive design with a chat assistant that automatically opens when interacting with the input field.

<img width="1912" height="977" alt="image" src="https://github.com/user-attachments/assets/4602d28b-948f-4947-874b-356d005bced7" />
<img width="1917" height="927" alt="image" src="https://github.com/user-attachments/assets/e373dffb-ceba-47d7-8b0d-2e047ca61443" />


## 🚀 Features

- **Modern UI/UX**: Clean, minimalist design with smooth animations
- **Responsive Chat Assistant**: Automatically opens when clicking the input field
- **Smart Navigation**: Sidebar navigation with proper icon layout
- **Real-time Chat**: Interactive chat interface with message history
- **Responsive Design**: Works seamlessly across different screen sizes
- **Port 8080**: Configured to run on port 8080 by default
- **Cloud Background**: Beautiful cloud background across all pages

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 14.2.31** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Accessible UI primitives
- **Framer Motion** - Animation library

### **State Management & Data**
- **React Context API** - Global state management
- **TanStack React Query** - Data fetching and caching
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### **Build Tools & Development**
- **Next.js** - Build tool and development server
- **PostCSS** - CSS processing
- **ESLint** - Code linting
- **npm** - Package manager

### **Icons & UI Elements**
- **Lucide React** - Beautiful icon library
- **Sonner** - Toast notifications

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd chat-interface-by-harshita
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

The application will be available at **http://localhost:8080**

### 4. Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
chat-interface-by-harshita/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # Search/About page
│   ├── globals.css              # Global styles
│   └── providers.tsx            # Client-side providers
├── src/
│   ├── components/              # React components
│   │   ├── chat/               # Chat-related components
│   │   │   ├── ChatContainer.tsx
│   │   │   ├── ChatHeader.tsx
│   │   │   ├── ChatInput.tsx
│   │   │   ├── ChatMessages.tsx
│   │   │   └── MinimizedChat.tsx
│   │   ├── layout/             # Layout components
│   │   │   └── Navigation.tsx
│   │   └── ui/                 # shadcn/ui components
│   ├── contexts/               # React contexts
│   │   └── ChatContext.tsx
│   └── hooks/                  # Custom hooks
│       └── useChat.ts
├── public/                     # Static assets
│   └── cloudss.jpg            # Cloud background image
├── package.json                # Dependencies and scripts
├── next.config.js             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── postcss.config.js          # PostCSS configuration
```

## 🎯 Key Features Explained

### **Chat Assistant Behavior**
- **Auto-Open**: Clicking "Please type your message" on the home page automatically opens the chat assistant
- **Smart State Management**: Chat assistant remembers its state and opens regardless of previous state
- **Responsive Sizing**: Chat window is exactly 1/4 of the screen size with proper scaling

### **Navigation**
- **Clean Sidebar**: Minimalist navigation with proper icon layout
- **Active States**: Orange highlighting for active navigation items
- **Proper Separation**: Home/Search at top, other items at bottom with separator

### **Styling**
- **Modern Design**: Clean, professional appearance
- **Consistent Colors**: Blue-gray color scheme throughout
- **Smooth Animations**: Framer Motion powered transitions
- **Cloud Background**: Beautiful cloud background across all pages

## 🔧 Available Scripts

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run start` - Start production server on port 8080
- `npm run lint` - Run ESLint

## 🌐 Port Configuration

The application is configured to run on **port 8080** by default. This is set in the `package.json` scripts:

```json
{
  "dev": "next dev -p 8080",
  "start": "next start -p 8080"
}
```

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### **Other Platforms**
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



## 🆘 Troubleshooting

### **Port Already in Use**
If you get an error about port 8080 being in use:
```bash
# Kill all Node.js processes
taskkill /f /im node.exe

# Then restart
npm run dev
```

### **Dependencies Issues**
If you encounter dependency issues:
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### **Build Issues**
If you encounter build issues:
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```


If you encounter any issues or have questions, please open an issue in the repository.
