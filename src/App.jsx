import React from "react";

function Squire({value}) {
  return (
    <button className="border bg-white h-12 w-12 text-lg border-gray-400 m-1 leading-9">
      {value}
    </button>
  );
}

const Board = () => {
  return (
    <>
      <div>
        <Squire value={1}/>
        <Squire value={2}/>
        <Squire value={3}/>
      </div>

      <div>
        <Squire value={4}/>
        <Squire value={5}/>
        <Squire value={6}/>
      </div>

      <div>
        <Squire value={7}/>
        <Squire value={8}/>
        <Squire value={9}/>
      </div>
    </>
  );
};

export default Board;
