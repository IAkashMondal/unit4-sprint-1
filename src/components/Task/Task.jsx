import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"
const Task = ({el,userdata,setUserdata, completed, setCompleted}) => {
  // NOTE: do not delete `data-cy` key value pair
  
  let [available,setAvailable]=React.useState(false)
 
  let Deleteitem=(elem)=>{
    setUserdata(userdata.filter((item)=>(item.text !== elem)))
    
  }
  let checked=(e)=>
  {
    if(e.target.checked)
    {
      setAvailable(true)
      completed.push(el)
      setCompleted(completed)
    }
    else{
      setAvailable(false)
      Deleteitem(el.elem)
    }
  }
  return (
    <div>
        <li data-cy="task" className={styles.task}>
      <input data-cy="task-checkbox" onChange={checked} type="checkbox"  />
      {available ? <div  data-cy="task-text"><del>{el.text}</del></div>:<div data-cy="task-text">{el.text}</div>}
      {<Counter count={el.count}/>}
      <button  className={styles.Remove_button} onClick={()=>Deleteitem(el.text)} data-cy="task-remove-button">x</button>
      </li>
    </div>
    
  );
};

export default Task;
