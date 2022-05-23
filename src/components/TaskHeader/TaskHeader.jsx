import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({userdata,completed}) => {
  // sample values to be replaced
  // remaning & Total task------------------------------------------>
  let totalTask = userdata.length;
  let Remaning = completed.length;
  // NOTE: do not delete `data-cy` key value pair


  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1 className={styles.task_pera_head} >Todo List</h1>
      <div className={styles.task_center}><h3 data-cy="header-remaining-task">you have {Remaning} of </h3>
       <h3 data-cy="header-total-task"> {totalTask} tasks remanig</h3>
       </div>
    </div>
  )};


export default TaskHeader;
