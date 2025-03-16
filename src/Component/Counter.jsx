import { useReducer } from "react";
import Reducer from "../Reducer/Reducer";
const initialState = { count: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function handleIncrement() {
    dispatch({
      type: "increment",
    });
  }

  function handleDecrement() {
    dispatch({
      type: "decrement",
    });
  }

  function handleReset() {
    dispatch({
      type: "reset",
    });
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 mb-10 mt-10 ">
      <h2 className="font-bold"> {state.count} </h2>
      <button
        onClick={handleIncrement}
        className="border border-gray-400 px-4 py-2 rounded w-25 "
      >
        Increment{" "}
      </button>
      <button
        onClick={handleDecrement}
        className="border border-gray-400 px-4 py-2 rounded w-25"
      >
        Decrement{" "}
      </button>
      <button
        onClick={handleReset}
        className="border border-gray-400 px-4 py-2 rounded w-25"
      >
        Reset{" "}
      </button>
    </div>
  );
};

export default Counter;
