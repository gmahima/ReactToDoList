import React, { useState, createContext } from "react";

export const TaskContext = createContext(null);
export function Provider(props) {
  const [tasks, setTasks] = useState([]);
  const [prevTaskId, setPrevTaskId] = useState(0);
  const handleAddTask = name => {
    setPrevTaskId(prevTaskId + 1);
    setTasks([
      ...tasks,
      {
        name,
        id: prevTaskId
      }
    ]);
  };
  const handleRemoveTask = id => {
    setTasks(tasks.filter(p => p.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        actions: {
          addTask: handleAddTask,
          removeTask: handleRemoveTask
        }
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
//export { TaskContext };
