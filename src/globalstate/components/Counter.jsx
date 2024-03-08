import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByValue, increment } from "../slices";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>counter:{count}</h1>
      <button type="button" onClick={() => dispatch(increment())}>
        Increase
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        Decrease
      </button>
      <button type="button" onClick={() => dispatch(increaseByValue(50))}>
        IncreamnetBy50
      </button>
    </div>
  );
};

export default Counter;
