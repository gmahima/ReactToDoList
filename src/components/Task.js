import React from "react";
import { Consumer } from "./context/index";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const ToDo = styled.span`
  color: purple;
  font-size: 2em;
`;

const Button = styled.button`
  color: ${props => props.theme.main};
  background: purple;
  padding: 1em;
  margin: 10px;
  border-radius: 20px;
  display: inline-block;
`;

Button.defaultProps = {
  theme: {
    main: "white"
  }
};
export default function Task({ index }) {
  const theme = {
    main: "pink"
  };
  return (
    <Consumer>
      {context => {
        console.log(context.tasks[index].name);
        return (
          <div>
            <ToDo>{context.tasks[index].name}</ToDo>
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
