import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {HeroUIProvider} from "@heroui/react";
import {ToastProvider} from "@heroui/toast";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <main className="dark min-h-screen bg-background">
        <ToastProvider/>
        <App />
      </main>
    </HeroUIProvider>
  </StrictMode>,
)
