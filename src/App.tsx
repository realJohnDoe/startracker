import React, { useState } from "react";
import { useTasks } from "./hooks/useTasks";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { Task } from "./types";

const App: React.FC = () => {
  const { tasks, loading } = useTasks();
  const [localTasks, setLocalTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setLocalTasks((prev) => [...prev, task]);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={[...tasks, ...localTasks]} />
    </div>
  );
};

export default App;
