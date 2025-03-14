import { useState } from "react";

const Counter = ({ person }) => {
  const [score, setScore] = useState(0);
  return (
    <div className=" border border-gray-500 rounded flex flex-col justif-center items-center py-4 px-4 ">
      <h1 className="font-bold text-xl ">{person}'s score </h1>
      <h2 className="font-medium"> {score}</h2>
      <button onClick={() => setScore(score + 1)}
        className = "border border-gray-400 rounded px-5 py-1 mt-5"  
      >Add One </button>
    </div>
  );
};

const ResetState = () => {
  const [isPlayerA, setIsPlayer] = useState(true);

  return (
    <div className = "flex flex-col items-center ">
      {isPlayerA && <Counter person="Taylor " /> }

      {!isPlayerA && <Counter person="Sarah" />}
       <button onClick = {()=>setIsPlayer(!isPlayerA)} 
        className = "border border-gray-500 mt-6 py-1 px-3 rounded hover:cursor-pointer focus:outline-1  focus:outline-violet-500"
        > Next Player</button>
    </div>
  );
};

export default ResetState;
