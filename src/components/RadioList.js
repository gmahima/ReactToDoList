
import React, {useContext} from "react";
import styled from "styled-components";
import { TaskContext } from "./context/index";

const RadioLabel = styled.label`
color: white;
margin-right: 0.5em;
cursor: pointer;
text-decoration: ${({checked}) =>  (checked? 'underline': 'none')};
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
    <div>
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


    </div>
  );
}