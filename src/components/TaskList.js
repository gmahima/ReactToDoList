
import React, {useContext} from "react";
import Task from "./Task";
import styled from "styled-components";
import { TaskContext } from "./context/index";

const Div = styled.div`
  padding: 2px;
  background-color: ${props => (props.tasks.length === 0 ? "white" : "pink")};
  border-radius: 20px;
`;
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

    <Task id={task.id} key={task.id.toString()} />
  ));
  return (

    <div>
      <Div tasks={taskList}>{taskList}</Div>
    </div>

  );
}