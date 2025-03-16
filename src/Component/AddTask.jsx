import { useState } from "react";
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState(null);

  return (
    <div className="flex mb-5 gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-400 rounded"
      />
      <button
        onClick={() => {
          onAdd(text);
          setText("");
        }}
        className="border border-gray-400 rounded px-3"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
