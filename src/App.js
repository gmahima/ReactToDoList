import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ToDoList from "./ToDoList";
export const App = () => (
  <BrowserRouter>
    <div className="container">
      <Route path="/" component={ToDoList} />
    </div>
  </BrowserRouter>
);