import React, { useState } from "react";
import { Task } from "../types";

interface TaskFormProps {
  addTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [name, setName] = useState("");
  const [effort, setEffort] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    const newTask: Task = {
      id: Date.now(),
      name,
      effort,
      alignments: [],
    };

    addTask(newTask);
    setName("");
    setEffort(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Task Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Effort in hours: </label>
        <select
          value={effort}
          onChange={(e) => setEffort(Number(e.target.value))}
        >
          <option value={1}>1</option>
          <option value={10}>10</option>
          <option value={100}>100+</option>
          <option value={100000}>unreachable</option>
        </select>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
