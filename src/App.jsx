import React, { useState } from "react";

function Squire({ value, onSquireClick }) {

  return (
    <button onClick={onSquireClick} className="border bg-white h-12 w-12 text-lg border-gray-400 m-1 leading-9">
      {value}
    </button>
  );
}

const Board = () => {

  const [squire, setSquire] = useState(Array(9).fill(null));

  const handleClick = (i) => {

    const nextSquire = squire.slice();
    nextSquire[i] = "X";
    setSquire(nextSquire);
  }

  return (
    <>
      <div className="flex">
        <Squire value={squire[0]} onSquireClick={() => handleClick(0)}/>
        <Squire value={squire[1]} onSquireClick={() => handleClick(1)}/>
        <Squire value={squire[2]} onSquireClick={() => handleClick(2)}/>
      </div>

      <div className="flex">
        <Squire value={squire[3]} onSquireClick={() => handleClick(3)}/>
        <Squire value={squire[4]} onSquireClick={() => handleClick(4) }/>
        <Squire value={squire[5]} onSquireClick={() => handleClick(5)}/>
      </div>

      <div className="flex">
        <Squire value={squire[6]} onSquireClick={() => handleClick(6)}/>
        <Squire value={squire[7]} onSquireClick={() => handleClick(7)}/>
        <Squire value={squire[8]} onSquireClick={() => handleClick(8)}/>
      </div>
    </>
  );
};

export default Board;
