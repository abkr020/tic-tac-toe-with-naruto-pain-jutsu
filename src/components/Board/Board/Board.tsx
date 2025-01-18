import React, { useState } from "react";
import debugLib from 'debug';
import Block from "../Block/Block";
import "./Board.css";

const debug = debugLib("app:Board");
// const debug = debugLib('app:navbar');


const Board: React.FC = () => {
    debug("Board component render function start");
    const [state, setState] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("x");
    // setState(2);
    // state[0] = "x";

    const checkWinnerFunction = () => {
        debug("state : from the check winner funcition ", state);

        const winningConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for(let i= 0 ; i<winningConditions.length; i++){
            const[a,b,c] = winningConditions[i];
            if(state[a] === state [b] && state[a] === state[c] && state[a] !== null){
                alert("Winner is : " + state[a]);

            }

        }
    }

    const handleBlockClick = (index: number) => {
       if (state[index] === null) {
         debug("handleBlockClick", index);
         // const stateCopy = [...state];
         const stateCopy = Array.from(state);
         state[index] = currentPlayer;
         stateCopy[index] = currentPlayer;
 
         debug("stateCopy : copied array", stateCopy);
 
         setState(stateCopy);
         debug("state : original array", state);
         setCurrentPlayer(currentPlayer === "x" ? "o" : "x");
 
         const checkWinner=checkWinnerFunction();
       }

    }
    debug("return Board component start");
    return (
        <div className="board">
            <div className="row">
                <Block onClick={() => handleBlockClick(0)} value={state[0]} />
                <Block onClick={() => handleBlockClick(1)} value={state[1]} />
                <Block onClick={() => handleBlockClick(2)} value={state[2]} />
            </div>
            <div className="row">
                <Block onClick={() => handleBlockClick(3)} value={state[3]} />
                <Block onClick={() => handleBlockClick(4)} value={state[4]} />
                <Block onClick={() => handleBlockClick(5)} value={state[5]} />

            </div>
            <div className="row">
                <Block onClick={() => handleBlockClick(6)} value={state[6]} />
                <Block onClick={() => handleBlockClick(7)} value={state[7]} />
                <Block onClick={() => handleBlockClick(8)} value={state[8]} />
            </div>
        </div>
    );
}

export default Board;