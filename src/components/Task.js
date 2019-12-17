import React from "react";
import { Consumer } from "./context/index";

export default function Task({ index }) {
  return (
    <Consumer>
      {context => {
        return (
          <div>
            <h3>{context.tasks[index].name}</h3>,
            <button
              onClick={() => {
                console.log(context.tasks[index].id);
                console.log(context.actions.removeTask);
                return context.actions.removeTask(context.tasks[index].id);
              }}
            >
              DONE
            </button>
          </div>
        );
      }}
    </Consumer>
  );
}
