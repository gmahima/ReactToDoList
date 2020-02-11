import React, { useState, createContext } from "react";

export const TaskContext = createContext(null);
export function Provider(props) {
  const [tasks, setTasks] = useState([]);
  // const [prevTaskId, setPrevTaskId] = useState(0);
  const handleAddTask = name => {
    // setPrevTaskId(prevTaskId + 1);
    setTasks([
      ...tasks,
      {
        name,
        id: tasks.length.toString()+name,
        done: false
      }
    ]);
   
  };
  //console.log(tasks);
  const handleRemoveTask = id => {
    console.log(id , " is removed")
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
    console.log(id + " is toggled " + newTasks[i].done)
    setTasks(newTasks);
  };
  
  const doneTasks = tasks.filter(task => task.done === true);
  const todoTasks = tasks.filter(task => task.done === false);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        doneTasks: doneTasks,
        todoTasks: todoTasks,
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
