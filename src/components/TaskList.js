import React from "react";
import { Consumer } from "./context/index";
export default function TaskList() {
  return (
    <Consumer>
      {context => {
        const taskList = context.tasks.map((task, index) => (
          <div>
            <h3>{task.name}</h3>
          </div>
        ));
        return <div>{taskList}</div>;
      }}
    </Consumer>
  );
}
