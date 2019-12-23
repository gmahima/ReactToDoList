import React from "react";
import Task from "./Task";
//import { Div } from "./styled";
import styled from "styled-components";

const Div = styled.div`
  padding: 2px;
  background-color: ${props => (props.tasks.length === 0 ? "white" : "pink")};
  border-radius: 20px;
`;
export default function TaskList(props) {
  const taskList = props.tasks.map((task, index) => (
    <Task index={index} key={task.id.toString()} />
  ));
  return (
    <div>
      <Div tasks={props.tasks}>{taskList}</Div>
    </div>
  );
}
