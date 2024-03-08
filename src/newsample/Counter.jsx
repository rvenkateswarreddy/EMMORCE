import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { adding, deleting, increasingBy20 } from "../globalstate/slices1";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={() => dispatch(adding())}>add</button>
      <button onClick={() => dispatch(deleting())}>delete</button>
      <button onClick={() => dispatch(increasingBy20(20))}>+20</button>
    </div>
  );
};

export default Counter;
