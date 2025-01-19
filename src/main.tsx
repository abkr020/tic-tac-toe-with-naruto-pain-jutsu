import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GameProvider } from './context/GameContext.tsx'
import './index.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </StrictMode>,
)
