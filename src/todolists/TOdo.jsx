import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adding, removing } from "./slice";

const Todo = () => {
  const [text, setText] = useState("");
  const todoArray = useSelector((state) => state.todo.todo_array);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      dispatch(adding({ id: Date.now(), text: text }));
      setText(""); // Clear the input field after adding todo
    }
  };
  const handleRemoveTodo = (id) => {
    dispatch(removing(id));
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>TODOLISTS</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      {todoArray.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.text}</h1>
          <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
