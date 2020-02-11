import React, {useContext, useState, useEffect} from "react";
import Task from "./Task";
//import { Div } from "./styled";
import styled from "styled-components";
import { TaskContext } from "./context/index";
// import {RadioGroup, Radio} from 'react-radio-group'

const Div = styled.div`
  padding: 2px;
  background-color: ${props => (props.tasks.length === 0 ? "white" : "pink")};
  border-radius: 20px;
`;
export default function TaskList(props) {
  const context = useContext(TaskContext);
  let tasks = context.tasks;
useEffect(() => {  
  console.log(context)
  switch(props.tasks) {
    case "allTasks": tasks = context.tasks;
    break;
    case "todoTasks": tasks= context.todoTasks;
    break;
    case "doneTasks": tasks=context.doneTasks;
    break;
   default: tasks=[];
    break;

   }},[context])
  // let doneTasks = tasks.filter(task => task.done === true);
  // let todoTasks = tasks.filter(task => task.done === false);
//  const [selected, setSelected] = useState("allTasks");
// const radioChange = (event) =>{
//   setSelected(event.target.value);
// }
//   switch(selected) {
//     case "allTasks": tasks = context.tasks;
//     break;
//     case "todoTasks": tasks = context.tasks.filter(task => task.done === false);
//     break;
//     case "doneTasks": tasks=context.doneTasks.filter(task => task.done === true);;
//     break;
//    default: tasks=[];
//     break;

//   }
  // console.log("tasks:");
  // console.log(tasks);
  const taskList = tasks.map((task, index) => (

    <Task id={task.id} key={task.id.toString()} />
  ));
  return (

    <div>
      <Div tasks={tasks}>{taskList}</Div>
    </div>
  );
}
