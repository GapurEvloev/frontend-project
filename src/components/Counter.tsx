import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div >
      <button className={classes.btn} onClick={increment}>increment {count}</button>
    </div>
  );
};
