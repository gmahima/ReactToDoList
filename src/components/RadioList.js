
import React, {useContext} from "react";
import styled from "styled-components";
import { TaskContext } from "./context/index";

const RadioGroup = styled.div`

display: grid;
grid-template-columns: 6em 6em 6em;
align-content: center;
justify-content: center;
grid-gap: 20px;

`

const RadioLabel = styled.label`
border: 1px solid white;
cursor: pointer;
padding: 1em;
background: ${({checked}) =>  (checked? 'white': 'none')};
color: ${({checked}) =>  (checked? 'grey': 'white')};
`

const RadioInput = styled.input`
cursor: pointer;
background: none;
display: none;
`

export default function RadioList() {
  const context = useContext(TaskContext);

const radioChange = (e) =>{
    console.log("radio:" + e.target.value)
   context.actions.select(e.target.value);
}
  return (
    <RadioGroup>
      {context.options.map((o) => {

        return(
        <RadioLabel checked={context.selected === o.id}>
          <RadioInput
          type='radio'
          value={o.id}
          checked={context.selected === o.id}
          onChange={radioChange}
          />{o.title}
        </RadioLabel>
        )

      })}


    </RadioGroup>
  );
}