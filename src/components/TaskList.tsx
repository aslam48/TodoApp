import React from "react";
import Task from "./Task";


interface TaskType {
  id: number;
  title: string;
  completed: boolean;
}


interface TaskListProps {
  tasks: TaskType[];
  onEditTask: (id: number, title: string) => void;
  onDeleteTask: (id: number) => void;
  onToggleCompleted: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEditTask, onDeleteTask, onToggleCompleted }) => {
  const reversedTasks = tasks.slice().reverse();

  return (
    <ul className=" ">
      {reversedTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          onToggleCompleted={onToggleCompleted}
        />
      ))}
    </ul>
  );
};

export default TaskList;
