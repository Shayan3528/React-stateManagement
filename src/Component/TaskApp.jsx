import { useReducer } from "react";
import Reducer from "../Reducer/Reducer";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { initialTasks } from "./Tasks.js";
const TaskApp = () => {
  const [tasks, dispatch] = useReducer(Reducer, initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce(
      (
        prev,
        current /// reduce method  for finding maximum index id
      ) => (prev && prev.id > current.id ? prev.id : current.id)
    );
    return maxId + 1;
  };

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      text: text, /// only text likhleo hobe in sort form
      id: getNextId(tasks),
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task: task,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };

  return (
    <>
      <h1 className="font-bold underline py-2 mb-5">Prague Intinerary</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default TaskApp;
