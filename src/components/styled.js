import styled from "styled-components";
import React from "react";

export const Button = styled.button`
  color: pink;
  background: purple;
  padding: 1em;
  margin: 10px;
  border-radius: 20px;
  display: inline-block;
`;
export const ToDo = styled.span`
  color: purple;
  font-size: 2em;
`;

export const TextInput = styled.input`
  width: 30%;
  padding: 12px 20px;
  margin: 8px 3px;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: purple;
  color: pink;
`;
export const Submit = styled(TextInput)`
  padding: 1px 2px;
  margin: 8px 3px;
`;
export const Div = styled.div`
  padding: 2px;
  background-color: ${props => (props.tasks.length === 0 ? "white" : "pink")};
  border-radius: 20px;
`;
export const Title = styled.h1`
  background-color: purple;
  color: pink;
  border-radius: 20px;
`;
