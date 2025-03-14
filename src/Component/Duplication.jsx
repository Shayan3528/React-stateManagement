import { useState } from "react";

const Child = ({ name, handler }) => {
  return (
    <div className=" flex  flex-col border border-gray-500 rounded  py-3 px-6 my-2">
      <h2>Child : {name} </h2>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => handler(e.target.value)}
        className="border  border-gray-400 rounded px-5"
      />
    </div>
  );
};

const Duplication = () => {
  const [name, setName] = useState("Shayan");
  function handleChange(value) {
    setName(value);
  }

  return (
    <div className=" flex flex-col border border-gray-400 my-10 py-5 px-10">
      <Child name={name} handler={handleChange} />
      <Child name={name} handler={handleChange} />
    </div>
  );
};

export default Duplication;
