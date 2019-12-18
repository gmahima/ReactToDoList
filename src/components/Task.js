import React from "react";
import { Consumer } from "./context/index";
import { Button, ToDo } from "./styled";
import { ThemeProvider } from "styled-components";
export default function Task({ index }) {
  const theme = {
    main: "pink"
  };
  return (
    <Consumer>
      {context => {
        return (
          <div>
            <ToDo>{context.tasks[index].name}</ToDo>,
            <ThemeProvider theme={theme}>
              <Button
                onClick={() => {
                  return context.actions.removeTask(context.tasks[index].id);
                }}
              >
                DONE
              </Button>
            </ThemeProvider>
          </div>
        );
      }}
    </Consumer>
  );
}
