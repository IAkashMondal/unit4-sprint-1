import React from "react";
import styles from "./counter.module.css";

const Counter = ({count}) => {
  // sample value to be replaced
  // NOTE: do not delete `data-cy` key value pair

  let [CountValue,setCountValue]=React.useState(count)
  // intrement & decrement functions--------------------------------------->
  let Increment=()=>
  { if(CountValue>0)
    {
      setCountValue(CountValue + 1)
    }}
  let Decrement=()=>
  { if(CountValue>1)
    {
      setCountValue(CountValue - 1)
    } }
    
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" className={styles.plus_button}  onClick={Increment} > + </button>
      <span   data-cy="task-counter-value"            className={styles.Display}            > {CountValue}</span>
      <button data-cy="task-counter-decrement-button" className={styles.minus_button} onClick={Decrement}>-</button>
    </div>
  );
};

export default Counter;
