
import React, {useContext, useState} from "react";
import Task from "./Task";
//import { Div } from "./styled";
import styled from "styled-components";
import { TaskContext } from "./context/index";
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const Div = styled.div`
  padding: 2px;
  background-color: ${props => (props.tasks.length === 0 ? "white" : "pink")};
  border-radius: 20px;
`;
export default function TaskList(props) {
  const context = useContext(TaskContext);
  let tasks;
  // switch(props.tasks) {
  //   case "allTasks": tasks = context.tasks;
  //   break;
  //   case "todoTasks": tasks= context.todoTasks;
  //   break;
  //   case "doneTasks": tasks=context.doneTasks;
  //   break;
  //  default: tasks=[];
  //   break;

  // }
 const [selected, setSelected] = useState("allTasks");
const radioChange = (event) =>{
  console.log("selected: " + selected)
  setSelected(event.target.value);
}
  switch(selected) {
    case "allTasks": tasks = context.tasks;
    break;
    case "todoTasks": tasks= context.todoTasks;
    break;
    case "doneTasks": tasks=context.doneTasks;
    break;
   default: tasks=[];
    break;

  }
  console.log("tasks:");
  console.log(tasks);
  const taskList = tasks.map((task, index) => (

    <Task id={task.id} key={task.id.toString()} />
  ));
  return (
    [
      <label>
        <input
        type='radio'
        value='allTasks'
        checked={selected === "allTasks"}
        onChange={radioChange}
        />All Tasks
      </label>,
      <label>
        <input
        type='radio'
        value='todoTasks'
        checked={selected === "todoTasks"}
        onChange={radioChange}
        />To Do Tasks
      </label>,
      <label>
        <input
        type='radio'
        value='doneTasks'
        checked={selected === "doneTasks"}
        onChange={radioChange}
        />Done Tasks
      </label>,
    <div>
      <Div tasks={tasks}>{taskList}</Div>
    </div>]
  );
}