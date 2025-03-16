import { useState } from "react";

import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { initialTasks } from "./Tasks.js";

const TaskApp = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (data) => {    
    const maxId = data.reduce((prev, current) =>        /// reduce method  for finding maximum index id 
      prev && prev.id > current.id ? prev.id : current.id
    );
    return maxId + 1;
  };

  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        text: text,
        done: false,
      },
    ]);
  };


  const handleChangeTask = (task) => {
    const nextTask = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      }
      return t;
    });
    setTasks(nextTask);
  };


  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
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
