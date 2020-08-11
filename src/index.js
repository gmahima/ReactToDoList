import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./App";
import { Provider } from "./components/context/index";
import './assets/styles.css'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider>
    <ToDoList />
  </Provider>,

  rootElement
);
