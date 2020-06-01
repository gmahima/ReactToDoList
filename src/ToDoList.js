import React from "react";
import styled from "styled-components";
import AddTaskForm from "./components/AddTaskForm";
import TasksByStatus from "./components/TasksByStatus";
import TaskList from "./components/TaskList";
import RadioList from "./components/RadioList";

const TitleDiv = styled.div`
  background-color: purple;
  // width: 1000px;
  height: 100px;
  margin: 0px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around; 

  
`;
const TitleText = styled.h1`
  color: white;
`
const Application = styled.div`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  font-family: sans-serif;
  text-align: center;
  background-color: black;
  height: 100vh;
  width: 100%;


`;
export default function ToDoList() {
  return (
    <Application className="App">
      <TitleDiv><TitleText>My To Do List</TitleText></TitleDiv>
      <RadioList />
      <TaskList />
      <AddTaskForm />
    </Application>
  );
}
