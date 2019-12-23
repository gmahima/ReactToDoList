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
        id: prevTaskId,
        done: false
      }
    ]);
  };
  const handleRemoveTask = id => {
    setTasks(tasks.filter(p => p.id !== id));
  };
  const toggleIsDone = id => {
    let newTasks = tasks;
    const i = newTasks.findIndex(t => t.id === id);
    if (newTasks[i].done === false) {
      newTasks[i].done = true;
    } else {
      newTasks[i].done = false;
    }

    setTasks(newTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        actions: {
          addTask: handleAddTask,
          removeTask: handleRemoveTask,
          toggleIsDone: toggleIsDone
        }
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
//export { TaskContext };
