
import React, {useContext} from "react";
import styled from "styled-components";
import { TaskContext } from "./context/index";
import {Route, Switch, Redirect, NavLink} from 'react-router-dom'

const RadioGroup = styled.div`

display: grid;
grid-template-columns: 6em 6em 6em;
align-content: center;
justify-content: center;
grid-gap: 1em;
@media(max-width: 400px) {
  grid-template-columns: 3em 3em 3em;

  
}

`

// const RadioLabel = styled.NavLink`
// border: 1px solid white;
// cursor: pointer;
// padding: 1em;
// background: ${({checked}) =>  (checked? 'white': 'none')};
// color: ${({checked}) =>  (checked? '#707070': 'white')};
// &:hover {
//   background-color: ${({checked}) =>  (checked? 'white': '#707070')};
//   color: ${({checked}) =>  (checked? '#707070': 'white')};
// }
// @media(max-width: 400px) {
//   padding:0.5em;
//   font-size: 0.5em;
  
// }
// `
const SNavLink = styled(NavLink)`
display: block;
text-decoration: none;
color: white;
border: 1px solid white;
cursor: pointer;
padding: 1em;
&:hover {
  background-color:#707070;
  color:white;
}
&.active {
  background-color: white;
  color:#707070;

}
@media(max-width: 400px) {
  padding:0.5em;
  font-size: 0.5em;
  
}
`
export default function RadioList() {
  const context = useContext(TaskContext);

const radioChange = (e) =>{
    console.log("radio:" + e.target.value)
   context.actions.select(e.target.value);
}
  return (
    <RadioGroup>
          <SNavLink to='/all' activeClassName='active'>all</SNavLink>
          <SNavLink to='/done'>done</SNavLink>
          <SNavLink to='/todo'>todo</SNavLink>
      </RadioGroup>
  );
}