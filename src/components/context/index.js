import React, { Component } from "react";

const Context = React.createContext();
export class Provider extends Component {
  state = {
    tasks: [
      {
        name: "sdfasd",
        id: 0
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
  handleRemoveTask = id => {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.filter(p => p.id !== id)
      };
    });
  };
  render() {
    return (
      <Context.Provider
        value={{
          tasks: this.state.tasks,
          actions: {
            addTask: this.handleAddTask,
            removeTask: this.handleRemoveTask
          }
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
