
import React, {useContext} from "react";
import Task from "./Task";
import styled from "styled-components";
import { TaskContext } from "./context/index";

// const Div = styled.div`
//   padding: 2px;
//   background-color: ${props => (props.tasks.length === 0 ? "white" : "pink")};
//   border-radius: 20px;
// `;
const Li = styled.li`
border-bottom: 1px solid black;
`
export default function TaskList() {
  const context = useContext(TaskContext);

  let myTasks = context.tasks;
    if(context.selected === 'all'){
        myTasks = context.tasks;
    }
    else if(context.selected === 'done'){
        myTasks = context.tasks.filter((a) => a.checked === true)
    }
    else {
        myTasks = context.tasks.filter((a) => a.checked === false)
    }

  const taskList = myTasks.map((task) => (

    <Li><Task id={task.id} key={task.id.toString()} /></Li>
  ));
  return (

        <TaskUl>
          {
            taskList
          }
        </TaskUl>


  );
}
const TaskUl = styled.ul`
list-style: none;
display: grid;
grid-template-columns: 1fr;
grid-auto-rows: 4em;
margin: 0;
padding: 0;
@media(max-width: 400px) {
  
  grid-auto-rows: 2em;
}

`