import React, { useContext } from "react";
import Task from "./Task";
//import { Div } from "./styled";
import styled from "styled-components";
import { TaskContext } from "./context/index";
const Div = styled.div`
  padding: 2px;
  background-color: ${props => (props.tasks.length === 0 ? "white" : "pink")};
  border-radius: 20px;
`;
export default function TaskList() {
  const context = useContext(TaskContext);
  const taskList = context.tasks.map((task, index) => (
    <Task index={index} key={task.id.toString()} />
  ));
  return (
    <div>
      <Div tasks={context.tasks}>{taskList}</Div>
    </div>
  );
}
