import React from "react";
import { Consumer } from "./context/index";
import { Button, ToDo } from "./styled";
export default function Task({ index }) {
  return (
    <Consumer>
      {context => {
        return (
          <div>
            <ToDo>{context.tasks[index].name}</ToDo>,
            <Button
              onClick={() => {
                return context.actions.removeTask(context.tasks[index].id);
              }}
            >
              DONE
            </Button>
          </div>
        );
      }}
    </Consumer>
  );
}
