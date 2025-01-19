import Game from './components/Game'
import debugLib from 'debug';
import { useGameContext } from './context/GameContext'
import SpecialGame from './components/SpecialGame';

const debug = debugLib("app:App");


function App() {
  const { gameState } = useGameContext();
  debug("gameState : form app.tsx", gameState);

  return (
    <>
      <div>
        {gameState ?
          (
            <>
              <SpecialGame />
            </>
          ) :
          (
            <>
              <Game />

            </>
          )
        }

      </div>

    </>
  )
}

export default App
