import React, { useState, useEffect, createContext } from "react";
const Url = 'http://localhost:8000/tasks/'
export const TaskContext = createContext(null);
export function Provider(props) {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = name => {
    const task  = {
      name,
      id: tasks.length.toString()+name,
      checked: false
    }
    setTasks([
      ...tasks,
      task
    ]);
    fetch(Url, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'

    }).then(res => {
        if(res.ok) {
            return res
        }
        else {
            let err = res.json()
            err.res = res;
            throw err; 
        }
    }, error => {
        console.log("error: ", error)
        let errmes = new Error(error.message)
        throw(errmes)
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error =>{console.log(error)})
  };
  useEffect(() => {
    console.log("called")
    fetch(Url)
    .then(res => {
        if(res.ok) {
            return res
        }
        else {
            let err = new Error(res.status + res.statusText)
            err.res = res;
            throw err; 
        }
    }, error => {
        console.log("error: ", error)
        let errmes = new Error(error.message)
        throw(errmes)
    })
    .then(res => res.json())
    .then(tasks => {console.log(tasks); setTasks(tasks)})
    .catch(error =>{console.log(error)})
  }, [])
  //console.log(tasks);
  const handleRemoveTask = id => {
    console.log(id , " is removed")
    setTasks(tasks.filter(p => p.id !== id));
    fetch(Url+id, {
      method: 'DELETE',
    })
    .then(res => res.text())
    .then(res => console.log(res))
    .catch(error =>{console.log(error)})

  };
  const toggleIsDone = (id, checked) => {
    // const i = tasks.findIndex(t => t.id === id);
    // let newTasks = tasks.slice();
    // newTasks[i].done = checked;
    // setTasks(newTasks)  
    let task =  {}
    const n = tasks.slice()
    for (let o of n) {
      if(o.id=== id) {
        o.checked= checked;
        task = o;
      }
    }
    setTasks(n);
    fetch(Url+id, {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      },
   credentials: 'same-origin'
    }).then(res => {
      if(res.ok) {
          return res
      }
      else {
          let err = new Error(res.status+ ": " + res.statusText)
          err.res = res;
          throw err; 
      }
  }, error => {
      console.log("error: ", error)
      let errmes = new Error(error.message)
      throw(errmes)
  })
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(error =>{console.log(error)})
}

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

