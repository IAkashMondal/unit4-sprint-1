import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({userdata,setUserdata}) => {
  // NOTE: do not delete `data-cy` key value pair
  // UseState Input taking-------------------------->
  let[input,setInput]=React.useState("")
  let inputValue=(e)=>{
    setInput(e.target.value)
  }

  let addData=({id})=>{
    // if(id !== id){
      userdata.push({id:Date.now(),text:input,done:true,count:1})
    setUserdata(userdata)
    // }
    
   
  }
  return (
    <div className={styles.todoForm}>
      <input className={styles.input_text} placeholder="Add task..." value={input}
             onChange={inputValue} data-cy="add-task-input" type="text" />
      <button className={styles.input_button} onClick={addData} data-cy="add-task-button">+</button>
    </div>
    
  );
};

export default AddTask;