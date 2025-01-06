import React from "react";
import { Task } from "../types";

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.name}</strong> (Effort in Hours: {task.effort})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
