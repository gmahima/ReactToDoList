import React from "react";
import { Consumer } from "./context/index";
import Task from "./Task";
import { Div } from "./styled";
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
