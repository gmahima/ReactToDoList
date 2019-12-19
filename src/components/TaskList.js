import React from "react";
import { Consumer } from "./context/index";
import Task from "./Task";
//import { Div } from "./styled";
import styled from "styled-components";
const Div = styled.div`
  padding: 2px;
  background-color: ${props => (props.tasks.length === 0 ? "white" : "pink")};
  border-radius: 20px;
`;
export default function TaskList() {
  return (
    <div>
      <Consumer>
        {context => {
          const taskList = context.tasks.map((task, index) => (
            <Task index={index} key={task.id.toString()} />
          ));
          return <Div tasks={context.tasks}>{taskList}</Div>;
        }}
      </Consumer>
    </div>
  );
}
