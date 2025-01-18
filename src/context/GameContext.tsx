import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context's shape
interface GameContextProps {
  gameState: (string | null); // Game board state
  setGameState: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context
const GameContext = createContext<GameContextProps | undefined>(undefined);

// Create a provider
export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<string>('');

  return (
    <GameContext.Provider
      value={{
        gameState,
        setGameState,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// Custom hook for using the GameContext
export const useGameContext = (): GameContextProps => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};
