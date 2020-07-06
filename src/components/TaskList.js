
import React, {useContext} from "react";
import Task from "./Task";
import styled from "styled-components";
import { TaskContext } from "./context/index";

// const Div = styled.div`
//   padding: 2px;
//   background-color: ${props => (props.tasks.length === 0 ? "white" : "pink")};
//   border-radius: 20px;
// `;

export default function TaskList({show}) {
  const context = useContext(TaskContext);

  let myTasks = context.tasks;
    if(show === 'all'){
        myTasks = context.tasks;
    }
    else if(show === 'done'){
        myTasks = context.tasks.filter((a) => a.checked === true)
    }
    else {
        myTasks = context.tasks.filter((a) => a.checked === false)
    }

  const taskList = myTasks.map((task) => (

    <li><Task id={task.id} key={task.id.toString()} /></li>
  ));
  return (

        <TaskUl className="shadow-lg rounded   border pb-0 px-10 pt-0 min-h-3"> 
          {
            taskList
          }
        </TaskUl>


  );
}
const TaskUl = styled.ul`
align-items: start;
list-style: none;
display: grid;
grid-template-columns: 1fr;
grid-auto-rows: 1fr;
grid-gap: 1px;
margin: 0;
padding: 0;
@media(max-width: 400px) {
  
  grid-auto-rows: 2em;
}

`