import React, { useState } from "react";
import Block from "../MiniGame/Block/Block";
import "./FourByFourBoard.css";
import debugLib from "debug";
const debug = debugLib("app:FourByFourBoard");

const FourByFourBoard: React.FC = () => {
    const [state, setState] = useState(Array(16).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("x");

    // const [currentPlayer, setCurrentPlayer] = useState("x");

    // const handleBlockClick = (index: number) => {
    //     if (state[index] === null) {
    //         const stateCopy = Array.from(state);
    //         stateCopy[index] = currentPlayer;
    //         setState(stateCopy);
    //         setCurrentPlayer(currentPlayer === "x" ? "o" : "x");
    //     }
    // };


    const checkWinnerFunction = () => {
        const winningLines = [
            [0, 1, 2, 3],
            [4, 5, 6, 7],
            [8, 9, 10, 11],
            [12, 13, 14, 15],
            [0, 4, 8, 12],
            [1, 5, 9, 13],
            [2, 6, 10, 14],
            [3, 7, 11, 15],
            [0, 5, 10, 15],
            [3, 6, 9, 12],
        ];

        for (let i = 0; i < winningLines.length; i++) {
            const [a, b, c, d] = winningLines[i];
            if (state[a] && state[a] === state[b] && state[a] === state[c] && state[a] === state[d]) {
                alert("Winner is : " + state[a] + " ");
                const wantToPlayAgain = window.confirm("Do you want to play again?");
                if (wantToPlayAgain) {
                    setState(Array(16).fill(null));
                } else {
                    window.location.reload();
                }
            }
        }
        return null;
    }

    const handleBlockClick = (index: number) => {
        if (state[index] === null) {
            debug("handleBlockClick", index);
            const stateCopy = [...state];
    
            stateCopy[index] = currentPlayer;
            state[index] = currentPlayer;
    
            setState(stateCopy);
            debug("state : original array", state);
            debug("stateCopy : copied array", stateCopy);
            setCurrentPlayer(currentPlayer === "x" ? "o" : "x");

            const checkWinner = checkWinnerFunction();
        }
    }

    return (
        <>
            <div className="fourByFourBoard">
                <div className="fourByFourRow">
                    <Block onClick={() => handleBlockClick(0)} value={state[0]} />
                    <Block onClick={() => handleBlockClick(1)} value={state[1]} />
                    <Block onClick={() => handleBlockClick(2)} value={state[2]} />
                    <Block onClick={() => handleBlockClick(3)} value={state[3]} />

                </div>
                <div className="fourByFourRow">
                    <Block onClick={() => handleBlockClick(4)} value={state[4]} />
                    <Block onClick={() => handleBlockClick(5)} value={state[5]} />
                    <Block onClick={() => handleBlockClick(6)} value={state[6]} />
                    <Block onClick={() => handleBlockClick(7)} value={state[7]} />
                </div>
                <div className="fourByFourRow">
                    <Block onClick={() => handleBlockClick(8)} value={state[8]} />
                    <Block onClick={() => handleBlockClick(9)} value={state[9]} />
                    <Block onClick={() => handleBlockClick(10)} value={state[10]} />
                    <Block onClick={() => handleBlockClick(11)} value={state[11]} />
                </div>
                <div className="fourByFourRow">

                    <Block onClick={() => handleBlockClick(12)} value={state[12]} />
                    <Block onClick={() => handleBlockClick(13)} value={state[13]} />
                    <Block onClick={() => handleBlockClick(14)} value={state[14]} />
                    <Block onClick={() => handleBlockClick(15)} value={state[15]} />
                </div>

            </div>

        </>
    );
};

export default FourByFourBoard;
