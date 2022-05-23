import React from "react";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader"
import AddTask from "./AddTask/AddTask"
import Tasks from "./Tasks/Tasks"
import styles2 from "./AddTask/addTask.module.css"


const TaskApp = ({userdata,setUserdata,completed,setCompleted}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {<TaskHeader userdata={userdata} completed={completed} setCompleted={setCompleted}/>}
      {<AddTask setUserdata={setUserdata} userdata={userdata} className={styles2.addTask}/>}
      {<Tasks completed={completed} setCompleted={setCompleted} setUserdata={setUserdata} userdata={userdata}/>}
    </div>
  );
};

export default TaskApp;
