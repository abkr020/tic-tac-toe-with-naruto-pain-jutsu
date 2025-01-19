import React, { useState } from "react";
import debugLib from 'debug';
import Block from "../Block/Block";
import "./Board.css";

const debug = debugLib("app:Board");


const Board: React.FC = () => {
    debug("Board component render function start");
    const [state, setState] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("x");
    const [winner, setWinner] = useState<string | null>(null);

    const checkWinnerFunction = () => {
        debug("state : from the check winner funcition ", state);

        const winningConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (state[a] === state[b] && state[a] === state[c] && state[a] !== null) {
                // alert("Winner is : " + state[a] + " after closing it do not press the ~ key it wiil activate the jutsu of the pain i.e. gravitational pull");
                setWinner(state[a]); // Set the winner to trigger the popup



                setState(Array(9).fill(null));
                return;
            }

        }
    }

    const handleBlockClick = (index: number) => {
        if (state[index] === null) {
            debug("handleBlockClick", index);
            // const stateCopy = [...state]; // this also works
            const stateCopy = Array.from(state);

            state[index] = currentPlayer;
            stateCopy[index] = currentPlayer;

            debug("stateCopy : copied array", stateCopy);

            setState(stateCopy);
            debug("state : original array", state);
            setCurrentPlayer(currentPlayer === "x" ? "o" : "x");

            checkWinnerFunction();
        }

    }

    const closeModal = () => {
        setWinner(null); // Close the popup
    };
    debug("return Board component start");
    return (
        <div className="board">
            {winner && (
                <div className="modal-overlay">
                    <div className="modal">
                        <p>
                            <strong style={{ color: "green" }}>
                                Winner is: {winner} !
                            </strong>
                            <br />
                            <strong style={{ color: "red" }}>
                                do not press the <strong>~</strong> key. It will activate the jutsu of Pain, i.e., gravitational pull !
                            </strong>


                        </p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
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