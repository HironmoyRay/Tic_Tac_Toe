import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }
  return (
    <button
      className="bg-white w-12 h-12 border border-gray-400 m-1 leading-9 text-lg"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
export default function Board() {
  return (
    <>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
