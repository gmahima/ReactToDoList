import React, { useState, createContext } from "react";

export const TaskContext = createContext(null);
export function Provider(props) {
  const [tasks, setTasks] = useState([]);
  const options = [{title: 'all', id: 'all'}, {title: 'done', id: 'done'}, {title: 'todo', id:'todo'}]
  const [selected, setSelected] = useState('all')
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
const handleSelect = (id) => {
  setSelected(id)

}

  
  // const doneTasks = tasks.filter(task => task.done === true);
  // const todoTasks = tasks.filter(task => task.done === false);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        options,
        selected,
        actions: {
          addTask: handleAddTask,
          removeTask: handleRemoveTask,
          toggleIsDone,
          select: handleSelect
          
        }
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

