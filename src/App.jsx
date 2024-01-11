/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

function Squire({ value, onSquireClick }) {
  return (
    <button
      onClick={onSquireClick}
      className="border bg-white h-12 w-12 text-lg border-gray-400 m-1 leading-9"
    >
      {value}
    </button>
  );
}

const Board = ({ xIsNext, squire, onPlay }) => {
  const winner = calculateWinner(squire);
  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const handleClick = (i) => {
    if (squire[i] || calculateWinner(squire)) {
      return;
    }
    const nextSquire = squire.slice();
    nextSquire[i] = "X";

    if (xIsNext) {
      nextSquire[i] = "X";
    } else {
      nextSquire[i] = "O";
    }

    onPlay(nextSquire);
  };

  return (
    <>
      <div className="status">{status}</div>
      <div className="flex">
        <Squire value={squire[0]} onSquireClick={() => handleClick(0)} />
        <Squire value={squire[1]} onSquireClick={() => handleClick(1)} />
        <Squire value={squire[2]} onSquireClick={() => handleClick(2)} />
      </div>

      <div className="flex">
        <Squire value={squire[3]} onSquireClick={() => handleClick(3)} />
        <Squire value={squire[4]} onSquireClick={() => handleClick(4)} />
        <Squire value={squire[5]} onSquireClick={() => handleClick(5)} />
      </div>

      <div className="flex">
        <Squire value={squire[6]} onSquireClick={() => handleClick(6)} />
        <Squire value={squire[7]} onSquireClick={() => handleClick(7)} />
        <Squire value={squire[8]} onSquireClick={() => handleClick(8)} />
      </div>
    </>
  );
};

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquire = history[currentMove];

  const handlePlay = (nextSquire) =>{
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquire];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const jumpTo = (move) =>{
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
    
  }

  const moves = history.map((squire,move) =>{
    let description;

    if(move > 0){
      description = 'Go to move #' + move;
    }
    else{
      description = 'Go to game start';
    }

    return (
      <li className="bg-gray-700 mx-3 px-3 text-white" key={move} >
        <button onClick={() =>jumpTo(move)}>{description}</button>
      </li>
    )

  })

  return (
    <>
     <div className="flex justify-center p-4">
     <div className="mr-4">
        <Board
          xIsNext={xIsNext}
          squire={currentSquire}
          onPlay={handlePlay}
        />
      </div>

      <div>
        <ol className="border border-gray-600 p-2 text-lg">{moves}</ol>
      </div>
     </div>
    </>
  );
};

export default Game;

// ei function ti squire state ta ke parameter hishebee nicche
// tarpor eti check korbe amader line e same element ase ki nei
// same element thakle function ti shetike return korbe

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
