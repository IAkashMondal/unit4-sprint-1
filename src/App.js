import React from "react";

function App() {
  let [userdata,setUserdata]=React.useState(data)
  let [completed,setCompleted]=React.useState([])
  
    return <div>{
      <TaskApp completed={completed}setCompleted={setCompleted} userdata={userdata} setUserdata={setUserdata} className={style.taskHeader}/>
      }</div>;
}

export default App;
