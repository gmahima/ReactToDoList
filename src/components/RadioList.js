
import React, {useContext} from "react";
import { TaskContext } from "./context/index";

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
        <label>
          <input
          type='radio'
          value={o.id}
          checked={context.selected === o.id}
          onChange={radioChange}
          />{o.title}
        </label>
        )

      })}


    </div>
  );
}