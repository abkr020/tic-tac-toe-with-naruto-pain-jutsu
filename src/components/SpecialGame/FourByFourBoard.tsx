import React, { useState } from "react";
import Block from "../MiniGame/Board/Board";
// import "./FourByFourBoard.css";

const FourByFourBoard: React.FC = () => {
    const [state, setState] = useState(Array(16).fill(null));
    // const [currentPlayer, setCurrentPlayer] = useState("x");

    // const handleBlockClick = (index: number) => {
    //     if (state[index] === null) {
    //         const stateCopy = Array.from(state);
    //         stateCopy[index] = currentPlayer;
    //         setState(stateCopy);
    //         setCurrentPlayer(currentPlayer === "x" ? "o" : "x");
    //     }
    // };

    return (
        <>

            <h1>hell</h1>
            <Block />
     
        </>
    );
};

export default FourByFourBoard;
