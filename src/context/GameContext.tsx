import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import debugLib from "debug";
const debug = debugLib("app:game-context");
// Define the context's shape
interface GameContextProps {
  gameState: string; // Game board state
  setGameState: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context
const GameContext = createContext<GameContextProps | undefined>(undefined);

// Create a provider
export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<string>("");

  // Handle key press event
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "~") { // Replace "a" with your desired key

        debug("%ccheck game state = to q or not","color: green;",gameState);
        debug("%ccheck game state = to q or not","color: green;",!gameState);
        if (gameState) {
          debug("Game state is q, setting to empty");
          setGameState("");
          debug("%cSetting game state","color : red;",gameState);

        } else {
          debug("Setting game state to q");
          setGameState("q");
          // gameState = "q";

        }
      }
      // Add other conditions as needed
    };

    // Attach the event listener
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [gameState]);

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
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
