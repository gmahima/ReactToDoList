import React, { Component } from "react";

const Context = React.createContext();
export class Provider extends Component {
  state = {
    tasks: [
      {
        name: "sdfasd"
      }
    ]
  };
  prevTaskId = 0;
  handleAddTask = name => {
    this.setState(prevState => {
      return {
        tasks: [
          ...prevState.tasks,
          {
            name,
            id: (this.prevTaskId += 1)
          }
        ]
      };
    });
  };
  render() {
    return (
      <Context.Provider
        value={{
          tasks: this.state.tasks,
          actions: { addTask: this.handleAddTask }
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
