import React, { useState } from "react";

function Squire() {

  const [value,setValue] = useState(null);

  const handleClick = () => {
    setValue("x")
  }

  return (
    <button onClick={handleClick} className="border bg-white h-12 w-12 text-lg border-gray-400 m-1 leading-9">
      {value}
    </button>
  );
}

const Board = () => {
  return (
    <>
      <div className="flex">
        <Squire/>
        <Squire/>
        <Squire/>
      </div>

      <div className="flex">
        <Squire/>
        <Squire/>
        <Squire/>
      </div>

      <div className="flex">
        <Squire/>
        <Squire/>
        <Squire/>
      </div>
    </>
  );
};

export default Board;
