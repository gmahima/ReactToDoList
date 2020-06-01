import React from "react";
import styled from "styled-components";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import RadioList from "./components/RadioList";

// const TitleDiv = styled.div`
//   width: 1000px;
//   height: 100px;
//   margin: 0px;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: space-around; 

  
// `;
const TitleText = styled.h1`
  color: #87fff9;
  font-size: 3em;
`
const Application = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  text-align: center;
  background-color: black;
  height: 100vh;
  width: 100%;


`;
export default function ToDoList() {
  return (
    <Application className="App">
      <TitleText>My To Do List</TitleText>
      <RadioList />
      <TaskList />
      <AddTaskForm />
    </Application>
  );
}
