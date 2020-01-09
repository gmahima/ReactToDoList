import React, {useContext} from "react";
import Task from "./Task";
//import { Div } from "./styled";
import styled from "styled-components";
import { TaskContext } from "./context/index";

const Div = styled.div`
  padding: 2px;
  background-color: ${props => (props.tasks.length === 0 ? "white" : "pink")};
  border-radius: 20px;
`;
export default function TaskList(props) {
  const context = useContext(TaskContext);
  let tasks;
  switch(props.tasks) {
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
    <div>
      <Div tasks={tasks}>{taskList}</Div>
    </div>
  );
}
