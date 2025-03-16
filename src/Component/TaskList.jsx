import Task from "./Task";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <ul className="flex flex-col gap-2 mb-15 m-5">
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          onChangeTask={onChangeTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
