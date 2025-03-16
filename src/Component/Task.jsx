import { useState } from "react";

const Task = ({ task, onChangeTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChangeTask({
              ...task,
              text: e.target.value,
            });
          }}
          className="border  border-gray-400 px-2 rounded m-1"
        />
        <button
          className=" border  border-gray-400 px-2 rounded m-1"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          className=" border  border-gray-400 px-2 rounded m-1"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <li className="">
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChangeTask({
              ...task,
              done: e.target.checked,
            });
          }}
          className="m-1"
        />

        {taskContent}

        <button
          onClick={() => onDeleteTask(task.id)}
          className="border border-gray-400 px-2 rounded m-1"
        >
          Delete
        </button>
      </label>
    </li>
  );
};

export default Task;
