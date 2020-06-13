import React, { useState, createContext } from "react";

export const TaskContext = createContext(null);
export function Provider(props) {
  const [tasks, setTasks] = useState([{name: 'shopping', id:'1shopping', checked: false}, {name: 'anime binge', id:'2anime', checked: false}, {name: 'eat ice cream', id:'3eaticecream', checked: false}]);
  const handleAddTask = name => {
    // setPrevTaskId(prevTaskId + 1);
    setTasks([
      ...tasks,
      {
        name,
        id: tasks.length.toString()+name,
        checked: false
      }
    ]);
   
  };
  //console.log(tasks);
  const handleRemoveTask = id => {
    console.log(id , " is removed")
    setTasks(tasks.filter(p => p.id !== id));
  };
  const toggleIsDone = (id, checked) => {
    // const i = tasks.findIndex(t => t.id === id);
    // let newTasks = tasks.slice();
    // newTasks[i].done = checked;
    // setTasks(newTasks)  
    const n = tasks.slice()
    for (let o of n) {
      if(o.id=== id) {
        o.checked= checked;
      }
    }
    setTasks(n);
}

  
  // const doneTasks = tasks.filter(task => task.done === true);
  // const todoTasks = tasks.filter(task => task.done === false);

  return (
    <TaskContext.Provider
      value={{
        tasks,

        actions: {
          addTask: handleAddTask,
          removeTask: handleRemoveTask,
          toggleIsDone,

          
        }
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

