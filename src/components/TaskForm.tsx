import React, { useState } from "react";
import { Task } from "../types";

interface TaskFormProps {
  addTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [name, setName] = useState("");
  const [effort, setEffort] = useState<number>(0.1);

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
    setEffort(0.1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Task Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Effort (0-1):</label>
        <input
          type="number"
          value={effort}
          onChange={(e) => setEffort(Number(e.target.value))}
          min={0}
          max={1}
          step={0.1}
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
