import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { TaskContext } from "./components/context/index";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

//import React, { useState, createContext } from "react";

const Title = styled.h1`
  background-color: purple;
  color: pink;
  border-radius: 20px;
`;
const Application = styled.div`
  font-family: sans-serif;
  text-align: center;
`;
//export const TaskContext = createContext(null);
function App() {
  const [tasks, setTasks] = useState([]);
  const [prevTaskId, setPrevTaskId] = useState(0);
  const handleAddTask = name => {
    setTasks([
      ...tasks,
      {
        name,
        id: prevTaskId
      }
    ]);

    setPrevTaskId(prevTaskId + 1);
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
      <Application className="App">
        <Title>My To Do List</Title>

        <TaskList />
        <AddTaskForm />
      </Application>
    </TaskContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />,

  rootElement
);
