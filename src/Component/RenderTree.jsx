import { useState } from "react";

const Counter = () => {
  const [score, setScore] = useState(0);
  return (
    <div className="border flex flex-col items-center justify-center p-5 rounded  mb-2 ">
      <h1 className="font-bold my-2">{score}</h1>
      <button
        className="border border-gray-500 px-4 py-1 rounded"
        onClick={() => setScore(score + 1)}
      >
        {" "}
        Add One
      </button>
    </div>
  );
};

const RenderTree = () => {
  const [isPasued, setIsPaused] = useState(false);
  return (
    <div>
      {isPasued ? <p>See you later!</p> : <Counter />}
      <label>
        <input
          type="checkbox"
          checked={isPasued}
          className="mx-2"
          onChange={(e) => {
            setIsPaused(e.target.checked);
          }}
        />
        Take a Break
      </label>
    </div>
  );
};

export default RenderTree;
